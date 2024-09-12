from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from database import Base

class Grammar(Base):
    __tablename__ = "grammar"

    id = Column(Integer, primary_key=True)
    title = Column(Text)

    articles = relationship("Article", back_populates="owner")

class Article(Base):
    __tablename__ = "article"

    id = Column(Integer, primary_key=True)
    title = Column(Text)
    description = Column(Text)
    owner_id = Column(Integer, ForeignKey("grammar.id"))

    owner = relationship("Grammar", back_populates="articles")