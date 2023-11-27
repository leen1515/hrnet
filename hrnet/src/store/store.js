import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import formReducer from '../reduxcode/sliceform'; 

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['form'] 
};

const persistedReducer = persistReducer(persistConfig, formReducer);

export const store = configureStore({
  reducer: {
    form: persistedReducer
  }
});

export const persistor = persistStore(store);
