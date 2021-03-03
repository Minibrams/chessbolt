from pydantic import BaseModel


class RegisterGameRequest(BaseModel):
    white_player_name: str
    black_player_name: str
    result: str

    class Config:
        schema_extra = {
            "example": {
                "white_player_name": "kent",
                "black_player_name": "niels",
                "result": "WHITE | BLACK | DRAW"
            }
        }
