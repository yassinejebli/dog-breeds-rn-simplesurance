import React from 'react';
import { Provider } from 'react-redux'
import {PersistGate} from "redux-persist/integration/react";
import Router from "./router/router";
import {persistor, store} from "./store/store";

const App = () => {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router />
            </PersistGate>
        </Provider>
    );
};


export default App;