import React from 'react';
import { Box, Typography } from '@mui/material';
import { ProjectMap } from './ProjectMap';
import type { Project } from '../types/project';

interface ProjectContentProps {
  loading: boolean;
  error: string | null;
  view: 'map' | 'list';
  projects: Project[];
  selectedProject: Project | null;
}

export const ProjectContent: React.FC<ProjectContentProps> = ({
  loading,
  error,
  projects,
  selectedProject,
}) => (
  <Box
    sx={{
      width: '100%',
      maxWidth: 1600,
      mx: 'auto',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      p: { xs: 1, sm: 2, md: 4 },
    }}
  >
    {loading && <Typography sx={{ my: 4, fontSize: 20 }}>Cargando...</Typography>}
    {error && <Typography color="error" sx={{ my: 4, fontSize: 20 }}>{error}</Typography>}
    <Box
    sx={{
        position: 'absolute',
        top: '64px',
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: 'calc(100vh - 64px)',
        zIndex: 1,
        p: 0,
        m: 0,
        background: '#222',
    }}
    >
    <ProjectMap projects={projects} selectedProject={selectedProject ?? undefined} />
    </Box>
  </Box>
);