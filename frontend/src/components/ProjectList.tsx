import React from 'react';
import { Box, Typography } from '@mui/material';
import type { Project } from '../types/project';
import { Pill } from './Pill';
import RoomIcon from '@mui/icons-material/Room';

interface ProjectListProps {
    projects: Project[];
    column?: boolean;
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects, column }) => (
    <Box sx={{ display: 'flex', flexDirection: column ? 'column' : 'row', gap: 2 }}>
        {projects.map((project, idx) => (
            <Box
                key={project.id}
                sx={{
                    mb: 2,
                    p: 2,
                    background: '#fff',
                    borderRadius: 2,
                    border: '1px solid #e0e0e0',
                    boxShadow: 'none',
                    fontSize: 15,
                    ...(idx !== projects.length - 1 && { mb: 3 }),
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Typography
                        sx={{
                            fontWeight: 600,
                            fontSize: 17,
                            color: '#1976d2',
                            flex: 1,
                            lineHeight: 1.2,
                        }}
                    >
                        {project.name}
                    </Typography>
                    <Pill color={project.type}>{project.type}</Pill>
                </Box>
                {project.description && (
                    <Typography sx={{ color: '#444', fontSize: 14, mb: 1 }}>
                        {project.description}
                    </Typography>
                )}
                {project.capacity_mw && (
                    <Typography sx={{ color: '#666', fontSize: 13 }}>
                        <b>Capacidad:</b> {project.capacity_mw} MW
                    </Typography>
                )}
                {project.status && (
                    <Typography sx={{ color: '#888', fontSize: 13 }}>
                        <b>Estado:</b> {project.status}
                    </Typography>
                )}
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <RoomIcon sx={{ color: '#1976d2', fontSize: 18, mr: 0.5 }} />
                    <Typography sx={{ fontSize: 13, color: '#555' }}>
                        {project.latitude}, {project.longitude}
                    </Typography>
                </Box>
            </Box>
        ))}
    </Box>
);
