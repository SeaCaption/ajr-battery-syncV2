import * as React from 'react';
import {ActionButton} from 'react-native-material-ui';
import {View} from 'react-native';
import PropTypes from 'prop-types';

class AppBarBottom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                }}>
                    <ActionButton onPress={this.props.displaySnackBar}/>
                </View>
        );
    }
}

AppBarBottom.propTypes = {
    displaySnackBar: PropTypes.func
};
export default AppBarBottom;