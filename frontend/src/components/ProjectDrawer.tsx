import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { ProjectList } from "./ProjectList";
import type { Project } from "../types/project";

interface ProjectDrawerProps {
    onClose: () => void;
    projects: Project[];
    setSelectedProject: (project: Project | null) => void;
}

export const ProjectDrawer: React.FC<ProjectDrawerProps> = ({ onClose, projects, setSelectedProject }) => {
    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
        onClose();
    };

    return (
        <Box
            sx={{
                position: 'fixed',
                top: '64px',
                right: 0,
                width: '35vw',
                minWidth: 320,
                maxWidth: 600,
                height: 'calc(100vh - 64px)',
                background: '#f5f6fa',
                color: '#222',
                zIndex: 1201,
                boxShadow: 6,
                p: 0,
                overflowY: 'auto',
                boxSizing: 'border-box',
                borderTopLeftRadius: 12,
                borderBottomLeftRadius: 12,
                transform: 'translateX(0)',
                transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
            }}
        >
            <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>Listado de Proyectos</Typography>
                <IconButton onClick={onClose} color="inherit">
                    <CloseIcon />
                </IconButton>
            </Box>
            <Box sx={{ px: 2, pb: 2 }}>
                <ProjectList projects={projects} column onProjectClick={handleProjectClick} />
            </Box>
        </Box>
    );
}; 