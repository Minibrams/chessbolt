from pydantic import BaseModel
from datetime import datetime


class GameDto(BaseModel):
    id: int
    white_player_id: int
    white_player_elo: int
    white_player_name: str

    black_player_id: int
    black_player_elo: int
    black_player_name: str

    result: str
    time: datetime
