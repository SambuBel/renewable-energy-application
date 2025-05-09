import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import type { Project } from '../types/project';

interface ProjectListProps {
    projects: Project[];
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
    return (
        <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
            {projects.map((project) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={project.id} sx={{ display: 'flex' }}>
                    <Card sx={{ flex: 1, minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: 3, boxShadow: 3, p: 1 }}>
                        <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', gap: 1 }}>
                            <Typography variant="h6" component="div" sx={{ fontWeight: 700, mb: 1, color: '#1976d2' }}>
                                {project.name}
                            </Typography>
                            <Typography color="text.secondary" sx={{ fontSize: 15, mb: 1 }}>
                                Tipo: <b>{project.type}</b>
                            </Typography>
                            {project.description && (
                                <Typography variant="body2" sx={{ mb: 1, color: '#555' }}>
                                    {project.description}
                                </Typography>
                            )}
                            {project.capacity_mw && (
                                <Typography variant="body2" sx={{ color: '#555' }}>
                                    Capacidad: <b>{project.capacity_mw} MW</b>
                                </Typography>
                            )}
                            {project.status && (
                                <Typography variant="body2" sx={{ color: '#555' }}>
                                    Estado: <b>{project.status}</b>
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}; 