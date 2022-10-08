from typing import Optional

from pydantic import BaseModel


class WalletKeys(BaseModel):
    publicKey: str
    privateKey: str


class SendMatic(BaseModel):
    fromPrivateKey: str
    toPublicKey: str
    amount: float


class SendRuble(BaseModel):
    fromPrivateKey: str
    toPublicKey: str
    amount: float


class SendNFT(BaseModel):
    fromPrivateKey: str
    toPublicKey: str
    amount: float


class WalletBalance(BaseModel):
    maticAmount: float
    coinsAmount: float


class NFT(BaseModel):
    URI: str
    tokens: list[int]


class NFTBalance(BaseModel):
    balance: list[NFT]


class TransactionHash(BaseModel):
    transactionHash: Optional[str]
