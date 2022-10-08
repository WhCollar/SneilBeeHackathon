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


@router.get("/", response_model=List[BaseTaskOut], status_code=200, tags=['forest'])
async def read_tasks(
    current_user: User = Depends(get_current_active_user),
):
    users = await Task.get_by_user(user_id=current_user.id)
    return users


