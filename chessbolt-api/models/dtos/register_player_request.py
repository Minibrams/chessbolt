from pydantic import BaseModel


class RegisterPlayerRequest(BaseModel):
    name: str
    elo: float

    class Config:
        schema_extra = {
            "example": {
                "name": "kent",
                "elo": "1200",
            }
        }
