from models.entities.game import Game
from typing import List
from repositories.db import session


def find_all() -> List[Game]:
    return session.query(Game)


def find_by_id(id: int) -> Game:
    return session.query(Game).filter(Game.id == id).first()


def find_by_player_id(id: int) -> List[Game]:
    return session.query(Game).filter(Game.white_player_id == id | Game.black_player_id == id)


def save(game: Game) -> Game:
    session.add(game)
    session.commit()
    return game
