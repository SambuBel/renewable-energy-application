from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import projects

app = FastAPI(
    title="Renewable Energy Projects API",
    description="API para visualizar proyectos de energía renovable",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(projects.router, prefix="/api/v1")

@app.get("/")
async def root():
    return {"message": "Bienvenido a la API de Proyectos de Energía Renovable"} 