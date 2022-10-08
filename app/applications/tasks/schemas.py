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


class BaseTask(BaseProperties):
    title: str
    description: str
    cost: float
    user_id: int
    supervisor_id: int
    badge_id: int


class BaseTaskCreate(BaseProperties):
    title: str
    description: str
    cost: float
    user_id: int
    supervisor_id: int
    badge_id: int


class BaseTaskUpdate(BaseProperties):
    title: str
    description: str
    cost: float
    user_id: int
    supervisor_id: int
    badge_id: int


class BaseTaskDB(BaseTask):
    id: int
    title: str
    description: str
    cost: float
    user_id: int
    supervisor_id: int
    badge_id: int

    class Config:
        orm_mode = True


class BaseUserOut(BaseTask):
    id: int

    class Config:
        orm_mode = True
