import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Home from '../screens/Home/Home';
import Favorite from '../screens/Favorite/Favorite';
import Notification from '../screens/Notification/Notification';
import Account from '../screens/Account/Account';
import {moderateScale} from 'react-native-size-matters';

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#062743',
        headerShown: false,
        tabBarInactiveTintColor: '#9ea9b3',
        tabBarStyle: {
          marginVertical: moderateScale(10),
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="home-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="heart-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="notifications-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="person-sharp" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
