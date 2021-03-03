
from models.dtos.player import PlayerDto
from models.dtos.game import GameDto
from typing import List
from repositories import player_repository, game_repository
from models.dtos.register_game_request import RegisterGameRequest
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import json
from utilities import get_uptime
import os

from services import game_service

# --- Welcome to your Emily API! --- #

# See the README for guides on how to test it.

# Your API endpoints under http://yourdomain/api/...
# are accessible from any origin by default.
# Make sure to restrict access below to origins you
# trust before deploying your API to production.

config_file = 'config.json'
config = json.load(open(config_file))
app = FastAPI()


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
    return [PlayerDto(**p) for p in player_repository.find_all()]


@app.get('/players/{id}', response_model=PlayerDto)
def get_player_by_id(id: int):
    '''
    Retrives a player's information by player ID
    '''
    return PlayerDto(**player_repository.find_by_id(id))


@app.get('/players/{id}/games', response_model=List[GameDto])
def get_games_by_player_id(id: int):
    '''
    Returns the list of games played by a specific player
    '''
    return [GameDto(**g.as_dict()) for g in game_repository.find_by_player_id(id)]


@app.get('/games', response_model=List[GameDto])
def get_games():
    '''
    Returns the list of all games played
    '''
    return [GameDto(**g.as_dict()) for g in game_repository.find_all()]


@app.put('/games', response_model=GameDto)
def register_game(game: RegisterGameRequest):
    '''
    Registers a new played game.
    Updates both players' ELO according to the result of the game.
    '''
    if game.result not in ['WHITE', 'BLACK', 'DRAW']:
        raise Exception(f'Invalid game result: {game.result}')

    game = game_service.register_game(game)
    return GameDto(**game.as_dict())


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # When deploying, remember to change this
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == '__main__':
    db_config = {
        'PASS': os.environ['DB_PASS'],
        'USER': os.environ['DB_USER'],
        'HOST': os.environ['DB_HOST'],
        'PORT': os.environ['DB_PORT'],
        'DB': os.environ['DB_NAME']
    }

    uvicorn.run(
        'api:app',
        host=config['connection']['host'],
        port=config['connection']['port']
    )
