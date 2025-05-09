from pydantic import BaseModel
from typing import Literal

class Project(BaseModel):
    id: int
    name: str
    type: Literal["solar", "wind", "hydroelectric"]
    latitude: float
    longitude: float
    description: str
