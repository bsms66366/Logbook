import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SessionScreen from '../screens/SessionScreen';
import SettingsScreen from '../screens/SettingsScreen';
import QRCodeScreen from '../screens/QRCodeScreen';
import FeedbackScreen from '../screens/FeedbackScreen';

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
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'C.S.E',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-link'} />
  ),
};

LinksStack.path = '';
/*****************************************************sessionNotes ****/

const SessionsStack = createStackNavigator(
  {
    Session: SessionScreen,
  },
  config
);
SessionsStack.navigationOptions = {
  tabBarLabel: 'Session Notes',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-book' : 'md-link'} />
  ),
};

SessionsStack.path = '';
/*****************************************************path pots****/
const SettingsStack = createStackNavigator(
  {
    QRCode: QRCodeScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Path pots',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-barcode' : 'md-link'} />
  ),
};

SettingsStack.path = '';
/*****************************************************feedback****/
const GameStack = createStackNavigator(
  {
    Feedback: FeedbackScreen,
  },
  config
);

GameStack.navigationOptions = {
  tabBarLabel: 'feedback',
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
