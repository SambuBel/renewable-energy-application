import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { Project } from '../types/project';

interface ProjectMapProps {
    projects: Project[];
}

const markerIcons: Record<string, Icon> = {
    solar: new Icon({
        iconUrl: '/marker-icon-orange.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        shadowSize: [41, 41]
    }),
    wind: new Icon({
        iconUrl: '/marker-icon-green.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        shadowSize: [41, 41]
    }),
    hydroelectric: new Icon({
        iconUrl: '/marker-icon-blue.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        shadowSize: [41, 41]
    }),
};

// Hook para forzar el resize del mapa
function ResizeMap({ projects }: { projects: Project[] }) {
    const map = useMap();
    useEffect(() => {
        setTimeout(() => {
            map.invalidateSize();
        }, 200);
    }, [projects, map]);
    return null;
}

export const ProjectMap: React.FC<ProjectMapProps> = ({ projects }) => {
    const center: [number, number] = [-33.45, -70.6667]; // Santiago, Chile
    return (
        <MapContainer center={center} zoom={6} style={{ height: '400px', width: '100%' }}>
            <ResizeMap projects={projects} />
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {projects.map((project) => (
                <Marker
                    key={project.id}
                    position={[project.latitude, project.longitude]}
                    icon={markerIcons[project.type] || markerIcons['solar']}
                >
                    <Popup>
                        <div>
                            <h3>{project.name}</h3>
                            <p>Tipo: {project.type}</p>
                            {project.description && <p>{project.description}</p>}
                            {project.capacity_mw && <p>Capacidad: {project.capacity_mw} MW</p>}
                            {project.status && <p>Estado: {project.status}</p>}
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}; 