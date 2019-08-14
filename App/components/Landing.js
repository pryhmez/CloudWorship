
import React, { Component } from 'react';
const Img = require('../../assets/footer.png');
const Imgg = require('../../assets/Group.png');
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Landing extends Component {

  render() {
    // console.warn(Img)
    return (
      <View style={styles.container}>
        <View style={styles.logo}>

          <Image source={Imgg} />
          <Image source={require('../../assets/LetsWorship.png')} />
        </View>
        {/* <View style={styles.footer}>
          <Image source={Img} style={{ flex: 1, position: 'relative', height: '100%'}} resizeMode='contain' />
        </View>
         */}
         <ImageBackground source={Img} style={{flex:1}}></ImageBackground>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {

    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch'

  },
  footer: {

    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'flex-end',
    // alignItems: 'stretch',
    height: '100%',
    elevation: 500,
    // backgroundColor: 'green',
    overflow: 'hidden'
  },
  logo: {

    flex: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%'
  }
});

export default Landing;
