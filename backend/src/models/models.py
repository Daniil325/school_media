from sqlalchemy import JSON, ForeignKey, String, Uuid, DateTime
from sqlalchemy.orm import DeclarativeBase, mapped_column


class Base(DeclarativeBase):
    pass


class Theme(Base):
    __tablename__ = "theme"
    
    id = mapped_column(Uuid, primary_key=True)
    name = mapped_column(String)
    
    
class PostType(Base):
    __tablename__ = "post_type"
    
    id = mapped_column(Uuid, primary_key=True)
    name = mapped_column(String)


class Post(Base):
    __tablename__ = "post"
    
    id = mapped_column(Uuid, primary_key=True)
    title = mapped_column(String, nullable=False)
    description = mapped_column(String, nullable=False)
    content = mapped_column(JSON, nullable=False)
    pub_date = mapped_column(DateTime)
    theme = mapped_column(ForeignKey(Theme.id), nullable=False)
    format = mapped_column(String, nullable=False)
    type = mapped_column(ForeignKey(PostType.id))