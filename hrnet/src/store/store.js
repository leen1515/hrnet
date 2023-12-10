// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'; 
import formSliceReducer from '../reduxcode/sliceform'; 

import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  form: formSliceReducer,
});

const persistConfig = {
  key: 'root',
  storage: storageSession, 
  whitelist: ['form']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
