import React from 'react';
import { Provider } from 'react-redux'
import {PersistGate} from "redux-persist/integration/react";
import Router from "./router/router";
import {persistor, store} from "./store/store";
import styled from 'styled-components/native';

const App = () => {

    return (
        <Provider store={store}>
            <PersistGate loading={<StyledActivityIndicator />} persistor={persistor}>
                <Router />
            </PersistGate>
        </Provider>
    );
};

const StyledActivityIndicator = styled.ActivityIndicator.attrs({
    size: 'large',
    color: '#0000ff'
})`
    display: flex;
    flex: 1;
    justify-content: center;
`;

export default App;