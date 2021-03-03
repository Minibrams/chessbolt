from pydantic import BaseModel


class UpdatePlayerRequest(BaseModel):
    name: str
    elo: float

    class Config:
        schema_extra = {
            "example": {
                "name": "kent",
                "elo": "1201",
            }
        }
