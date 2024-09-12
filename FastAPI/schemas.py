from pydantic import BaseModel
from typing import Optional 
#
#   Article schemas
#
class ArticleBase(BaseModel):
    title: str
    description: str

class ArticleCreate(ArticleBase):
    pass

class Article(ArticleBase):
    id: int
    owner_id: int

    class Config:
        orm_mode = True

        
#
#   Grammar schemas
#
class GrammarBase(BaseModel):
    title: str

class GrammarCreate(GrammarBase):
    pass

class Grammar(GrammarBase):
    id: int
    articles: list[Article] = []

    class Config:
        orm_mode = True
