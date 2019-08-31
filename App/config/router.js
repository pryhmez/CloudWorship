
import React from 'react';
// import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { createMaterialTopTabNavigator, createAppContainer, createStackNavigator, createBottomTabNavigator, create, createSwitchNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Landing from '../components/Landing';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Dashboard from '../components/Dashboard';
import ResetPassword from '../components/ResetPassword';
import ForgotPassword from '../components/ForgotPassword';
import Shop from '../components/Shop';
import ChurchSelection from '../components/ChurchSelection';
import Wallet from '../components/Wallet';
import WhatsHot from '../components/WhatsHot';
import Custom from '../components/custom';
import Container from '../components/Container'
import UserProfile from '../components/UserProfile';

export const SignedOut = createStackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  }
});

export const SignedIn = createStackNavigator({
  Home: {
    screen: Container,
    navigationOptions: {
      header: null
    }
  },
  UserProfile: {
    screen: UserProfile,
    navigationOptions: {
      header: null
    },
  },
});

export const Launched = createStackNavigator({
  Landing: {
    screen: Landing,
    navigationOptions: {
      header: null
    }
  }
});

export const createRootnavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      Launched: {
        screen: Launched
      },
      Next: {
        screen: signedIn ? SignedIn : SignedOut
      },
      Final: {
        screen: SignedIn 
      }
      // SignedIn: {
      //   screen: SignedIn
      // },
      // SignedOut: {
      //   screen: SignedOut
      // }
    },
    // {
    //   initialRouteName: signedIn ? "SignedIn" : "SignedOut" 
    // }
  );
};
