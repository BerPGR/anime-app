import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './source/views/Home'
import Profile from './source/views/Profile';
import { StyleSheet } from 'react-native';
import colors from './source/colors/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: styles.tabBar,
      tabBarActiveTintColor: colors.purple,
      tabBarInactiveTintColor: colors.darkGray,
      tabBarShowLabel: false,
      headerShown: false
    }}>
      <Tab.Screen name="Home" component={Home}/>
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.black,
  }
})