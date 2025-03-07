import { combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from '../services/API';
const rootReduce = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
});
export type RootReduceType = ReturnType<typeof rootReduce>;
export default rootReduce;
