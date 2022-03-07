import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import favoriteReducer from "../reducer/favoriteReducer";
import jobsReducer from "../reducer/jobSearchreducer";
import thunk from "redux-thunk";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
const aComposeFunctionThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  favorite: {
    jobset: [],
  },
  job: {
    jobset: [],
  },
};
const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_PERSIST_KEY,
    }),
  ],
};

const bigReducer = combineReducers({
  favorite: favoriteReducer,
  job: jobsReducer,
});
const persistedReducer = persistReducer(persistConfig, bigReducer);
const configureStore = createStore(
  persistedReducer,
  initialState,
  aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk))
);
const persistor = persistStore(configureStore);

export { configureStore, persistor };
