from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String
from sqlalchemy.sql.sqltypes import Float

Base = declarative_base()


class Player(Base):
    __tablename__ = 'elo_players'

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    id = Column(Integer, primary_key=True)
    name = Column(String)
    elo = Column(Float)
