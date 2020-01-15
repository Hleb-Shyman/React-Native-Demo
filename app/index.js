import { AppRegistry } from 'react-native';
import Home from './screens/Home';
import { APP_ID } from './config';

export const registerAppComponent = () => AppRegistry.registerComponent(APP_ID, () => Home);
