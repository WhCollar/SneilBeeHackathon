from typing import Optional

from tortoise import fields
from tortoise.exceptions import DoesNotExist

from app.applications.files.schemas import BaseFile
from app.core.base.base_models import BaseCreatedUpdatedAtModel, BaseDBModel


class File(BaseDBModel, BaseCreatedUpdatedAtModel):

    title = fields.CharField(max_length=100, unique=True)
    path = fields.TextField()
    user = fields.ForeignKeyField("models.User")

    @classmethod
    async def get_by_id(cls, id: int) -> Optional["File"]:
        try:
            query = cls.get_or_none(id=id)
            file = await query
            return file
        except DoesNotExist:
            return None

    @classmethod
    async def get_by_user(cls, user_id: id) -> Optional[list["File"]]:
        try:
            query = cls.filter(user_id=user_id)
            files = await query
            return files
        except DoesNotExist:
            return None

    @classmethod
    async def create_file(cls, file: BaseFile) -> "File":
        file_dict = file.dict()
        model = cls(**file_dict)
        await model.save()
        return model

    class Meta:
        table = 'file'

