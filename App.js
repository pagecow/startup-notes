import AppState from './src/AppState/AppState';
import registerNNPushToken from 'native-notify';

export default function App() {
  registerNNPushToken(2322, 'm2Z4KJEpmg7R91AkqQpCru');
  
  return <AppState />;
}