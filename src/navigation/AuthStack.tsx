import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import Tabs from './Tabs';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import Onboarding from '../screens/Onboarding/Onboarding';
import NewsDetails from '../screens/NewsDetails/NewsDetails';
import CategoryList from '../screens/CategoryList/CategoryList';
import About from '../screens/About/About';

const AuthStack = () => {
  const Stack: any = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Tab">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Tab" component={Tabs} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
      <Stack.Screen name="CategoryList" component={CategoryList} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default AuthStack;
