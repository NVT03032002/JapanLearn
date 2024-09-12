from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import text

SQLALCHEMY_DATABASE_URL = 'postgresql://postgres:123456@localhost:5432/fastapidatabase'

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def test_db_connection():
    try:
        db = SessionLocal()
        db.execute(text('SELECT 1'))
        print("Kết nối cơ sở dữ liệu thành công.")
    except Exception as e:
        print(f"Kết nối cơ sở dữ liệu thất bại: {e}")
    finally:
        db.close()

Base = declarative_base()