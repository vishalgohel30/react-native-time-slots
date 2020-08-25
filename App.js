import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/Home';
import Users from './src/User';
import Photo from './src/Photo';

import { setData, CreateTimeSlots } from './src/Utils';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  useEffect(() => {
    setData(CreateTimeSlots('09:00 AM', '05:00 PM'))
  }, []);


  const myStack = () => {
    return (<Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Users" component={Users} />
    </Stack.Navigator>)
  }

  const MyTabs = () => {

    return (<Tab.Navigator>
      <Tab.Screen name="Home" component={myStack} />
      <Tab.Screen name="Photo" component={Photo} />
    </Tab.Navigator>)
  }

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
