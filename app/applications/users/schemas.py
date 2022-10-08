import uuid
from datetime import datetime
from typing import Optional, TypeVar
from enum import Enum

from pydantic import BaseModel, EmailStr, UUID4, validator


class BaseProperties(BaseModel):
    @validator("hashed_id", pre=True, always=True, check_fields=False)
    def default_hashed_id(cls, v):
        return v or uuid.uuid4()

    def create_update_dict(self):
        return self.dict(
            exclude_unset=True,
            exclude={"id", "is_superuser", "is_active"},
        )

    def create_update_dict_superuser(self):
        return self.dict(exclude_unset=True, exclude={"id"})


class UserRole(str, Enum):
    administrator = 'Администратор'
    redactor = 'Редактор'
    employee = 'Сотрудник'
    supervisor = 'Руководитель'


class BaseUser(BaseProperties):
    first_name: Optional[str]
    last_name: Optional[str]
    hashed_id: Optional[UUID4] = None
    email: Optional[EmailStr] = None
    username: Optional[str] = None
    role: UserRole = UserRole.employee
    badge_id: int
    is_active: Optional[bool] = True
    is_superuser: Optional[bool] = False
    created_at: Optional[datetime]


class BaseUserCreate(BaseProperties):
    first_name: Optional[str]
    last_name: Optional[str]
    hashed_id: Optional[UUID4] = None
    email: EmailStr
    username: Optional[str]
    password: str
    public_wallet_key: str
    private_wallet_key: str
    badge_id: int = None
    role: UserRole = UserRole.employee


class BaseUserUpdate(BaseProperties):
    first_name: Optional[str]
    last_name: Optional[str]
    password: Optional[str]
    email: Optional[EmailStr]
    username: Optional[str]
    badge_id: int
    role: UserRole = UserRole.employee


class BaseUserDB(BaseUser):
    id: int
    hashed_id: UUID4
    password_hash: str
    public_wallet_key: str
    private_wallet_key: str
    updated_at: datetime
    last_login: Optional[datetime]

    class Config:
        orm_mode = True


class BaseUserOut(BaseUser):
    id: int

    class Config:
        orm_mode = True
