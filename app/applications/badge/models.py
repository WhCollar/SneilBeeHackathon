from typing import Optional

from tortoise import fields
from tortoise.exceptions import DoesNotExist

from app.applications.badge.schemas import BaseBadge
from app.core.base.base_models import BaseCreatedUpdatedAtModel, BaseDBModel


class Badge(BaseDBModel, BaseCreatedUpdatedAtModel):

    title = fields.CharField(max_length=50, unique=True)
    image = fields.TextField()
    description = fields.TextField(null=True)
    user_id = fields.ForeignKeyField("models.User")

    @classmethod
    async def get_by_id(cls, id: int) -> Optional["Badge"]:
        try:
            query = cls.get_or_none(id=id)
            badge = await query
            return badge
        except DoesNotExist:
            return None

    @classmethod
    async def get_by_user(cls, user_id: id) -> Optional[list["Badge"]]:
        try:
            query = cls.filter(user_id=user_id)
            badge = await query
            return badge
        except DoesNotExist:
            return None

    @classmethod
    async def create_badge(cls, badge: BaseBadge) -> "Badge":
        badge_dict = badge.dict()
        model = cls(**badge_dict)
        await model.save()
        return model

    class Meta:
        table = 'badge'

