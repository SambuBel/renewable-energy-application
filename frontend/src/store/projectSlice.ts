import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Project } from '../types/project';

interface ProjectsState {
    projects: Project[];
    loading: boolean;
    error: string | null;
    selectedType: string | null;
}

const initialState: ProjectsState = {
    projects: [],
    loading: false,
    error: null,
    selectedType: null,
};

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        setProjects: (state, action: PayloadAction<Project[]>) => {
            state.projects = action.payload;
            state.loading = false;
            state.error = null;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
        setSelectedType: (state, action: PayloadAction<string | null>) => {
            state.selectedType = action.payload;
        },
    },
});

export const { setProjects, setLoading, setError, setSelectedType } = projectsSlice.actions;
export default projectsSlice.reducer; 