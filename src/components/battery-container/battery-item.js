import * as React from 'react';
import { List } from 'react-native-paper';

const BatteryItem = (props) => (
    <List.Item
        title="First Item"
        description="Item description"
        left={props => <List.Icon {...props} icon="battery-alert" />}
    />
);

export default BatteryItem;