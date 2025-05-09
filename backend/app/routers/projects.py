from fastapi import APIRouter, Query
from typing import List, Optional
from ..models.project import Project
from ..data.sample_projects import SAMPLE_PROJECTS

router = APIRouter()

@router.get("/projects", response_model=List[Project])
async def get_projects(project_type: Optional[str] = Query(None, description="Filter projects by type (solar, wind, hydroelectric)")):
    if project_type:
        return [project for project in SAMPLE_PROJECTS if project.type == project_type]
    return SAMPLE_PROJECTS

@router.get("/projects/{project_id}", response_model=Project)
async def get_project(project_id: int):
    for project in SAMPLE_PROJECTS:
        if project.id == project_id:
            return project
    return {"error": "Project not found"} 