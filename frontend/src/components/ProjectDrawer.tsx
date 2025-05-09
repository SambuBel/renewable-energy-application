import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { ProjectList } from "./ProjectList";
import type { Project } from "../types/project";

interface ProjectDrawerProps {
    open: boolean;
    onClose: () => void;
    projects: Project[];
}

export const ProjectDrawer: React.FC<ProjectDrawerProps> = ({ open, onClose, projects }) => (
  <>
    {open && (
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
        }}
      >
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>Listado de Proyectos</Typography>
          <IconButton onClick={onClose} color="inherit">
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ px: 2, pb: 2 }}>
          <ProjectList projects={projects} column />
        </Box>
      </Box>
    )}
  </>
); 