
import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Custom extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.touch}>
                    <Ionicons
                        name="ios-home"
                        color='blue'
                        size={24}
                    />
                    <Text style={styles.t}>Home</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        position: 'absolute',
        // flex: 2,
        // height: 100,
        // width: 100,
        alignSelf: 'center',
        // height: 70
    },
    touch: {
        flexDirection: 'row',
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        // marginTop: 4
    },
    t: {
        marginTop: 10
    }

});

export default Custom;
