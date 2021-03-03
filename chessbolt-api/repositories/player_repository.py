from models.entities.player import Player
from typing import List
from repositories.db import session


def find_all() -> List[Player]:
    return session.query(Player)


def find_by_id(id) -> Player:
    return session.query(Player).filter(Player.id == id).first()


def save(player: Player) -> Player:
    session.add(player)
    session.commit()
    return player


def update(player: Player) -> Player:
    session.commit()
    return player
