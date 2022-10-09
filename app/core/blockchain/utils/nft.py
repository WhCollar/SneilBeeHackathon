import aiohttp
from app.settings.config import settings
from app.core.blockchain.schemas import NFTCollectionData, TransactionHash


async def generate_nft_collection(nft_collection_data: NFTCollectionData):
    async with aiohttp.ClientSession() as session:
        url = f"{settings.BLOCKCHAIN_SERVICE_HOST}/v1/nft/generate"
        async with session.post(url, data=nft_collection_data.json()) as response:
            return TransactionHash.parse_raw(await response.text())



