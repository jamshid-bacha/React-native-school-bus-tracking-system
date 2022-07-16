import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Body from './Verification/Body.js';

export default class VerificationScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.Body}>
                    <Body navigation={this.props.navigation} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 50,
        alignItems: 'center'
    },
    Body: {
        width: 300,
        marginTop: 20,
        marginBottom: 20,
        height: 200
    }
});