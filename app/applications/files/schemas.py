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


class BaseFile(BaseProperties):
    title: str
    path: str
    user_id: int


class BaseFileDB(BaseFile):
    id: int

    class Config:
        orm_mode = True


class BaseFileOut(BaseFile):
    id: int

    class Config:
        orm_mode = True
