
import React, { Component } from 'react';
import { TextInput } from 'react-native-gesture-handler';
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
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    // console.warn(Img)
    return (
      <View style={styles.container}>
        <ImageBackground  source={require('../../assets/loginHeaderr.png')} style={styles.headerImg}>
          <View style={styles.headerText} >
            <Text style={styles.welcomeBack}>welcome Back</Text>
          </View>
        </ImageBackground>

        <View style={styles.form}>

          <TextInput style={styles.inputBox}
            onChangeText={(email) => this.setState({ email })}
            underlineColorAndroid='#A49B95'
            placeholder="Email"
            secureTextEntry={true}
            placeholderTextColor="#FF84A6"
            ref={(input) => this.password = input}
          />
          <TextInput style={styles.inputBox}
            onChangeText={(password) => this.setState({ password })}
            underlineColorAndroid='#A49B95'
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#FF84A6"
            ref={(input) => this.password = input}
          />
           <TouchableOpacity style={styles.forgotPass}>
            <Text style={styles.forgotPasstext} onPress={this.saveData}>{this.props.type}Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={this.saveData}>{this.props.type}SignUp</Text>
          </TouchableOpacity>
        </View>

        <View>
          
          <TouchableOpacity style={{flexDirection: 'row', margin: 8}}>
            <Text style={{color: '#FF4C82'}}>NEW USER?</Text>
            <Text style={{fontWeight:'bold'}}>  SIGN UP</Text>
          </TouchableOpacity>
          <TouchableOpacity></TouchableOpacity>
          
        </View>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    // flexDirection: 'column',
    alignItems: 'center'
  },
  inputBox: {
    width: 300,
    backgroundColor: '#ffffff',
    // borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#002f6c',
    marginVertical: 7
  },
  button: {
    width: 300,
    backgroundColor: '#4f83cc',
    borderRadius: 7,
    marginVertical: 10,
    paddingVertical: 12
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },
  headerImg: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  welcomeBack: {
    color: '#ffffff',
    marginHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center'
  },
  headerText: {
    alignItems: 'center',
    alignContent: 'center',
    height: 40,
    width: 300,
   
  },
  forgotPass: {
    alignSelf: 'flex-end',
  },
  forgotPasstext: {
    color: '#FF84A6',
    margin: 7
  }

});

export default Login;
