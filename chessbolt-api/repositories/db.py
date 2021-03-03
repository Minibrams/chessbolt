import os

import dotenv
from sqlalchemy.engine import create_engine
from sqlalchemy.orm import sessionmaker

dotenv.load_dotenv('.env')

db = {
    'PASS': os.environ['DB_PASS'],
    'USER': os.environ['DB_USER'],
    'HOST': os.environ['DB_HOST'],
    'PORT': os.environ['DB_PORT'],
    'NAME': os.environ['DB_NAME']
}

engine = create_engine(
    f'mysql://{db["USER"]}:{db["PASS"]}@{db["HOST"]}/{db["NAME"]}?charset=utf8mb4')

Session = sessionmaker()
Session.configure(bind=engine, expire_on_commit=False)
session = Session()
