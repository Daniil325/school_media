from pydantic_settings import BaseSettings


class Settings:
    db_url: str = "sqlite+aiosqlite:///database.db"


settings = Settings()
