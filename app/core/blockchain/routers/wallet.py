from fastapi import APIRouter, HTTPException, BackgroundTasks, Depends
from app.core.auth.utils.contrib import get_current_active_user
from app.applications.users.models import User
from app.core.blockchain.utils.wallet import create_wallet, wallet_balance, wallet_nft_balance
from app.core.blockchain.schemas import WalletKeys, WalletBalance, NFTBalance

router = APIRouter()


@router.post("/create", response_model=WalletKeys, tags=["wallet"])
async def creating_wallet(current_user: User = Depends(get_current_active_user)):
    return await create_wallet()


@router.get("/balance", response_model=WalletBalance, tags=["wallet"])
async def get_wallet_balance(
    current_user: User = Depends(get_current_active_user)
):
    return await wallet_balance(current_user.private_wallet_key)


@router.get("/nft/balance", response_model=NFTBalance, tags=["wallet"])
async def get_nft_wallet_balance(
    current_user: User = Depends(get_current_active_user)
):
    return await wallet_nft_balance(current_user.private_wallet_key)

