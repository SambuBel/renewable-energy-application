export type ProjectType = 'solar' | 'wind' | 'hydroelectric';

export type Project = {
    id: number;
    name: string;
    type: ProjectType;
    latitude: number;
    longitude: number;
    description?: string;
    capacity_mw?: number;
    status?: string;
} 