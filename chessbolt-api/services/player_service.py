from fastapi.exceptions import HTTPException
from models.dtos.register_player_request import RegisterPlayerRequest
from models.dtos.update_player_request import UpdatePlayerRequest
from models.entities.player import Player
from repositories import player_repository


def find_by_id(id: int) -> Player:
    player = player_repository.find_by_id(id)
    if not player:
        raise HTTPException(status_code=404)

    return player


def find_by_name(name: str) -> Player:
    player = player_repository.find_by_name(name)
    if not player:
        raise HTTPException(status_code=404)

    return player


def register_player(request: RegisterPlayerRequest) -> Player:
    if player_repository.find_by_name(request.name):
        raise HTTPException(status_code=400, detail='Name already taken')

    player = Player(name=request.name, elo=request.elo)
    player_repository.save(player)
    return player


def update_player(id: int, request: UpdatePlayerRequest) -> Player:
    player = player_repository.find_by_id(id)
    if not player:
        raise HTTPException(status_code=404)

    if request.name is not None:
        if player_repository.find_by_name(request.name):
            raise HTTPException(status_code=400, detail='Name already taken')
        player.name = request.name

    if request.elo is not None:
        player.elo = request.elo

    player_repository.update(player)
    return player
