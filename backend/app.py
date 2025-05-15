from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from backend.src.api.post import router as post_router

app = FastAPI()

def create_app() -> FastAPI:
    app = FastAPI()
    
    app.include_router(post_router)
    
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://localhost:5173"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    
    return app