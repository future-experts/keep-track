import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import projectsReducer from './projectsSlice';
import projectReducer from './projectSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    projects: projectsReducer,
    project: projectReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
  devTools: true
});

export default store;