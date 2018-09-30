/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import AppBarHeader from './src/components/app-bar/appbar-header';
import AppBarBottom from './src/components/app-bar/appbar-bottom';
import Snackbar from 'react-native-snackbar';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});


type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.getSnackBar = this.getSnackBar.bind(this);
    }
    getSnackBar(){
       Snackbar.show({
            title: '1 deleted',
            duration: 6000,
            action: {
                title: 'UNDO',
                color: '#2C7DB2',
                onPress: () => { /* Do something. */ },
            },
        });
    }
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <StatusBar barStyle="default" hidden={false}/>
                <AppBarHeader/>
                <AppBarBottom displaySnackBar={this.getSnackBar}/>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
