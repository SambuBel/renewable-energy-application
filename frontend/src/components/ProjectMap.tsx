import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import  'leaflet/dist/leaflet.css';
import type { Project } from '../types/project';
import { markerIcons } from '../utils/markets';

interface ProjectMapProps {
    projects: Project[];
}

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
    const center: [number, number] = [-34.6037, -58.3816]; // Buenos Aires, Argentina
    return (
        <MapContainer center={center} zoom={6}  style={{ height: '100%', width: '100%' }}>
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
                        <div
                            style={{
                                minWidth: 220,
                                maxWidth: 300,
                                padding: '12px 16px',
                                borderRadius: 12,
                                boxShadow: '0 4px 16px rgba(25,118,210,0.10)',
                                background: '#fff',
                                fontFamily: 'Montserrat, Roboto, Arial, sans-serif',
                            }}
                        >
                            <h3 style={{
                                margin: 0,
                                marginBottom: 8,
                                fontSize: 18,
                                color: '#1976d2',
                                fontWeight: 700,
                                letterSpacing: 0.5,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                            }}>
                                {project.type === 'solar' && <span style={{ color: '#fbc02d', fontSize: 20 }}>☀️</span>}
                                {project.type === 'wind' && <span style={{ color: '#4fc3f7', fontSize: 20 }}>💨</span>}
                                {project.type === 'hydroelectric' && <span style={{ color: '#1976d2', fontSize: 20 }}>💧</span>}
                                {project.name}
                            </h3>
                            <div style={{ fontSize: 15, color: '#333', marginBottom: 4 }}>
                                <b>Tipo:</b> <span style={{ textTransform: 'capitalize' }}>{project.type}</span>
                            </div>
                            {project.capacity_mw && (
                                <div style={{ fontSize: 15, color: '#333', marginBottom: 4 }}>
                                    <b>Capacidad:</b> {project.capacity_mw} MW
                                </div>
                            )}
                            {project.status && (
                                <div style={{ fontSize: 15, color: '#333', marginBottom: 4 }}>
                                    <b>Estado:</b> {project.status}
                                </div>
                            )}
                            {project.description && (
                                <div style={{ fontSize: 14, color: '#555', marginTop: 8 }}>
                                    {project.description}
                                </div>
                            )}
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}; 