from sqlalchemy.orm import Session
import models, schemas

def get_grammar(db: Session, grammar_id: int):
    return db.query(models.Grammar).filter(models.Grammar.id == grammar_id).first()

def get_grammar_by_title(db: Session, title: str):
    return db.query(models.Grammar).filter(models.Grammar.title == title).first()

def create_grammar(db: Session, grammar: schemas.GrammarCreate):
    db_grammar = models.Grammar(title = grammar.title)
    db.add(db_grammar)
    db.commit()
    db.refresh(db_grammar)
    return db_grammar

def get_article(db: Session, article_id: int):
    return db.query(models.Article).filter(models.Article.id == article_id).first()