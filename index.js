import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import {name as appName} from './app.json';

import App from './App';
import configureStore from './src/store/configureStore';

const Store = configureStore();

const RNRedux = () => (
    <Provider store={Store}>
        <App/>
    </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
