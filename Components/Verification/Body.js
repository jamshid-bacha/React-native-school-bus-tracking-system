import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, FlatList } from 'react-native';

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            found: true
        };
    }

    onSubmit = () => {
        this.setState({ found: false }, () => {
            if (this.state.text == this.props.navigation.getParam('pass', '')) {
                this.setState({ found: true });
                this.props.navigation.navigate('Map');
            }

            if (this.state.found) {
                console.log("pass matched");
            }
            else {
                console.log("pass didn't match");
            }
        });
    }

    render() {
        return (
            <View>
                <Text style={styles.text}>Please enter your password below:</Text>
                <TextInput
                    style={styles.inputBox}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    onSubmitEditing={this.onSubmit}
                />
                <View >
                    {
                        (!this.state.found) ?
                            <Text style={styles.warnMsg}>*Incorrect password, Please enter the correct password.</Text>
                            :  null
                    }
                </View>

            </View>
        );
    }
}

// <FlatList data={this.state.dataSource} renderItem={({item}) => <Text>{item.guardianContact}</Text>} />

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
    },
    verMsg: {
        color: 'green',
        textAlign: 'center',
        marginTop: 15
    }
});