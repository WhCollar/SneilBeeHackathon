from fastapi import APIRouter, HTTPException, BackgroundTasks, Depends
from app.core.auth.utils.contrib import get_current_active_user
from app.applications.users.models import User
from app.core.blockchain.utils.transaction import send_ruble
from app.core.blockchain.schemas import TransactionHash, SendRuble, SendRubleTo

router = APIRouter()


@router.post("/create", response_model=TransactionHash, tags=["transaction"])
async def creating_transaction(
    recipient_in: SendRubleTo,
    current_user: User = Depends(get_current_active_user)
):
    recipient = await User.get(id=recipient_in.user_id)
    if not recipient:
        raise HTTPException(
            status_code=404,
            detail="Получатель не найден",
        )
    transaction_data = SendRuble(
        fromPrivateKey=current_user.private_wallet_key,
        toPublicKey=recipient.public_wallet_key,
        amount=recipient_in.amount
    )
    return await send_ruble(transaction_data)


@router.post("/buy", response_model=TransactionHash, tags=["transaction"])
async def creating_transaction(
    sender_in: SendRubleTo
):
    recipient = await User.get(id=1)
    sender = await User.get(id=sender_in.user_id)
    if not sender:
        raise HTTPException(
            status_code=404,
            detail="Покупатель не найден",
        )
    transaction_data = SendRuble(
        fromPrivateKey=sender.private_wallet_key,
        toPublicKey=recipient.public_wallet_key,
        amount=sender_in.amount
    )
    return await send_ruble(transaction_data)
