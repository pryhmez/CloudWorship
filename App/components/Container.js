
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
import {onSignOut} from "../config/auth";

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tabs from './Tab';

class Container extends Component {

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: ''
        }
      }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center', padding: 5, marginLeft: 5 }}>
                        <Ionicons name="ios-home" color='#fee2e9' size={27} />
                        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#fee2e9'}}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                        <Ionicons name="ios-flame" color='#fee2e9' size={20} />
                        <Text style={{ fontWeight: '500', color: '#fee2e9'}}>WhatsHot</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                        <Ionicons name="ios-wallet" color='#fee2e9' size={20} />
                        <Text style={{fontWeight: '500', color: '#fee2e9'}}>Wallet</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                        <Ionicons name="ios-cart" color='#fee2e9' size={20} />
                        <Text style={{fontWeight: '500', color: '#fee2e9'}}>Shop</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center', padding: 5 }} onPress={() => {onSignOut().then(this.props.navigation.push("Next"))}}>
                        <Ionicons name="ios-search" color='#fee2e9' size={24} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.userIcon} onPress={() => this.props.navigation.push('UserProfile')}>
                        <Ionicons name="ios-person" color='#fee2e9' size={24} />
                        
                    </TouchableOpacity>

                </View>
                <View style={styles.DashBoard}>
                    <Tabs/>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'yellow',
        flexDirection: 'column',
        flex: 1,
        width: "100%",
        
    },
    header: {
        backgroundColor: '#E5004b',
        height: 70,
        flexDirection: "row",
        justifyContent: 'space-evenly'
    },
    userIcon: { 
        flexDirection: "row", 
        justifyContent: 'center', 
        alignItems: 'center',
        alignSelf: 'center', 
        height: 35, 
        width: 30,
        marginLeft: 5,
        marginRight: 10, 
        backgroundColor: '#fd9451', 
        borderRadius: 8
    },
    DashBoard: {
        flex: 1
    }

});

export default Container;
