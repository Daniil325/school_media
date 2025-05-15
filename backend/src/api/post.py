from datetime import datetime
from typing import Annotated, Any
from uuid import UUID
from fastapi import APIRouter, Depends, Query
from pydantic import BaseModel

from backend.src.api.deps import post_service
from backend.src.repositories.repositories import PostRepo

router = APIRouter(prefix='/post', tags=['Posts'])


@router.get("/")
async def list_posts(
    service: Annotated[PostRepo, Depends(post_service)]
):
    items = await service.get_all()
    return {"items": items}


class CreatePost(BaseModel):
    title: str
    description: str
    content: dict[str, Any]
    pub_date: datetime = datetime.utcnow()
    theme: UUID
    format: str
    type: UUID


@router.post("/")
async def post_post(
    item: CreatePost, service: Annotated[PostRepo, Depends(post_service)]
):
    
    item_dict = item.model_dump()
    result = await service.add(item_dict)
    return result