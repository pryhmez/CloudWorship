
import React, { Component } from 'react';
const Img = require('../../assets/footer.png');
const Imgg = require('../../assets/Group.png');
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  ImageBackground,
  // TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { TextInput } from 'react-native-gesture-handler';

class ForgotPassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
    }
  }

  render() {
    // console.warn(Img)
    return (
      <View style={styles.container}>
        <View style={{flex: 7, marginTop: 30 }}>
          <View style={styles.header}>
            <Text style={styles.headertext}>Forgot Password?</Text>
            <Image source={require('../../assets/forgotpassimgg.png')} style={styles.headerImg} resizeMode='contain' />
          </View>
          <View>
            <Text style={styles.text}>Enter the email address associated with</Text>
            <Text style={styles.text}>your account</Text>
            <Text style={{ color: '#FF4C82', alignSelf: 'center', marginTop: 10 }}>You'll be emailed a Password reset link</Text>
          </View>
          <View>
            <TextInput style={styles.inputBox}
              onChangeText={(email) => this.setState({ email })}
              underlineColorAndroid='#A49B95'
              placeholder="Email"
              secureTextEntry={true}
              placeholderTextColor="#FF84A6"
              ref={(input) => this.password = input}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={this.saveData}>{this.props.type}Send</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, backgroundColor: 'transparent', }}>
            <View style={{ flez: 1 }}>
              <Image source={Img} style={{ flex: 1, width: 360, height: 150 }} ></Image>
            </View>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Image source={Img} style={{ flex: 1, width: 360, height: 100 }} resizeMode='stretch'></Image>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {

    flex: 1,
    flexDirection: 'column',
    // alignContent: 'center',
    // backgroundColor: '#E5E5E5'
    justifyContent: 'center'

  },
  header: {
    // flex: 1,
    elevation: 1000,
    alignSelf: 'center'
  },
  headertext: {
    fontWeight: 'bold',
    color: '#970044',
    margin: 10,
    fontSize: 24,
    alignSelf: 'center',
    marginTop: 30,
    height: 40,
  },
  headerImg: {
    height: 250,
    width: 250,
    alignSelf: 'center'
  },
  text: {
    fontSize: 16,
    color: '#FF4C82',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  button: {
    width: 300,
    backgroundColor: '#4f83cc',
    borderRadius: 7,
    marginVertical: 10,
    paddingVertical: 12,
    elevation: 200,
    alignSelf: 'center'
  },
  inputBox: {
    width: 300,
    backgroundColor: 'transparent',
    // borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#002f6c',
    marginVertical: 7,
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },

});

export default ForgotPassword;
