from pydantic import BaseModel
from typing import Optional

class Project(BaseModel):
    id: int
    name: str
    type: str  # solar, wind, hydroelectric
    latitude: float
    longitude: float
    description: Optional[str] = None
