import React, {Component} from 'react';
import { Text, View } from 'react-native';

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';

import LoginScreen from './Components/LoginScreen.js';
import VerificationScreen from './Components/VerificationScreen.js';
import MapScreen from './Components/MapScreen.js';

const AppNavigator = createStackNavigator(
    {
        Login: LoginScreen,
        Verification: VerificationScreen,
        Map: MapScreen
    },
    {
        initialRouteName: "Login",
        defaultNavigationOptions: {
            
        },
        headerMode: 'none',
    }

);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component{
    render() {
        return (
            <AppContainer />
        );
     }
}