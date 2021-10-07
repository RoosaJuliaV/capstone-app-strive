import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import playlistReducer from "../reducers/playlist";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { encryptTransform } from "redux-persist-transform-encrypt";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const initialState = {
 
  playList: {
    tracks: [],
    loading: true, 
    error: false
  },
};

const persistConfig = {
    key: "root",
    storage,
  };

const bigReducer = combineReducers({
    playList: playlistReducer
})

const persistedReducer = persistReducer(persistConfig, bigReducer);

const configureStore = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))

)

const persistor = persistStore(configureStore);

export { configureStore, persistor };
