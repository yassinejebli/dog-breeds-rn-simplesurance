import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dogReducer from "../reducers/dogReducer";

const store = createStore(
    dogReducer,
    applyMiddleware(thunk)
);

export default store;