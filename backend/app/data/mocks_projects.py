from app.models.project import Project

SAMPLE_PROJECTS = [
    Project(
        id=1,
        name="Parque Solar Añatuya I",
        type="solar",
        latitude=-34.482627,
        longitude=-58.583287,
        # EXTRA
        description="Cuenta con una potencia instalada de 6MW."
    ),
    Project(
        id=2,
        name="Parque Eólico “La Banderita” General Acha",
        type="wind",
        latitude=-37.491203,
        longitude=-64.744611,
        # EXTRA
        description="El Parque Eólico General Acha fue adjudicado a Latinoamericana de la Energía durante la Segunda Ronda del Programa RenovAr y cuenta con una potencia instalada de 60 MW."
    ),
    Project(
        id=3,
        name="Central Hidroeléctrica Yacyretá",
        type="hydroelectric",
        latitude=-27.483148,
        longitude=-56.737789,
        # EXTRA
        description="La Central Hidroeléctrica Yacyretá es una central hidroeléctrica ubicada en la provincia de Corrientes, Argentina. Tiene una potencia instalada de 120 MW."
    )
] 