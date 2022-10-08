import uuid
from datetime import datetime
from typing import Optional, TypeVar
from enum import Enum

from pydantic import BaseModel, EmailStr, UUID4, validator


class BaseProperties(BaseModel):
    def create_update_dict(self):
        return self.dict(
            exclude_unset=True,
            exclude={"id", "is_superuser", "is_active"},
        )


class BaseBadge(BaseProperties):
    title: str
    file_id: int
    description: str
    user_id: int


class BaseBadgeDB(BaseBadge):
    id: int

    class Config:
        orm_mode = True


class BaseBadgeOut(BaseBadge):
    id: int

    class Config:
        orm_mode = True
