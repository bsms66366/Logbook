import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import ViewPager from '@react-native-community/viewpager';


//import pagesNav1 from '../screens/pagesNav1';

import pagesNav from '../screens/pagesNav';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LinksScreen from '../screens/LinksScreen';
import QRCodeScreen from '../screens/QRCodeScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import Registration from '../screens/Registration';
//import SessionScreen from '../screens/SessionScreen';
//import attendanceDate from '../screens/attendanceDate';
//import dateScreen from '../screens/dateScreen';
import Authentication from '../screens/Authentication';
//import Biometrics from '../screens/Biometrics';
//import createSignature from '../screens/createSignature';
//import CSE from '../screens/CSE';
//import toDoList from '../screens/toDoList';
//import studentRegister from '../screens/studentRegister';
import course from '../screens/course';
import GPLogin from '../screens/GPLogin';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    pagesNav: pagesNav,
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
    course: course,
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
    Registration: Registration,
  },
  config
);
SessionsStack.navigationOptions = {
  tabBarLabel: 'Sign',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-save' : 'md-link'} />
  ),
};

SessionsStack.path = '';
/*****************************************************path pots****/
const SettingsStack = createStackNavigator(
  {
    GPLogin: GPLogin,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'GPLogin',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-barcode' : 'md-link'} />
  ),
};

SettingsStack.path = '';
/*****************************************************feedback****/
const GameStack = createStackNavigator(
  {
    FeedbackScreen: FeedbackScreen,
  },
  config
);

GameStack.navigationOptions = {
  tabBarLabel: 'Feedback',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-body' : 'md-link'} />
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
