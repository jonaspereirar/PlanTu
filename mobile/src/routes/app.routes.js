import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Dashboard from '../pages/Dashboard';
import Welcome from '../pages/Welcome';


const App = createStackNavigator();

const AppRoute = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
  >
    <App.Screen name="Welcome" component={Welcome} />

    <App.Screen name="Dashboard" component={Dashboard} />



  </App.Navigator>
);

export default AppRoute;
