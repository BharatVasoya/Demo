import * as React from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import Home from '../../src/screens/Home';
import Details from '../screens/Details';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Home', headerShown: false}}
      />

      <Stack.Screen
        name="Details"
        component={Details}
        options={{title: 'Details', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
