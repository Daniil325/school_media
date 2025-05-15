from typing import Any, TypeVar
from uuid import UUID, uuid4

from sqlalchemy import delete, insert, select, update

from backend.src.models.models import Post
from backend.src.models.session import async_session_maker

T = TypeVar("T")


class SqlHelper[T]:

    def __init__(self, model) -> None:
        self.model = model

    @staticmethod
    def new_id() -> UUID:
        return uuid4()

    async def get_all(self) -> list[T]:
        async with async_session_maker() as session:
            stmt = select(self.model)
            return (await session.execute(stmt)).scalars().all()

    async def get(self, id: UUID) -> T | None:
        async with async_session_maker() as session:
            stmt = select(self.model).where(self.model.id == id)
            return (await session.execute(stmt)).scalar_one_or_none()

    async def add(self, item: dict[str, Any]) -> None:
        async with async_session_maker() as session:
            item["id"] = self.new_id()
            stmt = insert(self.model).values(**item).returning(self.model.id)
            res = await session.execute(stmt)
            await session.commit()
            return res.scalar_one()

    async def update(self, id: UUID, changes: dict[str, Any]) -> None:
        stmt = update(self.model).where(self.model.id == id).values(**changes)
        await self.session.execute(stmt)
        await self.session.commit()

    async def delete(self, id: UUID) -> None:
        stmt = delete(self.model).where(self.model.id == id)
        await self.session.execute(stmt)
        await self.session.commit()
        
        
class PostRepo(SqlHelper):
    
    def __init__(self):
        super().__init__(Post)
