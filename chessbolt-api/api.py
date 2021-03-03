
import json
from typing import List

import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from models.dtos.game import GameDto
from models.dtos.player import PlayerDto
from models.dtos.register_game_request import RegisterGameRequest
from models.dtos.register_player_request import RegisterPlayerRequest
from models.dtos.update_player_request import UpdatePlayerRequest
from repositories import game_repository, player_repository
from services import game_service, player_service
from utilities import get_uptime

# --- Welcome to your Emily API! --- #

# See the README for guides on how to test it.

# Your API endpoints under http://yourdomain/api/...
# are accessible from any origin by default.
# Make sure to restrict access below to origins you
# trust before deploying your API to production.

config_file = 'config.json'
config = json.load(open(config_file))
app = FastAPI()


def to_dto(entity, dto):
    return dto(**entity.as_dict())


@app.get('/api/health')
def healthcheck():
    return {
        'uptime': get_uptime(),
        'status': 'UP',
        'host': config['connection']['host'],
        'port': config['connection']['port'],
    }


@app.get('/api')
def hello():
    return f'The {config["project_name"]} API is running (uptime: {get_uptime()})'


@app.get('/players', response_model=List[PlayerDto])
def get_players():
    '''
    Returns the list of all registered players
    '''
    return [to_dto(p, PlayerDto) for p in player_repository.find_all()]


@app.put('/players', response_model=PlayerDto)
def register_player(request: RegisterPlayerRequest):
    '''
    Registers a new player
    '''
    return to_dto(player_service.register_player(request), PlayerDto)


@app.get('/players/{id}', response_model=PlayerDto)
def get_player_by_id(id: int):
    '''
    Retrives a player's information by player ID
    '''
    return to_dto(player_service.find_by_id(id), PlayerDto)


@app.patch('/players/{id}', response_model=PlayerDto)
def update_player(id: int, request: UpdatePlayerRequest):
    '''
    Updates a player's information
    '''
    return to_dto(player_service.update_player(id, request), PlayerDto)


@app.get('/players/{id}/games', response_model=List[GameDto])
def get_games_by_player_id(id: int):
    '''
    Returns the list of games played by a specific player
    '''
    return [to_dto(g, GameDto) for g in game_repository.find_by_player_id(id)]


@app.get('/games', response_model=List[GameDto])
def get_games():
    '''
    Returns the list of all games played
    '''
    return [to_dto(g, GameDto) for g in game_repository.find_all()]


@app.put('/games', response_model=GameDto)
def register_game(game: RegisterGameRequest):
    '''
    Registers a new played game.
    Updates both players' ELO according to the result of the game.
    '''
    valid_results = ['WHITE', 'BLACK', 'DRAW']
    if game.result not in valid_results:
        raise HTTPException(
            status_code=422, detail=f'Game result must be one of {valid_results}')

    game = game_service.register_game(game)
    return to_dto(game, GameDto)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # When deploying, remember to change this
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == '__main__':
    uvicorn.run(
        'api:app',
        host=config['connection']['host'],
        port=config['connection']['port']
    )
