import { createStore, applyMiddleware, compose } from "redux";
import { persistStore,persistReducer } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";
import storage from 'redux-persist/lib/storage'

const middlewares = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
  key: 'root',
  storage,
}

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));


export const persistor = persistStore(store);
