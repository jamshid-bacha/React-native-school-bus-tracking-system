import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Body from './Map/Body.js';

export default class MapScreen extends React.Component {
    render() {
        return (
            <View>
                <Body navigation={this.props.navigation} />
            </View>
        );
    }
}