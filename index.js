/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import App from './App/components/Landing';

AppRegistry.registerComponent(appName, () => App);
