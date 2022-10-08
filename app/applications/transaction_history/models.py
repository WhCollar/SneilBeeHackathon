from typing import Optional

from tortoise import fields
from tortoise.exceptions import DoesNotExist

from app.applications.transaction_history.schemas import BaseTransaction
from app.core.base.base_models import BaseCreatedUpdatedAtModel, BaseDBModel


class TransactionHistory(BaseDBModel, BaseCreatedUpdatedAtModel):

    sender = fields.ForeignKeyField("models.User", related_name="sender")
    recipient = fields.ForeignKeyField("models.User", related_name="recipient")
    amount = fields.FloatField()
    transaction_hash = fields.CharField(max_length=256)
    type = fields.CharField(max_length=50)

    @classmethod
    async def get_by_id(cls, id: int) -> Optional["TransactionHistory"]:
        try:
            query = cls.get_or_none(id=id)
            transaction = await query
            return transaction
        except DoesNotExist:
            return None

    @classmethod
    async def get_by_user(cls, user_id: id, transaction_type: str) -> Optional[list["TransactionHistory"]]:
        try:
            query = cls.filter(user_id=user_id, type=transaction_type)
            transaction = await query
            return transaction
        except DoesNotExist:
            return None

    @classmethod
    async def create_transaction_entry(cls, transaction: BaseTransaction) -> "TransactionHistory":
        transaction_dict = transaction.dict()
        model = cls(**transaction_dict)
        await model.save()
        return model

    class Meta:
        table = 'transaction_history'
