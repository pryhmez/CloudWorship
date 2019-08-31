/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App.js';
import React from 'react'


import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware }from 'redux';
import thunk from 'redux-thunk'
import reducers from './App/reducers';

const store = createStore(reducers, applyMiddleware(thunk))

const AppContainer = () => {
    return(
    <Provider store={store}>
        <App/>
    </Provider>
    );
}

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => AppContainer);
