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
    return {"error": f"Project {project_id} not found"}

## The following routes are saved in memory, not in a database
@router.post("/projects", response_model=Project)
async def create_project(project: Project):
    SAMPLE_PROJECTS.append(project)
    return project

@router.put("/projects/{project_id}", response_model=Project)
async def update_project(project_id: int, project: Project):
    for i, p in enumerate(SAMPLE_PROJECTS):
        if p.id == project_id:
            SAMPLE_PROJECTS[i] = project
            return project
    return {"error": f"Project {project_id} not found"}

@router.delete("/projects/{project_id}", response_model=Project)
async def delete_project(project_id: int):
    for i, p in enumerate(SAMPLE_PROJECTS):
        if p.id == project_id:
            return SAMPLE_PROJECTS.pop(i)
    return {"error": f"Project {project_id} not found"}

