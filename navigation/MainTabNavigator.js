import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import ViewPager from '@react-native-community/viewpager';


import pagesNav from '../screens/pagesNav';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
//import LinksScreen from '../screens/LinksScreen';
//import QRCodeScreen from '../screens/QRCodeScreen';
//import FeedbackScreen from '../screens/FeedbackScreen';
//import SessionScreen from '../screens/SessionScreen';
import attendanceDate from '../screens/attendanceDate';
//import dateScreen from '../screens/dateScreen';
import Authentication from '../screens/Authentication';
//import Biometrics from '../screens/Biometrics';
//import createSignature from '../screens/createSignature';
import CSE from '../screens/CSE';



const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Information',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-link'
      }
    />
  ),
};

HomeStack.path = '';
/*****************************************************links****/
const LinksStack = createStackNavigator(
  {
    pagesNav: pagesNav,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Attendance',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-link'} />
  ),
};

LinksStack.path = '';
/*****************************************************sessionNotes ****/

const SessionsStack = createStackNavigator(
  {
    CSE: CSE,
  },
  config
);
SessionsStack.navigationOptions = {
  tabBarLabel: 'C.S.E',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-bed' : 'md-link'} />
  ),
};

SessionsStack.path = '';
/*****************************************************path pots****/
const SettingsStack = createStackNavigator(
  {
    Authentication: Authentication,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Authentication',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-barcode' : 'md-link'} />
  ),
};

SettingsStack.path = '';
/*****************************************************feedback****/
const GameStack = createStackNavigator(
  {
    attendanceDate: attendanceDate,
  },
  config
);

GameStack.navigationOptions = {
  tabBarLabel: 'Date',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-archive' : 'md-link'} />
  ),
};

GameStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SessionsStack,
  SettingsStack,
  GameStack,
});

tabNavigator.path = '';

export default tabNavigator;
