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
import Video from '../components/Video';
import Audio from '../components/Audio';
import Books from '../components/Books';

const Tabs = createMaterialTopTabNavigator({
  Video: {
    screen: Video,
//     navigationOptions: () => ({
//       tabBarIcon: /*({tintColor}) => {*/
//           <Custom />
//       // }
//   })
    
  },
  Audio: {
    screen: Audio
  },
  Books: {
    screen: Books
  },
  Shop: {
    screen: Audio,
    tabBarOptions: {
        labelStyle: {
            color: 'white'
        }
    }
  }
},
  {
    initialRouteName: 'Video',
    // defaultNavigationOptions: ({ navigation }) => ({
    //   tabBarIcon: ({ focused, horizontal, tintColor }) => {
    //     const { routeName } = navigation.state;
    //     let IconComponent = Ionicons;
    //     let iconName;
    //     let s = 20;
    //     if (routeName === 'Home') {
    //       iconName = "ios-home";
    //       if(focused) {
    //         s = s + 12
    //       }
    //     } else if (routeName === 'WhatsHot') {
    //       iconName = "ios-flame";
    //       if(focused) {
    //         s = s + 12
    //       }
    //     } else if (routeName === 'Wallet') {
    //       iconName = "ios-wallet";
    //       if(focused) {
    //         s = s + 12
    //       }
    //     } else if (routeName === 'Shop') {
    //       iconName = "ios-cart";
    //       if(focused) {
    //         s = s + 12
    //       }
    //     }
    //     return <IconComponent name={iconName} size={s} color={tintColor} />;
    //   }
    // }),
    tabBarOptions: {
    //   showIcon: 'true',
      showLabel: true,
      activeTintColor: '#970044',
      inactiveTintColor: '#d0c7c9',
      labelStyle: {
        fontSize: 10
      },
      iconStyle: {
          fontSize: 12
      },
      tabStyle: {
        backgroundColor: "transparent"
      },
      style: {
        backgroundColor: "transparent",
      }
    },
  }
);



export default createAppContainer(Tabs);
