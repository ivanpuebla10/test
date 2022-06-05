import { configureStore } from '@reduxjs/toolkit';
import thought from '../features/thought/thoughtSlice'

export const store = configureStore({
  reducer: {
    thought
  },
});
