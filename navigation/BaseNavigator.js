import React from 'react';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from '../screens/Login';
import {AddButton, Bookmarks, Likes, MagicTabBar, Private, Profile, Settings} from "../components";
import {Routes} from "./Routes";

const TabsNavigator = createBottomTabNavigator({
    [Routes.TabsBookmarks]: {
        screen: Bookmarks,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="home"
                    color={tintColor}
                    size={30}
                />
            )
        })
    },
    [Routes.TabsLikes]: {
        screen: Login,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="basket"
                    color={tintColor}
                    size={30}
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
                            color: '#171F33',
                            icon: 'paw'
                        },
                        {
                            routeName: Routes.OtherScreen,
                            color: '#171F33',
                            icon: 'camera'
                        }
                    ]}
                />
            )
        }),
        params: {
            navigationDisabled: true
        }
    },
    [Routes.TabsPrivate]: {
        screen: Private,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="earth"
                    color={tintColor}
                    size={30}
                />
            )
        })
    },
    [Routes.TabsProfile]: {
        screen: Profile,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="account"
                    color={tintColor}
                    size={30}
                />
            )
        })
    }
}, {
    tabBarComponent: MagicTabBar,
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#94B96B',
        inactiveTintColor: '#586589',
        style: {
            backgroundColor: '#171F33'
        },
        tabStyle: {}
    }
});

const BaseNavigator = createStackNavigator({
    [Routes.Tabs]: TabsNavigator,
    [Routes.OtherScreen]: Settings
}, {
    headerMode: 'none'
});

const BaseNavigatorContainer = createAppContainer(BaseNavigator);

export {BaseNavigatorContainer as BaseNavigator};