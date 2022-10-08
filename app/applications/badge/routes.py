import os

import aiofiles as aiofiles

from app.core.auth.utils.contrib import get_current_active_user
from app.core.blockchain.utils.transaction import send_ruble
from app.core.blockchain.schemas import TransactionHash, SendRuble

from app.applications.users.models import User
from app.applications.users.schemas import UserRole
from app.applications.badge.models import Badge
from app.applications.badge.schemas import BaseBadge, BaseBadgeDB, BaseBadgeOut

from typing import List

from fastapi import APIRouter, Depends, HTTPException, UploadFile

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


@router.post("/", response_model=BaseBadgeOut, status_code=200, tags=['badges'])
async def create_badge(
    current_user: User = Depends(get_current_active_user),
):
    badges = await Badge.get_by_user(user_id=current_user.id)
    return badges


# @router.post("/", response_model=BaseBadgeOut, status_code=201, tags=['badges'])
# async def create_badge(
#     badge_in: BaseBadge,
#     current_user: User = Depends(get_current_active_user)
# ):
#     if current_user.role != UserRole.supervisor:
#         raise HTTPException(
#             status_code=404,
#             detail="Этот пользователь не является руководителем",
#         )
#     db_badge = BaseBadge(
#         **badge_in.create_update_dict(),
#     )
#     created_badge = await Badge.create_badge(db_badge)
#     return created_badge


@router.post("/uploadfile/", status_code=201, tags=['badges'])
async def create_upload_file(file: UploadFile):
    file_path = os.path.join(Settings.UPLOAD_DIR_PATH, file.filename)
    async with aiofiles.open(file_path, 'wb') as out_file:
        content = await file.read()
        await out_file.write(content)
    # contents = await file.read()
    # file.file.write(Settings.UPLOAD_DIR_PATH)
    return {"filename": file.filename}
