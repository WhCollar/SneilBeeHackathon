from typing import Optional

from tortoise import fields
from tortoise.exceptions import DoesNotExist

from app.applications.tasks.schemas import BaseTaskCreate
from app.core.base.base_models import BaseCreatedUpdatedAtModel, UUIDDBModel, BaseDBModel


class Task(BaseDBModel, BaseCreatedUpdatedAtModel, UUIDDBModel):

    title = fields.CharField(max_length=20, unique=True)
    description = fields.CharField(max_length=255, unique=True)
    cost = fields.CharField(max_length=50, null=True)
    user_id = fields.ForeignKeyField("models.User")
    supervisor_id = fields.ForeignKeyField("models.User")
    badge_id = fields.IntField(null=True)
    status = fields.CharField(max_length=50)

    @classmethod
    async def get_by_id(cls, id: int) -> Optional["Task"]:
        try:
            query = cls.get_or_none(id=id)
            task = await query
            return task
        except DoesNotExist:
            return None

    @classmethod
    async def get_by_user(cls, user_id: id) -> Optional[list["Task"]]:
        try:
            query = cls.get(user_id=user_id)
            tasks = await query
            return tasks
        except DoesNotExist:
            return None

    @classmethod
    async def create(cls, task: BaseTaskCreate) -> "Task":
        user_dict = task.dict()
        model = cls(**user_dict)
        await model.save()
        return model

    class Meta:
        table = 'task'
