import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import Tabs from './Tabs';
import NewsDetails from '../screens/NewsDetails/NewsDetails';
import CategoryList from '../screens/CategoryList/CategoryList';
import About from '../screens/About/About';

const MainStack = () => {
  const Stack: any = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Tab" component={Tabs} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
      <Stack.Screen name="CategoryList" component={CategoryList} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default MainStack;
