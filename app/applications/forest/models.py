from typing import Optional

from tortoise import fields
from tortoise.exceptions import DoesNotExist

from app.applications.tasks.schemas import BaseTaskCreate
from app.core.base.base_models import BaseCreatedUpdatedAtModel, BaseDBModel


class Forest(BaseDBModel, BaseCreatedUpdatedAtModel):

    title = fields.CharField(max_length=20, unique=True)
    description = fields.CharField(max_length=255, unique=True)
    cost = fields.CharField(max_length=50, null=True)
    user_id = fields.ForeignKeyField("models.User")
    supervisor_id = fields.ForeignKeyField("models.User")
    badge_id = fields.IntField(null=True)
    status = fields.CharField(max_length=50)

    @classmethod
    async def get_by_id(cls, id: int) -> Optional["Forest"]:
        try:
            query = cls.get_or_none(id=id)
            task = await query
            return task
        except DoesNotExist:
            return None

    @classmethod
    async def get_by_user(cls, user_id: id) -> Optional[list["Forest"]]:
        try:
            query = cls.filter(user_id=user_id)
            tasks = await query
            return tasks
        except DoesNotExist:
            return None

    @classmethod
    async def create_task(cls, task: BaseTaskCreate) -> "Forest":
        task_dict = task.dict()
        model = cls(**task_dict)
        await model.save()
        return model

    class Meta:
        table = 'forest'

