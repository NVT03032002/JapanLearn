from typing import Union,Annotated
from pydantic import BaseModel
from fastapi import FastAPI,Depends, Query, HTTPException
import models, schemas, database, crud
from crud import get_article,get_grammar
from sqlalchemy.orm import Session

database.test_db_connection()
database.get_db()

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/grammar/{grammar_id}", response_model=schemas.Grammar)
def read_grammar(grammar_id: int, db: Session = Depends(database.get_db)):
    grammar = get_grammar(db, title)
    if grammar is None:
        raise HTTPException(status_code=404, detail="Grammar not found")
    return grammar   

@app.post("/grammar/", response_model=schemas.Grammar)
def create_grammar(grammar: schemas.GrammarCreate, db: Session = Depends(database.get_db)):
    existing_grammar  = crud.get_grammar_by_title(db, grammar.title)

    if existing_grammar :
        raise HTTPException(status_code=400, detail="This Grammar already exists")
    return crud.create_grammar(db=db, grammar=grammar)

@app.get("/articles/{article_id}", response_model=schemas.Article)
def read_article(article_id: int, db: Session = Depends(database.get_db)):
    db_article = get_article(db, article_id)
    if db_article is None:
        raise HTTPException(status_code=404, detail="Article not found")
    return db_article

@app.get("/grammars/{title}")
def read_grammar(title: str, db: Session = Depends(database.get_db)):
    return get_grammar_by_title(db, title)