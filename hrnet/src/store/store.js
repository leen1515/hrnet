import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../reduxcode/sliceform';

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

