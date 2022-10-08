from fastapi import BackgroundTasks, Response

from app.core.auth.utils.contrib import get_current_active_user
from app.core.blockchain.utils.transaction import send_ruble
from app.core.blockchain.schemas import TransactionHash, SendRuble

from app.applications.users.models import User
from app.applications.users.schemas import UserRole
from app.applications.tasks.models import Task
from app.applications.tasks.schemas import BaseTaskCreate, BaseTaskOut, BaseTask, BaseTaskUpdate

from typing import List

from fastapi import APIRouter, Depends, HTTPException

import logging
logger = logging.getLogger(__name__)

router = APIRouter()


@router.get("/", response_model=List[BaseTaskOut], status_code=200, tags=['tasks'])
async def read_tasks(
    current_user: User = Depends(get_current_active_user),
):
    users = await Task.get_by_user(user_id=current_user.id)
    return users


@router.post("/", response_model=BaseTaskOut, status_code=201, tags=['tasks'])
async def create_task(
    *,
    task_in: BaseTaskCreate,
    current_user: User = Depends(get_current_active_user)
):
    if current_user.role != UserRole.supervisor:
        raise HTTPException(
            status_code=404,
            detail="Этот пользователь не является руководителем",
        )
    db_task = BaseTaskCreate(
        **task_in.create_update_dict(),
    )
    created_task = await Task.create(db_task)
    return created_task


@router.put("/{task_id}", response_model=BaseTaskOut, status_code=200, tags=['tasks'])
async def update_task(
    task_id: int,
    task_in: BaseTaskUpdate,
    current_user: User = Depends(get_current_active_user),
):
    if current_user.role != UserRole.supervisor:
        raise HTTPException(
            status_code=404,
            detail="Этот пользователь не является руководителем",
        )
    task = await Task.get(id=task_id)
    if not task:
        raise HTTPException(
            status_code=404,
            detail="Такая задача не существует",
        )
    task = await task.update_from_dict(task_in.create_update_dict())
    await task.save()
    return task


@router.post("/complete/{task_id}", response_model=BaseTaskOut, status_code=200, tags=['tasks'])
async def complete_task(
    task_id: int,
    task_in: BaseTaskUpdate,
    current_user: User = Depends(get_current_active_user),
):
    if current_user.role != UserRole.supervisor:
        raise HTTPException(
            status_code=404,
            detail="Этот пользователь не является руководителем",
        )
    task = await Task.get(id=task_id)
    if not task:
        raise HTTPException(
            status_code=404,
            detail="Такая задача не существует",
        )
    recipient = await User.get(id=task_in.user_id)
    if not recipient:
        raise HTTPException(
            status_code=404,
            detail="Получатель не найден",
        )
    sender = await User.get(id=task_in.supervisor_id)
    if not recipient:
        raise HTTPException(
            status_code=404,
            detail="Получатель не найден",
        )
    transaction_data = SendRuble(
        fromPrivateKey=sender.private_wallet_key,
        toPublicKey=recipient.public_wallet_key,
        amount=task.cost
    )
    transaction_data = send_ruble(transaction_data)
    if not transaction_data:
        raise HTTPException(
            status_code=404,
            detail="Отправить награду не удалось, повторите попытку",
        )
    task = await task.update_from_dict(task_in.create_update_dict())
    await task.save()
    return task


