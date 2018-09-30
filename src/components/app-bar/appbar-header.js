import * as React from 'react';
import {Appbar, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class AppBarHeader extends React.Component {
    constructor(props) {
        super(props);
        this.getIcon = this.getIcon.bind(this);
        this.syncDevices = this.syncDevices.bind(this);
    }


    getIcon() {
        return (
            <Icon name="cycle" size={25} color="#FFFFFF"/>
        );
    }

    syncDevices() {
        console.log('');
    }

    render() {
        return (
            <Appbar.Header>
                <Appbar.Action
                    icon="menu"
                    onPress={() => console.log('Pressed')}
                />
                <Appbar.Content
                    title="Status"
                />
                <Text style={{color: '#FFFFFF', paddingRight: 5}}>sync</Text>
                <Appbar.Action style={{marginRight: 15,}} icon={this.getIcon} onPress={this.syncDevices}/>
            </Appbar.Header>
        );
    }
}