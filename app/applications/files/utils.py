import os

import aiofiles

from app.settings.config import Settings
from fastapi import HTTPException
from app.applications.files.models import File
from app.applications.files.schemas import BaseFile


async def save_file(upstream_file, user_id):
    file_path = os.path.join(Settings.UPLOAD_DIR_PATH, upstream_file.filename)
    async with aiofiles.open(file_path, 'wb') as out_file:
        content = await upstream_file.read()
        save_result = await out_file.write(content)
        if not save_result:
            raise HTTPException(
                status_code=400,
                detail="Ошибка при сохранении файла на диск",
            )
    file_obj = BaseFile(
        title=upstream_file.filename,
        path=file_path,
        user_id=user_id,
    )
    created_file = await File.create_file(file_obj)
    return created_file
