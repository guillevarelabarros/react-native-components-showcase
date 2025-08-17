// index.js
/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
import { ComponentsApp } from './src/ComponentsApp';

AppRegistry.registerComponent(appName, () => ComponentsApp);
