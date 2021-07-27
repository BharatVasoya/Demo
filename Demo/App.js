import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {
  AppState,
  Linking,
  TouchableOpacity,
  DeviceEventEmitter,
  Platform,
  View,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {NavigationContainer, CommonActions} from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer ref={ref => (this.navigator = ref)}>
          <AppNavigator />
        </NavigationContainer>
      </Provider>
    );
  }

  handlePerm(perms) {}
}
