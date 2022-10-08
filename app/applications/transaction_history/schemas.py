import uuid
from datetime import datetime
from typing import Optional, TypeVar
from enum import Enum

from pydantic import BaseModel


class ExtendedEnum(Enum):

    @classmethod
    def list(cls):
        return list(map(lambda c: c.value, cls))


class BaseProperties(BaseModel):
    def create_update_dict(self):
        return self.dict(
            exclude_unset=True,
            exclude={"id", "is_superuser", "is_active"},
        )


class TransactionType(str, ExtendedEnum):
    purchase = "Покупка"
    transfer = "Перевод"
    enrollment = "Зачисление"


class BaseTransaction(BaseProperties):
    title: str
    description: str
    cost: float
    user_id: int
    supervisor_id: int
    badge_id: int
    status: TransactionType = None


class BaseTransactionDB(BaseTransaction):
    id: int

    class Config:
        orm_mode = True


class BaseTransactionOut(BaseTransaction):
    id: int

    class Config:
        orm_mode = True
