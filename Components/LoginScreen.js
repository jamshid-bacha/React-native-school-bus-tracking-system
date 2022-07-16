import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Body from './Login/Body/Body.js';
import Header from './Login/Header/Header.js';
import Footer from './Login/Footer/Footer.js';

export default class LoginScreen extends React.Component{
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        return (
          <View style={styles.container}>
              <View style={styles.Header}>
                <Header />
              </View>
              <View style={styles.Body}>
                    <Body navigation={ this.props.navigation }/>
              </View>
              <View style={styles.Footer}>
                <Footer />
              </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Header: {
    width: 300,
    height: 100
  },
  Body: {
    width: 300,
    marginTop: 20,
    marginBottom: 20,
    height: 200
  },
  Footer: {
    width: 300,
    height: 100
  }
});