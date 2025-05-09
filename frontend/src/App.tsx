import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography, Tabs, Tab, Box, ToggleButton, ToggleButtonGroup, Fade } from '@mui/material';
import { Map as MapIcon, List as ListIcon } from '@mui/icons-material';
import { ProjectMap } from './components/ProjectMap';
import { ProjectList } from './components/ProjectList';
import type { Project } from './types/project';
import { setSelectedType } from './store/projectSlice';

type ProjectsState = {
    projects: Project[];
    loading: boolean;
    error: string | null;
    selectedType: string | null;
}

type RootState = {
    projects: ProjectsState;
}

function App() {
    const dispatch = useDispatch();
    const { projects, loading, error, selectedType } = useSelector(
        (state: RootState) => state.projects
    );
    const [view, setView] = useState<'map' | 'list'>('map');

    useEffect(() => {
        dispatch({ type: 'projects/fetchProjects', payload: selectedType });
    }, [dispatch, selectedType]);

    const handleTypeChange = (_: React.SyntheticEvent, newValue: string | null) => {
        dispatch(setSelectedType(newValue));
    };

    const handleViewChange = (_: React.MouseEvent<HTMLElement>, nextView: 'map' | 'list' | null) => {
        if (nextView) setView(nextView);
    };

    return (
        <Box sx={{ minHeight: '100vh', minWidth: '100vw', background: '#fff', display: 'flex', flexDirection: 'column' }}>
            <AppBar position="static" sx={{ background: '#1976d2' }}>
                <Toolbar>
                    <Typography variant="h6">
                        Proyectos de Energía Renovable
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box sx={{ width: '100%', maxWidth: 1600, mx: 'auto', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', p: { xs: 1, sm: 2, md: 4 } }}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, mt: 2, flexWrap: 'wrap' }}>
                    <Tabs
                        value={selectedType}
                        onChange={handleTypeChange}
                        aria-label="project type tabs"
                        textColor="primary"
                        indicatorColor="primary"
                        variant="fullWidth"
                        sx={{ flex: 1, minWidth: 300, '.MuiTabs-flexContainer': { justifyContent: 'center' },
                            '.MuiTab-root': { fontWeight: 500, fontSize: 15, minHeight: 36, px: 2, py: 1, transition: 'color 0.3s', borderRadius: 1 },
                            '.Mui-selected': { color: '#1976d2 !important', background: '#e3f2fd', borderRadius: 2 },
                            '.MuiTab-root:focus': { outline: 'none', boxShadow: 'none' },
                            '.MuiTab-root.Mui-focusVisible': { outline: 'none', boxShadow: 'none' } }}
                    >
                        <Tab label="Todos" value={null} disableRipple />
                        <Tab label="Solar" value="solar" disableRipple />
                        <Tab label="Eólica" value="wind" disableRipple />
                        <Tab label="Hidroeléctrica" value="hydroelectric" disableRipple />
                    </Tabs>
                    <ToggleButtonGroup
                        value={view}
                        exclusive
                        onChange={handleViewChange}
                        aria-label="Vista"
                        size="medium"
                        sx={{ ml: 2, background: '#f5f5f5', borderRadius: 2, boxShadow: 1 }}
                    >
                        <ToggleButton value="map" aria-label="Mapa" sx={{ px: 2 }}>
                            <MapIcon />
                        </ToggleButton>
                        <ToggleButton value="list" aria-label="Lista" sx={{ px: 2 }}>
                            <ListIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>

                {loading && <Typography sx={{ my: 4, fontSize: 20 }}>Cargando...</Typography>}
                {error && <Typography color="error" sx={{ my: 4, fontSize: 20 }}>{error}</Typography>}

                <Fade in={view === 'map'} timeout={400} unmountOnExit>
                    <Box sx={{ width: '100%', maxWidth: 1400, mb: 4, minHeight: 600, display: view === 'map' ? 'block' : 'none', transition: 'all 0.4s' }}>
                        <ProjectMap projects={projects} />
                    </Box>
                </Fade>
                <Fade in={view === 'list'} timeout={400} unmountOnExit>
                    <Box sx={{ width: '100%', maxWidth: 1400, mb: 4, minHeight: 600, display: view === 'list' ? 'block' : 'none', transition: 'all 0.4s' }}>
                        <ProjectList projects={projects} />
                    </Box>
                </Fade>
            </Box>
        </Box>
    );
}

export default App;
