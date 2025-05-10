import React from 'react';
import { Box, Typography } from '@mui/material';
import type { Project } from '../types/project';
import { Pill } from './Pill';
import RoomIcon from '@mui/icons-material/Room';

interface ProjectListProps {
    projects: Project[];
    column?: boolean;
    onProjectClick?: (project: Project) => void;
}

const ProjectCard: React.FC<{
    project: Project;
    onClick?: (project: Project) => void;
    isLast: boolean;
}> = ({ project, onClick, isLast }) => (
    <Box
        onClick={() => onClick && onClick(project)}
        sx={{
            cursor: onClick ? 'pointer' : 'default',
            p: 2,
            background: '#fff',
            borderRadius: 2,
            border: '1px solid #e0e0e0',
            boxShadow: 'none',
            fontSize: 15,
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
                border: '1px solid #1976d2',
                boxShadow: '0 4px 12px rgba(25, 118, 210, 0.15)',
                transform: 'translateY(-2px)',
                background: '#f8f9ff',
            },
            mb: isLast ? 0 : 3,
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
);

export const ProjectList: React.FC<ProjectListProps> = ({
    projects,
    column = false,
    onProjectClick,
}) => (
    <Box sx={{ display: 'flex', flexDirection: column ? 'column' : 'row', gap: 2 }}>
        {projects.map((project, idx) => (
            <ProjectCard
                key={project.id}
                project={project}
                onClick={onProjectClick}
                isLast={idx === projects.length - 1}
            />
        ))}
    </Box>
);
