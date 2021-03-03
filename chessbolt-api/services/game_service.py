from models.entities.game import Game
from models.dtos.register_game_request import RegisterGameRequest
from elo import rate_1vs1
from datetime import datetime
from repositories import player_repository, game_repository


def register_game(game: RegisterGameRequest):
    black, white = (
        player_repository.find_by_id(game.black_player_id),
        player_repository.find_by_id(game.white_player_id)
    )

    winner, loser = (
        white, black) if game.result == 'WHITE' else (black, white)

    winner.elo, loser.elo = rate_1vs1(
        winner.elo, loser.elo, drawn=game.result == 'DRAW')

    game = Game(
        white_player_id=white.id, white_player_name=white.name, white_player_elo=white.elo,
        black_player_id=black.id, black_player_name=black.name, black_player_elo=black.elo,
        result=game.result,
        time=datetime.now()
    )

    game = game_repository.save(game)
    player_repository.update(winner)
    player_repository.update(loser)

    return game
