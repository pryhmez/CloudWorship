
import React, { Component } from 'react';
import { Container, Content, Button as TouchableOpacity } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
                        <View style={styles.statusBar}>
                            <TouchableOpacity style={{ marginLeft: 12, marginBottom: 10, width: 50, backgroundColor: 'transparent', elevation: 0, justifyContent: 'center' }}>
                                <Ionicons name="ios-arrow-round-back" color='#fee2e9' size={40} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 24, color: '#ffffff' }}>Juliana James</Text>
                            <TouchableOpacity style={{ marginRight: 12, marginBottom: 10, fontWeight: 'bold', justifyContent: 'center', width: 60, backgroundColor: 'transparent', elevation: 0 }}>
                                <Ionicons name="ios-search" color='#fee2e9' size={25}/>
                            </TouchableOpacity>
                        </View>
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
                                <View style={{ flex: 1, height: '100%', width: 200, alignItems: 'center', padding: 6 }}>
                                    <Image source={require('../../assets/videomock.png')} style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center' }} >
                                        <Image source={require('../../assets/play.png')} style={{ alignSelf: 'center', width: 40, height: 40 }} />
                                    </Image>
                                    <Text style={{ fontWeight: 'bold', fontSize: 13, color: '#BA4900' }}>Hitherto You Are The Lord</Text>
                                    <Text style={{ color: '#BA4900' }}>Pastor Donatus</Text>
                                </View>

                                <View style={{ flex: 1, height: '100%', width: 200, alignItems: 'center', padding: 6 }}>
                                    <Image source={require('../../assets/videomock2.png')} style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center' }} >
                                        <Image source={require('../../assets/play.png')} style={{ alignSelf: 'center', width: 40, height: 40 }} />
                                    </Image>
                                    <Text style={{ fontWeight: 'bold', fontSize: 13, color: '#BA4900' }}>Hitherto You Are The Lord</Text>
                                    <Text style={{ color: '#BA4900' }}>Pastor T. B joshua</Text>
                                </View>

                                <View style={{ flex: 1, height: '100%', width: 200, alignItems: 'center', padding: 6 }}>
                                    <Image source={require('../../assets/videomock.png')} style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center' }} >
                                        <Image source={require('../../assets/play.png')} style={{ alignSelf: 'center', width: 40, height: 40 }} />
                                    </Image>
                                    <Text style={{ fontWeight: 'bold', fontSize: 13, color: '#BA4900' }}>Hitherto You Are The Lord</Text>
                                    <Text style={{ color: '#BA4900' }}>Pastor Donatus</Text>
                                </View>

                            </ScrollView>
                        </View>
                        <View style={{ margin: 10 }}>
                            <Text style={{ fontSize: 20, color: '#970044', margin: 5 }}>Audios</Text>
                            <ScrollView style={styles.Audio} horizontal={true}>
                                <View style={{ flex: 1, height: '100%', width: 100, alignItems: 'center', padding: 6 }}>
                                    <View style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center', borderRadius: 10 }}>
                                        <Image source={require('../../assets/music.png')} style={{ width: '100%', height: '100%', flex: 1, justifyContent: 'center' }} resizeMode='contain' >
                                            <Image source={require('../../assets/play.png')} style={{ alignSelf: 'center', width: 30, height: 30 }} />
                                        </Image>
                                    </View>
                                    <Text style={{ fontWeight: 'bold', fontSize: 11, color: '#BA4900' }}>Hitherto You Are The Lord</Text>
                                    <Text style={{ fontSize: 11, color: '#BA4900' }}>Victoria Orenze</Text>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={{ margin: 10 }}>
                            <Text style={{ fontSize: 20, color: '#970044', margin: 5 }}>Books</Text>
                            <ScrollView style={styles.Book} horizontal={true}></ScrollView>
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
        height: 180,
        width: 260,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10
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
        flexDirection: 'row',
        height: 130
    },
    Book: {
        flexDirection: 'row',
        backgroundColor: 'blue',
        height: 120
    },
    follow: {
        justifyContent: 'center',
        borderRadius: 10,
        height: 60,
        width: 70,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        marginTop: 130,
        alignItems: 'center'
    },
    followText: {
        fontWeight: '900',
        fontSize: 15,
        color: '#FDEAE4'
    },
    statusBar: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        width: '100%',
        height: 40,
        alignSelf: 'flex-start',
        justifyContent: 'space-between'
    }

});

export default UserProfile;
