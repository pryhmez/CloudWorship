
import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
// import React-Native, from 'reactnative';
import Landing from './App/components/Landing';
import Login from './App/components/Login';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  // constructor(props) {
  //   super(props);
  
  //   this.state = { isLoading: true }
  // }
  
  render() {
    // setTimeout(() => {
    //   this.setstate ={isLoading: false} 
    // }, 1000);
    // const {isLoading} = this.state
  return(
    <View style={{flex: 1}}>
      {/* <Text>Hello</Text>
    isLoading ? <Login/> : <Landing/> */}
    <Landing/>
    </View>
  )
 

  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  }
});

export default App;
