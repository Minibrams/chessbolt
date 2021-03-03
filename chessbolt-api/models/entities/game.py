from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql.sqltypes import Date, Float

Base = declarative_base()


class Game(Base):
    __tablename__ = 'elo_games'

    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    id = Column(Integer, primary_key=True)
    white_player_id = Column(Integer)
    white_player_elo = Column(Float)
    white_player_name = Column(String)

    black_player_id = Column(Integer)
    black_player_elo = Column(Float)
    black_player_name = Column(String)

    result = Column(String)
    time = Column(Date)
