import React from 'react';
// import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { createMaterialTopTabNavigator, createAppContainer, createStackNavigator, createBottomTabNavigator, create } from 'react-navigation';
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

const Tabs = createMaterialTopTabNavigator({
  Home: {
    screen: Dashboard,
    navigationOptions: () => ({
      tabBarIcon: /*({tintColor}) => {*/
          <Custom />
      // }
  })
    
  },
  WhatsHot: {
    screen: WhatsHot
  },
  Wallet: {
    screen: Wallet
  },
  Shop: {
    screen: Shop
  }
},
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        let s = 20;
        if (routeName === 'Home') {
          iconName = "ios-home";
          if(focused) {
            s = s + 12
          }
        } else if (routeName === 'WhatsHot') {
          iconName = "ios-flame";
          if(focused) {
            s = s + 12
          }
        } else if (routeName === 'Wallet') {
          iconName = "ios-wallet";
          if(focused) {
            s = s + 12
          }
        } else if (routeName === 'Shop') {
          iconName = "ios-cart";
          if(focused) {
            s = s + 12
          }
        }
        return <IconComponent name={iconName} size={s} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      showIcon: 'true',
      showLabel: true,
      activeTintColor: '#ffffff',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 8
      },
      iconStyle: {
          fontSize: 12
      },
      tabStyle: {
        backgroundColor: "#E5004B"
      },
      style: {
        backgroundColor: "transparent"
      }
    },
  }
);

const Navs = createStackNavigator({
  Landing: {
    screen: Landing,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen: Container,
    navigationOptions: {
      header: null
    },
 
  },
  UserProfile: {
    screen: UserProfile,
    navigationOptions: {
      header: null
    },
  },
},
  {
    // initialRouteName: 'UserProfile',
    // defaultNavigationOptions: {
    //   headerStyle: {
    //     backgroundColor: '#f4511e',
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //   },
    // },
  });


export default createAppContainer(Navs);
