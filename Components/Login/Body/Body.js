import React, {Component} from 'react';
import { Text, View, TextInput, StyleSheet, FlatList } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class Body extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      text: 'e.g 03339235412',
      dataSource: '',
      found : true,
     };
     //this.fetchContacts();
  }

  componentDidMount(){
    this.fetchContacts();
  }

  fetchContacts(){
    fetch('http://192.168.43.80:3000/student')
    .then((response) => response.json())
    .then((response) => {
      this.setState({
        dataSource: response
      });
    }).catch((error) => {
      console.error(error);
    });
  }

  onSubmit = () => {
    this.setState({found: false}, () => {
        for (var i = 0; i < this.state.dataSource.length; i++){
          //to match the contact with the list of contacts we got from the database
        if (this.state.dataSource[i].guardianContact === parseInt(this.state.text)){
            this.setState({ found: true });
            this.props.navigation.navigate('Verification', { pass: this.state.dataSource[i].pass });
        }
      }
    });
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>Please enter your contact number below:</Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          onSubmitEditing={this.onSubmit}
        />
        <View >
          {
            (!this.state.found) ?
            <Text style={styles.warnMsg}>*Incorrect contact number, Please enter the correct contact number.</Text>
            : null
          }
        </View>
      </View>
    );
  }
}

// <FlatList data={this.state.dataSource} renderItem={({item}) => <Text>{item.guardianContact} , {item.pass}</Text>} />

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Arial',
    fontSize: 15,
    textAlign: 'left',
  },
  inputBox: {
    borderColor: 'red',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 30,
    paddingLeft: 15,
    marginTop: 10,
    color: 'lightgrey'
  },
  warnMsg: {
    color: 'red',
    textAlign: 'center',
    marginTop: 15
  }
});