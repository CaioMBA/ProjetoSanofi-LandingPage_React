import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ObjectiveScreen from './screens/ObjectiveScreen';
import SuggestionsScreen from './screens/SuggestionsScreen';
import ContactsScreen from './screens/ContactsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Objective" component={ObjectiveScreen} />
        <Tab.Screen name="Suggestions" component={SuggestionsScreen} />
        <Tab.Screen name="Contacts" component={ContactsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
