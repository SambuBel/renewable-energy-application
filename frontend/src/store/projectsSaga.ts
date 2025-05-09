import { takeLatest, put, call } from 'redux-saga/effects';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { setProjects, setLoading, setError } from './projectSlice';

const API_URL = 'http://localhost:8000/api/v1';

function* fetchProjects(action: PayloadAction<string | null>): Generator {
    try {
        yield put(setLoading(true));
        const url = action.payload 
            ? `${API_URL}/projects?project_type=${action.payload}`
            : `${API_URL}/projects`;
        const response = yield call(axios.get, url);
        yield put(setProjects(response.data));
    } catch (error) {
        yield put(setError(error as string || 'Error al cargar los proyectos'));
    }
}

export function* projectsSaga() {
    yield takeLatest('projects/fetchProjects', fetchProjects);
} 