
import React, {Component} from 'react';
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

class Dashboard extends Component {

  render() {
    // console.warn(Img)
    return (
        <View style={styles.container}>
        <Text>hi from Dashboard1</Text>
        <Text>hi from Dashboard2</Text>

        </View>
      );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  },
  
});

export default Dashboard;
