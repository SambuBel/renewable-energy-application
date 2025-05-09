import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import projectsReducer from './projectSlice';
import { projectsSaga } from './projectsSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        projects: projectsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(projectsSaga); 