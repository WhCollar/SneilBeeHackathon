import os

import aiofiles as aiofiles

from app.core.auth.utils.contrib import get_current_active_user
from app.core.blockchain.utils.transaction import send_ruble
from app.core.blockchain.schemas import TransactionHash, SendRuble
from app.applications.files.utils import save_file

from app.applications.users.models import User
from app.applications.users.schemas import UserRole
from app.applications.badge.models import Badge
from app.applications.badge.schemas import BaseBadge, BaseBadgeDB, BaseBadgeOut

from typing import List

from fastapi import APIRouter, Depends, HTTPException, UploadFile, Form

import logging

from app.settings.config import Settings

logger = logging.getLogger(__name__)

router = APIRouter()


@router.get("/", response_model=List[BaseBadgeOut], status_code=200, tags=['badges'])
async def read_badge(
    current_user: User = Depends(get_current_active_user),
):
    badges = await Badge.get_by_user(user_id=current_user.id)
    return badges


@router.post("/", response_model=BaseBadgeOut, status_code=201, tags=['badges'])
async def create_badge(
    file: UploadFile,
    text: str = Form(),
    current_user: User = Depends(get_current_active_user)
):
    created_file = await save_file(file, current_user.id)
    if not created_file:
        raise HTTPException(
            status_code=400,
            detail="Ошибка при сохранении файла",
        )
    db_badge = BaseBadge(
        title=file.filename,
        file_id=created_file.id,
        description=text,
        user_id=current_user.id,
    )
    created_badge = await Badge.create_badge(db_badge)
    return created_badge
