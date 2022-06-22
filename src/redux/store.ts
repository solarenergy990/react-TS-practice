// import { combineReducers } from 'redux';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/userReducer';

import appReducer from './app/reducer';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const rootReducer = combineReducers({
//   appState: appReducer,
//   auth: persistReducer(persistConfig, userReducer),
// });

const middleware = [
  thunk,
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, userReducer),
    appState: appReducer,
  },
  middleware,
});

const persistor = persistStore(store);

const storeItems = {
  store,
  persistor,
};

export default storeItems;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch