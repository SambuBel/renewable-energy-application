import type { Project } from './project';

type ProjectsState = {
    projects: Project[];
    loading: boolean;
    error: string | null;
    selectedType: string | null;
}

type RootState = {
    projects: ProjectsState;
}

type AppDispatch = ReturnType<typeof import('../store/index').store.dispatch>;

export type { ProjectsState, RootState, AppDispatch }; 