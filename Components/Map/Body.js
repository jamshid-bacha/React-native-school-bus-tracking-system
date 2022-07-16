import React, { Component } from 'react';
import { Text, View, StyleSheet,Image,Dimensions } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';


export default class Body extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        latitude: null,
        longitude: null,
        error:null,
        };
    }

    componentDidMount() {
        Geolocation.getCurrentPosition(
                (position) => {
                console.log("wokeeey");
                console.log(position);
                this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
        );
    }


    render() {
        return (
            <View>
            <View style={styles.container} >
                <MapView
                    showsUserLocation = {true}
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={{
                    latitude:34.0224577,
                    longitude:71.5733225,
                    latitudeDelta: 1,
                    longitudeDelta: 1
                }}
                >

                {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
                    coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}
                    title={"Bus 1"}
                />}

                </MapView>
            </View>
            <View>
                <Text> {this.state.latitude} </Text>
                <Text> {this.state.longitude} </Text>
                <Text> {this.state.error} </Text>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        width: Dimensions.get('window').width * 1,
        height: Dimensions.get('window').height * 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    marker: {
    width: Dimensions.get('window').width * 0.05,
    height: Dimensions.get('window').height * 0.03,
  },
})