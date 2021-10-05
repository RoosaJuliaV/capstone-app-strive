import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import playlistReducer from "../reducers/playlist";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const initialState = {
 
  playList: {
    tracks: [],
    loading: true, 
    error: false
  },
};

const bigReducer = combineReducers({
    playList: playlistReducer
})

export const configureStore = createStore(
    bigReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))

)
