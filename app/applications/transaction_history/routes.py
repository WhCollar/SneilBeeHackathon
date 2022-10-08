from app.core.auth.utils.contrib import get_current_active_user

from app.applications.users.models import User
from app.applications.transaction_history.models import TransactionHistory
from app.applications.transaction_history.schemas import BaseTransactionOut, TransactionType

from typing import List

from fastapi import APIRouter, Depends, HTTPException

import logging
logger = logging.getLogger(__name__)

router = APIRouter()


@router.get("/{transaction_type}", response_model=List[BaseTransactionOut], status_code=200, tags=['transaction'])
async def read_transaction(
    transaction_type: str,
    current_user: User = Depends(get_current_active_user),
):
    if transaction_type not in TransactionType.list():
        raise HTTPException(
            status_code=404,
            detail="Отправлен не верный тип транзакции",
        )
    transaction = await TransactionHistory.get_by_user(user_id=current_user.id, transaction_type=transaction_type)
    return transaction

