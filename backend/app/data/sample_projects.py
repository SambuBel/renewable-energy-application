from ..models.project import Project
import uuid


# Extra : Description is not a required field

SAMPLE_PROJECTS = [
    Project(
        id= uuid.uuid4(),
        name="Parque Solar Añatuya I",
        type="solar",
        latitude=-34.482627,
        longitude=-58.583287,
        description="Cuenta con una potencia instalada de 6MW."
    ),
    Project(
        id=uuid.uuid4(),
        name="Parque Eólico “La Banderita” General Acha",
        type="wind",
        latitude=-37.491203,
        longitude=-64.744611,
        description="El Parque Eólico General Acha fue adjudicado a Latinoamericana de la Energía durante la Segunda Ronda del Programa RenovAr y cuenta con una potencia instalada de 60 MW."
    ),
    Project(
        id=uuid.uuid4(),
        name="Central Hidroeléctrica Yacyretá",
        type="hydroelectric",
        latitude=-27.483148,
        longitude=-56.737789,
        description="La Central Hidroeléctrica Yacyretá es una central hidroeléctrica ubicada en la provincia de Corrientes, Argentina. Tiene una potencia instalada de 120 MW."
    ),

    # Proyectos Solares
    Project(
        id=uuid.uuid4(),
        name="Parque Solar Ullum I",
        type="solar",
        latitude=-31.4995,
        longitude=-68.8016,
        description="Ubicado en San Juan, tiene una capacidad instalada de 25 MW. Forma parte del Programa RenovAr."
    ),
    Project(
        id=uuid.uuid4(),
        name="Parque Solar Nonogasta",
        type="solar",
        latitude=-29.4244,
        longitude=-67.5486,
        description="Situado en La Rioja, el parque tiene una capacidad de 35 MW y fue adjudicado en la Ronda 1 del Programa RenovAr."
    ),
    Project(
        id=uuid.uuid4(),
        name="Parque Solar Cafayate",
        type="solar",
        latitude=-26.061,
        longitude=-65.985,
        description="Localizado en Salta, cuenta con una potencia instalada de 80 MW y fue desarrollado por Canadian Solar."
    ),

    # Proyectos Eólicos
    Project(
        id=uuid.uuid4(),
        name="Parque Eólico Rawson",
        type="wind",
        latitude=-43.2821,
        longitude=-65.1526,
        description="El mayor parque eólico de Argentina al momento de su inauguración, con 77 aerogeneradores y 108 MW instalados."
    ),
    Project(
        id=uuid.uuid4(),
        name="Parque Eólico Manantiales Behr",
        type="wind",
        latitude=-45.7167,
        longitude=-67.4833,
        description="Ubicado en Chubut, este parque de YPF Luz tiene una capacidad instalada de 99 MW."
    ),
    Project(
        id=uuid.uuid4(),
        name="Parque Eólico Vientos del Secano",
        type="wind",
        latitude=-38.7394,
        longitude=-61.2961,
        description="Situado en Bahía Blanca, Buenos Aires, cuenta con una capacidad instalada de 100 MW."
    ),

    # Proyectos Hidroeléctricos
    Project(
        id=uuid.uuid4(),
        name="Central Hidroeléctrica El Chocón",
        type="hydroelectric",
        latitude=-39.25,
        longitude=-68.75,
        description="Ubicada en el río Limay, Neuquén, tiene una capacidad instalada de 1.200 MW y es una de las principales del país."
    ),
    Project(
        id=uuid.uuid4(),
        name="Central Hidroeléctrica Alicurá",
        type="hydroelectric",
        latitude=-40.7833,
        longitude=-70.5667,
        description="Situada también sobre el río Limay, tiene una capacidad de 1.000 MW y fue una de las primeras privatizadas."
    ),
    Project(
        id=uuid.uuid4(),
        name="Central Hidroeléctrica Los Reyunos",
        type="hydroelectric",
        latitude=-34.9093,
        longitude=-68.6841,
        description="Ubicada en San Rafael, Mendoza, tiene una capacidad de 222 MW y también funciona como centro turístico."
    ),
]
