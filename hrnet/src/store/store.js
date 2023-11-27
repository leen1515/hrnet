// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Utilise le localStorage
import formSliceReducer from '../reduxcode/sliceform'; // Vérifiez le chemin d'accès


import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  form: formSliceReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['form']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
