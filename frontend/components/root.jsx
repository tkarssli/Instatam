import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import AppContainer from './app/app_container';
import Splash from './splash/splash'
import App from './app/app'

const Root = ({store}) => {
    const state = store.getState()
    return(
    <Provider store={ store }>
        <AppContainer/>
    </Provider>
)};

export default Root;