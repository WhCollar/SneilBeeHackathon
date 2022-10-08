import aiohttp
from app.settings.config import settings
from app.core.blockchain.schemas import SendRuble, TransactionHash


async def send_ruble(send_data: SendRuble):
    async with aiohttp.ClientSession() as session:
        url = f"{settings.BLOCKCHAIN_SERVICE_HOST}/v1/transfers/ruble"
        async with session.post(url, data=send_data.json()) as response:
            return TransactionHash.parse_raw(await response.text())



