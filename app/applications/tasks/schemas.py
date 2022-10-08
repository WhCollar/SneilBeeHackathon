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


class TaskStatus(str, Enum):
    active = "Активна"
    postponed = "Отложена"
    finished = "Завершена"


class BaseTask(BaseProperties):
    title: str
    description: str
    cost: float
    user_id: int
    supervisor_id: int
    badge_id: int
    status: TaskStatus = TaskStatus.active


class BaseTaskCreate(BaseProperties):
    title: str
    description: str
    cost: float
    user_id: int
    supervisor_id: int
    badge_id: int
    status: TaskStatus = TaskStatus.active


class BaseTaskUpdate(BaseProperties):
    title: str
    description: str
    cost: float
    user_id: int
    supervisor_id: int
    badge_id: int
    status: TaskStatus = TaskStatus.active


class BaseTaskDB(BaseTask):
    id: int
    title: str
    description: str
    cost: float
    user_id: int
    supervisor_id: int
    badge_id: int
    status: TaskStatus = TaskStatus.active

    class Config:
        orm_mode = True


class BaseTaskOut(BaseTask):
    id: int

    class Config:
        orm_mode = True
