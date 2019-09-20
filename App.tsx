import React from 'react';
import { Provider } from 'react-redux'
import Router from "./router/router";
import store from "./store/store";

const App = () => {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
};


export default App;