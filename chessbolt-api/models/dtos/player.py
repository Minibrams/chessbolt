from pydantic import BaseModel


class PlayerDto(BaseModel):
    id: int
    name: str
    elo: int
