import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import AppContainer from './app/app_container';
import Splash from './splash/splash'

const Root = ({store}) => {
    // debugger
    const state = store.getState()
    return(
    <Provider store={ store }>
        <HashRouter>
            <AppContainer />
        </HashRouter>
    </Provider>
)};

export default Root;