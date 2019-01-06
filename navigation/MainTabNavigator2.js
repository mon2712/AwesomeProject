import React from 'react';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import {AddButton} from '../components/AddButton';
import {MagicTabBar} from '../components/MagicTabBar';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {Routes} from "./Routes";

const TabsNavigator = createBottomTabNavigator({
    [Routes.TabsBookmarks]: {
        screen: HomeScreen,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="bookmark"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
    [Routes.TabsLikes]: {
        screen: LinksScreen,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="heart"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
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
                            color: 'green'
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
    [Routes.TabsPrivate]: {
        screen: LinksScreen,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="lock"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
    [Routes.TabsProfile]: {
        screen: HomeScreen,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="user"
                    color={tintColor}
                    size={24}
                />
            )
        })
    }
}, {
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

const MainTabNavigator = createStackNavigator({
    [Routes.Tabs]: TabsNavigator,
    [Routes.OtherScreen]: HomeScreen
}, {
    headerMode: 'none'
});

const MainTabNavigatorContainer = createAppContainer(MainTabNavigator);

export {MainTabNavigatorContainer as MainTabNavigator};