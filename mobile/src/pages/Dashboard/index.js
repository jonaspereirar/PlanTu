import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabComponent from '~/components/Tab';

import HomeScreen from '~/pages/HomeScreen';
import PlusScreen from '~/pages/PlusScreen';
import PlanTuScreen from '~/pages/PlanTuScreen';

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarButton: (props) => <TabComponent label="Home" {...props} />,
        }}
      />
      <Tab.Screen
        name="Adicionar"
        component={PlusScreen}
        options={{
          tabBarButton: (props) => (
            <TabComponent label="Adicionar" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="PlanTuScreen"
        component={PlanTuScreen}
        options={{
          tabBarButton: (props) => <TabComponent label="PlanTu" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}
