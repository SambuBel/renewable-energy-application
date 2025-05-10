import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedType } from './store/projectSlice';
import { EnergyAppBar } from './components/EnergyAppBar';
import { ProjectContent } from './components/ProjectContent';
import type { RootState } from './store';
import { ProjectDrawer } from './components/ProjectDrawer';
import { Box } from '@mui/material';
import type { Project } from './types/project';

function App() {
    const dispatch = useDispatch();
    const { projects, loading, error, selectedType } = useSelector(
        (state: RootState) => state.projects
    );
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        dispatch({ type: 'projects/fetchProjects', payload: selectedType });
    }, [dispatch, selectedType]);

    const handleTypeChange = (_: React.SyntheticEvent, newValue: string | null) => {
        dispatch(setSelectedType(newValue));
    };

    const handleViewChange = (_: React.MouseEvent<HTMLElement>, nextView: 'map' | 'list' | null) => {
        if (nextView === 'list') setDrawerOpen(true);
        else setDrawerOpen(false);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: '100%',
            position: 'relative'
        }}>
            <EnergyAppBar
                selectedType={selectedType}
                onTypeChange={handleTypeChange}
                view={drawerOpen ? 'list' : 'map'}
                onViewChange={handleViewChange}
            />
            <ProjectContent
                loading={loading}
                error={error}
                view={drawerOpen ? 'list' : 'map'}
                projects={projects}
                selectedProject={selectedProject}
            />
            {drawerOpen && (
                <Box
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                        position: 'fixed',
                        top: '64px',
                        left: 0,
                        width: '100vw',
                        height: 'calc(100vh - 64px)',
                        background: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(6px)',
                        zIndex: 1200,
                        transition: 'all 0.3s',
                    }}
                />
            )}
            {drawerOpen && (
                <ProjectDrawer onClose={() => setDrawerOpen(false)} projects={projects} setSelectedProject={setSelectedProject} />
            )}
        </div>
    );
}

export default App;
