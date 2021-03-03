from pydantic import BaseModel


class RegisterGameRequest(BaseModel):
    white_player_id: int
    black_player_id: int
    result: str

    class Config:
        schema_extra = {
            "example": {
                "white_player_id": 1,
                "black_player_id": 2,
                "result": "WHITE | BLACK | DRAW"
            }
        }
