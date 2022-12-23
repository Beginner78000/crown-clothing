/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from '../middlewares/logger';
// import auth from 'src/middleware/auth';
import reducer from '../reducers';

// Si la fonction existe on viendra connecter le redux devtool
// avec la prise en charge des autres enhancers (ex: middleware, fonctions)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Redux-persist est un outil qui permet de conserver 
// les valeurs de notre reducer dans le local storage
const persistConfig = {
  // Where do it start
  key: 'root',
  // Where do we store 
  storage,
  // Data we don't want to persist in the localStorage
  // User is already persisting with the AuthListener
  // So we want to avoid conflict 
  blacklist: ['user']
};

const persistedReducer = persistReducer(persistConfig, reducer);


export const store = createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(logger),
  ),
);

// console.log(store);
export const persistor = persistStore(store);
