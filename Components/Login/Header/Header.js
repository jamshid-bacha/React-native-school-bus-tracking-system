import React, {Component} from 'react';
import { Text, View, TextInput, StyleSheet}  from 'react-native';

export default class Header extends React.Component{
  render() {
    return (
      <View>
        <Text style={styles.text}>Welcome to MyBus App!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	text: {
		fontFamily: 'Arial',
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 20,
		backgroundColor: 'lightgrey'
	}
});