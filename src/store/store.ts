import { configureStore } from '@reduxjs/toolkit';
import rootReduce from './rootReduce';
import { apiSlice } from '../services/API';
const store = configureStore({
  reducer: rootReduce,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export { store };
