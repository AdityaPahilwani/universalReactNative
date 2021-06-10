import {AppRegistry} from 'react-native';
import App from './App';
AppRegistry.registerComponent('App', () => App);
// very similar to reactdom.render
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('react-root'),
});
