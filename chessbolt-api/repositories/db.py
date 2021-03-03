import os
from sqlalchemy.engine import create_engine
import dotenv
from sqlalchemy.orm import sessionmaker


dotenv.load_dotenv('.env')

db_config = {
    'PASS': os.environ['DB_PASS'],
    'USER': os.environ['DB_USER'],
    'HOST': os.environ['DB_HOST'],
    'PORT': os.environ['DB_PORT'],
    'DB': os.environ['DB_NAME']
}

engine = create_engine(
    f'mysql://{db_config["USER"]}:{db_config["PASS"]}@{db_config["HOST"]}/{db_config["DB"]}?charset=utf8mb4')

Session = sessionmaker()
Session.configure(bind=engine, expire_on_commit=False)
session = Session()
