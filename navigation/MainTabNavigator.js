import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Routes} from "./Routes";

import TabBarIcon from '../components/TabBarIcon';
import {AddButton} from '../components/AddButton';
import {MagicTabBar} from '../components/MagicTabBar';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Login from '../screens/Login';
import User from '../screens/User';  


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <Icon name="home" size={30} color="#c5c7c7" />
  ),
};

const LinksStack = createStackNavigator({
  Links: Login,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Tienda',
  tabBarIcon: ({ focused }) => (
    <Icon name="basket" size={30} color="#c5c7c7" />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Notificaciones',
  tabBarIcon: ({ focused }) => (
    <Icon name="earth" size={30} color="#c5c7c7" />
  ),
};

const UserStack = createStackNavigator({
  User: User,
});

UserStack.navigationOptions = {
  tabBarLabel: 'Usuario',
  tabBarIcon: ({ focused }) => (
    <Icon name="account" size={30} color="#c5c7c7" />
  ),
};


export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  MultiBar: {
      screen: () => null,
      navigationOptions: () => ({
          tabBarIcon: (
              <AddButton
                  routes={[
                      {
                          routeName: Routes.OtherScreen,
                          color: 'red'
                      },
                      {
                          routeName: Routes.OtherScreen,
                          color: 'yellow'
                      },
                      {
                          routeName: Routes.OtherScreen,
                          color: 'blue'
                      },
                  ]}
              />
          )
      }),
      params: {
          navigationDisabled: true
      }
  },
  SettingsStack,
  UserStack,
},{
  tabBarComponent: MagicTabBar,
  tabBarOptions: {
      showLabel: false,
      activeTintColor: '#F8F8F8',
      inactiveTintColor: '#586589',
      style: {
          backgroundColor: '#171F33'
      },
      tabStyle: {}
  }
});
