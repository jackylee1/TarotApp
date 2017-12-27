import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('TarotApp', () => App);
AppRegistry.runApplication('TarotApp', {
  initialProps: {},
  rootTag: document.getElementById('container')
}); 
