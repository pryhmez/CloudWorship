
import React, { Component } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import Ionicon from "react-native-vector-icons/Ionicons";
import { onSignIn } from "../config/auth"
import { connect } from 'react-redux';
import { login } from "../actions";
const Img = require('../../assets/footer.png');
const Imgg = require('../../assets/Group.png');
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Root,
  View,
  Text,
  ActivityIndicator,
  Image,
  ImageBackground,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';

import {
  // Toast,
} from 'react-native/Libraries/NewAppScreen';
import { Toast } from 'native-base';
import Error from "../reusables/error";


class Login extends Component {
  constructor(props) {
    super(props);
    this.forgotPassword = this.forgotPassword.bind(this);
    this.login = this.login.bind(this);
    this.state = {
      email: '',
      password: '',
      loading: false,
      textentry: true,
      icon: "ios-eye",
      emailErr: '',
      passErr: ''
    }
  }

  forgotPassword = () => this.props.navigation.navigate("ForgotPassword");

  managePasswordVisibility = () => {
    (this.state.textentry) ? this.setState({ icon: "ios-eye-off" }) : this.setState({ icon: "ios-eye" })
    this.setState({ textentry: !this.state.textentry });
  }
  login = () => {
    // this.setState({ loading: true });
   if(this.state.email.length == 0) {
     this.setState(() => ({emailErr: "please input email"}))
   }else {
    this.props.login(this.state.email.toLowerCase(), this.state.password)
    .then(res => {
      ToastAndroid.showWithGravityAndOffset(
        res,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        0,
        20
      );

    })
    .then(() => { this.props.navigation.navigate("Final") })
    .catch(err => {
      ToastAndroid.showWithGravityAndOffset(
        err,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        0,
        20
      );
      this.setState({ loading: false })
    })
   }
  }


  render() {


    return (

      <View style={styles.container}>
        <ImageBackground source={require('../../assets/loginHeaderr.png')} style={styles.headerImg}>
          <View style={styles.headerText} >
            <Text style={styles.welcomeBack}>welcome Back</Text>
          </View>
        </ImageBackground>

        <View style={styles.form}>

          <TextInput style={styles.inputBox}
            onChangeText={(email) => this.setState({ email })}
            underlineColorAndroid='#A49B95'
            placeholder="Email"
            secureTextEntry={false}
            keyboardType={"visible-password"}
            placeholderTextColor="#FF84A6"
            autoCapitalize = 'false'
            ref={(input) => this.email = input}
          />
          {this.state.emailErr !== '' && <Error message={this.state.emailErr} />}


          <View style={styles.inputBoxView}>
            <TextInput style={styles.inputBox}
              onChangeText={(password) => this.setState({ password })}
              underlineColorAndroid='#A49B95'
              placeholder="Password"
              secureTextEntry={this.state.textentry}
              placeholderTextColor="#FF84A6"
              autoCapitalize = 'false'
              ref={(input) => this.password = input}
            />

            <TouchableOpacity activeOpacity={0.8} style={styles.visibilityBtn} onPress={this.managePasswordVisibility}>
              
              <Ionicon name={this.state.icon} color='#fd9443' size={20} style={styles.btnImage} />
            </TouchableOpacity>
            
          </View>

          <TouchableOpacity style={styles.forgotPass}>
            <Text style={styles.forgotPasstext} onPress={this.forgotPassword}>{this.props.type}Forgot Password?</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.button} onPress={this.login }>
            {
              (this.state.loading)
                ?
                (<View style={styles.buttonText}>
                  <ActivityIndicator size="small" color="#ffffff" />
                </View>)
                :
                (
                  <Text style={styles.buttonText} >{this.props.type}SignIn</Text>
                )

            }

          </TouchableOpacity>
        </View>

        <View>

          <TouchableOpacity style={{ flexDirection: 'row', margin: 20 }} onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={{ color: '#FF4C82' }} title="Go to Details">NEW USER?</Text>
            <Text style={{ fontWeight: 'bold', color: '#970044' }}>  SIGN UP</Text>
          </TouchableOpacity>
          <TouchableOpacity></TouchableOpacity>

        </View>

      </View>

    );
  }

  doLogin = () => { this.props.navigation.navigate('Home') }
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    flex: 1,
    // flexDirection: 'column',
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
  inputBoxView: {
    width: 300,
    backgroundColor: 'transparent',
    // borderRadius: 25,
    fontSize: 16,
    color: '#002f6c',

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
    // user: state.user
  }
}

export default connect(mapStateToProps, { login })(Login);
