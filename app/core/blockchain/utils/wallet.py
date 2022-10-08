import aiohttp
from app.settings.config import settings
from app.core.blockchain.schemas import WalletKeys, WalletBalance, NFTBalance


async def create_wallet():
    async with aiohttp.ClientSession() as session:
        url = f"{settings.BLOCKCHAIN_SERVICE_HOST}/v1/wallets/new"
        async with session.post(url) as response:
            return WalletKeys.parse_raw(await response.text())


async def wallet_balance(private_wallet_key):
    async with aiohttp.ClientSession() as session:
        url = f"{settings.BLOCKCHAIN_SERVICE_HOST}/v1/wallets/{private_wallet_key}/balance"
        async with session.get(url) as response:
            return WalletBalance.parse_raw(await response.text())


async def wallet_nft_balance(private_wallet_key):
    async with aiohttp.ClientSession() as session:
        url = f"{settings.BLOCKCHAIN_SERVICE_HOST}/v1/wallets/{private_wallet_key}/nft/balance"
        async with session.get(url) as response:
            return NFTBalance.parse_raw(await response.text())

