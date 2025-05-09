from pydantic import BaseModel
import uuid
from enum import Enum

class ProjectType(str, Enum):
    SOLAR = "solar"
    WIND = "wind"
    HYDROELECTRIC = "hydroelectric"

class Project(BaseModel):
    id: uuid.UUID
    name: str
    type: ProjectType
    latitude: float
    longitude: float
    description: str
