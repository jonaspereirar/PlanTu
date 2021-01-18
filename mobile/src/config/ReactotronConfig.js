import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  // const tron = Reactotron.setAsyncStorageHandler({ host: '192.168.0.2' })
  //adb reverse tcp:9090 tcp:9090 se n conectar tem de ir na pasta sdk
  //~/Android/Sdk/platform-tools/adb digita: reverse tcp:9090 tcp:9090

  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure()
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
