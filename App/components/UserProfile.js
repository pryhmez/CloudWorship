
import React, { Component } from 'react';
import { Container, Content, Button as TouchableOpacity } from 'native-base';
const Img = require('../../assets/footer.png');
const Imgg = require('../../assets/Group.png');
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    // Image,
    ImageBackground as Image,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class UserProfile extends Component {

    render() {
        // console.warn(Img)
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../../assets/Statusbarbg.png')} style={styles.headerImg}>
                        <View style={styles.coverage}>
                            <View style={styles.follow}>
                                <Text style={styles.followText}>500</Text>
                                <Text style={styles.followText}>Following</Text>
                            </View>
                            <View style={styles.profilepix} >
                                <Image source={require('../../assets/smallpix.png')} style={{ width: 120, height: '100%', flex: 1, alignSelf: 'center', padding: 5 }} />
                                <TouchableOpacity style={{
                                    justifyContent: 'center', margin: 5, borderRadius: 10, height: 40, backgroundColor: '#fd9451'
                                }}>
                                    <Text style={{ color: '#FDEAE4' }}>Follow</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.follow}>
                                <Text style={styles.followText}>2500</Text>
                                <Text style={styles.followText}>Followers</Text>
                            </View>
                        </View>
                    </Image>
                </View>
                <View style={{ flex: 1.7, }}>
                    <ScrollView>
                        <View style={{ margin: 10 }} >
                            <Text style={{ fontSize: 20, color: '#970044', margin: 5 }}>Videos</Text>
                            <ScrollView style={styles.video} horizontal={true}>
                                <View style={{ flex: 1, height: '100%', width: 200, alignItems: 'center', padding: 6}}>
                                    <Image source={require('../../assets/videomock.png')} style={{ width: '100%', height: '100%', flex: 1 }} />
                                    <Text style={{fontWeight: 'bold', fontSize: 13, color: '#BA4900'}}>Hitherto You Are The Lord</Text>
                                    <Text style={{color: '#BA4900'}}>Pastor Donatus</Text>
                                </View>

                                <View style={{ flex: 1, height: '100%', width: 200, alignItems: 'center', padding: 6}}>
                                    <Image source={require('../../assets/videomock2.png')} style={{ width: '100%', height: '100%', flex: 1 }} />
                                    <Text style={{fontWeight: 'bold', fontSize: 13, color: '#BA4900'}}>Hitherto You Are The Lord</Text>
                                    <Text style={{color: '#BA4900'}}>Pastor T. B joshua</Text>
                                </View>

                                <View style={{ flex: 1, height: '100%', width: 200, alignItems: 'center', padding: 6}}>
                                    <Image source={require('../../assets/videomock.png')} style={{ width: '100%', height: '100%', flex: 1 }} />
                                    <Text style={{fontWeight: 'bold', fontSize: 13, color: '#BA4900'}}>Hitherto You Are The Lord</Text>
                                    <Text style={{color: '#BA4900'}}>Pastor Donatus</Text>
                                </View>
                               
                            </ScrollView>
                        </View>
                        <View style={{ margin: 10 }}>
                            <Text style={{ fontSize: 20, color: '#970044', margin: 5 }}>Audios</Text>
                            <ScrollView style={styles.video} horizontal={true}></ScrollView>
                        </View>
                        <View style={{ margin: 10 }}>
                            <Text style={{ fontSize: 20, color: '#970044', margin: 5 }}>Books</Text>
                            <ScrollView style={styles.video} horizontal={true}></ScrollView>
                        </View>
                    </ScrollView>
                </View>

            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flex: 1,
        // flexDirection: "row",
        width: "100%",
    },
    headerImg: {
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center'
    },
    coverage: {
        alignSelf: "center",
        backgroundColor: 'transparent',
        height: 200,
        width: 260,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    profilepix: {
        height: 135,
        width: 80,
        alignSelf: 'center',
        // backgroundColor: 'green'
    },
    header: {
        flex: 1,
        height: 350,
        backgroundColor: 'green',
        borderBottomRightRadius: 50
    },
    video: {
        flexDirection: 'row',
        // backgroundColor: 'blue',
        height: 160,
    },
    Audio: {
        flexDirection: 'row'
    },
    Book: {
        flexDirection: 'row',
        backgroundColor: 'blue',
        height: 150
    },
    follow: {
        justifyContent: 'center',
        borderRadius: 10,
        height: 60,
        width: 70,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        marginTop: 150,
        alignItems: 'center'
    },
    followText: {
        fontWeight: '900',
        fontSize: 15,
        color: '#FDEAE4'
    }

});

export default UserProfile;
