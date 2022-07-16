import React, {Component} from 'react';
import { Text, View, TextInput, StyleSheet}  from 'react-native';


export default class Footer extends React.Component{
  render() {
    return (
      <View>
      	<Text style={styles.text}>
      		This App is designed & developed by
      	</Text>
      	<Text style={styles.text}>
      		Najeeb Uddin
      	</Text>
      	<Text style={styles.text}>
      		Jamshed Bacha
      	</Text>
      	<Text style={styles.text}>
      		Babar Ali
      	</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
      	backgroundColor: "#d3d3d3",
      	fontSize: 20,
      	fontWeight: 'bold',
      	textAlign: 'center'
 	}
 });