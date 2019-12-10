
import React, { Component } from 'react';
import { onSignUp } from "../config/auth";
import { connect } from 'react-redux';
import { signUp } from "../actions";
import Ionicon from "react-native-vector-icons/Ionicons";
import { CLEAR_USER, LOGIN_USER, LOGIN_USER_FAILED, LOGIN_USER_SUCCESS, SET_USER, SIGNUP_USER, SIGNUP_USER_FAILED, SIGNUP_USER_SUCCESS } from '../actions/type'

import { SwitchActions } from 'react-navigation';
import Error from "../reusables/error";

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  // TextInput,
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
import { TextInput } from 'react-native-gesture-handler';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.sign = this.sign.bind(this);
    this.state = {
      email: '',
      password: '',
      name: '',
      isLoading: true,
      dataSource: null,
      error: '',
      nameErr: '',
      emailErr: '',
      icon: 'ios-eye',
      textentry: true
    }
  }

  componentDidUpdate() {

    // console.warn(this.state.error)
  }

  managePasswordVisibility = () => {
    (this.state.textentry) ? this.setState({ icon: "ios-eye-off" }) : this.setState({ icon: "ios-eye" })
    this.setState({ textentry: !this.state.textentry });
  }

  sign = () => {
    if (this.state.name == '') {
      this.setState(() => ({ nameErr: "please input a name" }))

    } else if (this.state.email.length == 0) {
      this.setState(() => ({ nameErr: '', emailErr: "please input a valid email" }))

    } else if (this.state.password.length < 8) {
      this.setState(() => ({ emailErr: '', error: "password must be more than 8" }))

    } else {
      this.setState(() => ({ error: '' }))
      this.props.signUp(this.state.name, this.state.name, this.state.email.toLowerCase(), this.state.password).then(res => console.warn(res))
        .then(this.props.navigation.navigate("Final"));
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/signupHeader.png')} style={styles.headerImg}>
          <View style={styles.headerText}>
            <Text style={styles.createAcct}>Create Account</Text>
          </View>
        </ImageBackground>

        {/* <View style={styles.Header} >
         
          <Image source={require('../../assets/CreateAccount.png')} />
          <Image source={require('../../assets/signupHeader.png') } />
        </View> */}
        <View style={styles.form}>
          <TextInput style={styles.inputBox}
            onChangeText={(name) => this.setState({ name })}
            underlineColorAndroid='#A49B95'
            placeholder="Full Name"
            placeholderTextColor="#FF84A6"
            selectionColor="#fff"
            keyboardType="email-address"
            autoCapitalize='false'
            onSubmitEditing={() => this.name.focus()} />
          {this.state.nameErr !== '' && <Error message={this.state.nameErr} />}

          <TextInput style={styles.inputBox}
            onChangeText={(email) => this.setState({ email })}
            underlineColorAndroid='#A49B95'
            placeholder="Email"
            secureTextEntry={true}
            placeholderTextColor="#FF84A6"
            keyboardType="email-address"
            autoCapitalize='false'
            ref={(input) => this.password = input}
          />
          {this.state.emailErr !== '' && <Error message={this.state.emailErr} />}


          <View style={styles.inputBoxView}>
            <TextInput style={styles.inputBox}
              onChangeText={(password) => this.setState({ password })}
              underlineColorAndroid='#A49B95'
              placeholder="Password"
              secureTextEntry={this.state.textentry}
              placeholderTextColor="#FF84A6"
              autoCapitalize='false'
              ref={(input) => this.email = input}
            />
            {this.state.error !== '' && <Error message={this.state.error} />}


            <TouchableOpacity activeOpacity={0.8} style={styles.visibilityBtn} onPress={this.managePasswordVisibility}>

              <Ionicon name={this.state.icon} color='#fd9443' size={20} style={styles.btnImage} />
            </TouchableOpacity>

          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={this.sign}>{this.props.type}SignUp</Text>
          </TouchableOpacity>
        </View>
        <View>

          <TouchableOpacity style={{ flexDirection: 'row' }} onPress={move = () => { this.props.navigation.navigate("Login") }}>
            <Text style={{ color: '#FF4C82' }}>Already have an Account?</Text>
            <Text style={{ fontWeight: 'bold', color: '#970044' }}>  SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity></TouchableOpacity>

        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#E5E5E5'
  },
  inputBox: {
    width: 300,
    backgroundColor: 'transparent',
    // borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#002f6c',
    marginVertical: 7
  },
  button: {
    width: 300,
    backgroundColor: '#FD9451',
    borderRadius: 7,
    marginVertical: 10,
    paddingVertical: 12,
    elevation: 200
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },
  createAcct: {
    color: '#ffffff',
    marginHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center'
  },
  headerImg: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    alignItems: 'center',
    alignContent: 'center',
    height: 40,
    width: 300
  },
  inputBox: {
    width: 300,
    backgroundColor: 'transparent',
    // borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#002f6c',
    marginVertical: 7
  },
  visibilityBtn: {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 5
  },

  btnImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
    marginTop: 13
  }

});

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { signUp })(SignUp);
