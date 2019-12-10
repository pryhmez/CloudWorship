
import React, { Component } from 'react';
import Ionicon from "react-native-vector-icons/Ionicons";
const Img = require('../../assets/footer.png');
const Imgg = require('../../assets/Group.png');
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
   Image,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';

class CardComponent extends Component {

  render() {
    // console.warn(Img)
    return (
      <View style={styles.container}>
        {/* <View styles={styles.detailsHolder}></View> */}
        <View style={styles.imageHolder}>
          <Image source={{ uri: this.props.imageURI }} style={{ flex: 1, borderBottomLeftRadius: 18, borderTopLeftRadius: 18 }} />
          <Image source={require('../../assets/play.png')} style={{ alignSelf: 'center', width: 40, height: 40 , position: "absolute", marginTop: 50}} />
        </View>
        <View style={styles.detailsHolder}>
          <View style={{ flex: 1, justifyContent: "space-around", flexDirection: "row" }} >
            <TouchableOpacity style={{ flex: 1 }}>
              <Image source={{ uri: this.props.imageURL }} style={styles.profileImg} />
            </TouchableOpacity>
            <View style={{ alignSelf: "center" }}>
              <Text style={{ color: "#ba4900", fontWeight: "bold" }}>{this.props.name}</Text>
              <Text style={{ fontSize: 12, color: "#ba4900" }}>No 42 Island Road</Text>
            </View>
          </View>
          <View style={{ flex: 1, alignContent: "center", justifyContent: "space-evenly" }} >
            {/* <Ionicon name="ios-heart-empty" Size={100}></Ionicon> */}
            <Ionicon name="ios-heart-empty" color='#fd9451' size={20} style={{ padding: 7 }} />
          </View>
          <View style={styles.titleViewHolder} >
            <Text style={styles.title} >Principles Of Faith</Text>
          </View>
        </View>
      </View>
    );
  }
};

export default class Video extends Component {

  constructor() {
    super();
    this.state = { imagesData: null, loading: true, gridView: true, btnText: 'Show List', search: "" }
  }

  componentDidMount() {
    // fetch(' http://cloudworship.com/api/v1/channels?limit=10')
    fetch("http://cloudworship.com/api/v1/channels")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ imagesData: responseJson.channels.data, loading: false });
        console.warn(responseJson.channels.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  selectItem = data => {
    data.item.isSelect = !data.item.isSelect;
    data.item.selectedClass = data.item.isSelect ? styles.selected : styles.list;

    const index = this.state.imagesData.findIndex(
      item => data.item.id === item.id
    );

    this.state.imagesData[index] = data.item;

    this.setState({
      dataSource: this.state.imagesData,
    });
  };

  changeView = () => {
    // this.setState({ gridView: !this.state.gridView }, () => {
    this.setState({ gridView: true }, () => {
      if (this.state.gridView) {
        this.setState({ btnText: 'Show List' });
      }
      else {
        this.setState({ btnText: 'Show Grid' });
      }
    });
  }

  render() {
    return (
      <View style={styles.container} >
        {
          (this.state.loading)
            ?
            (<View style={styles.loadingContainer}>
              <ActivityIndicator size="large" />
              <Text style={styles.loadingText}>Please Wait...</Text>
            </View>)
            :
            (<View style={{ flex: 1 }}>

              {/* <TouchableOpacity activeOpacity={0.8} style={styles.buttonDesign} onPress={this.changeView}>
                <TextInput style={{padding: 20, borderRadius: 10, height : 30, width: "100%"}}/>
              </TouchableOpacity> */}

              {/* <View style={styles.searchBar}>
                <TextInput
                  placeholder="   Search Here..."
                  // onChangeText={this.updateSearch}
                  // value={search}
                  style={{ borderRadius: 20, marginTop: 10, marginLeft: 10, marginBottom: 10, flex: 4, marginRight: 25, height: 45, borderWidth: 2, borderColor: '#FD9451' }}
                />

                <TouchableOpacity
                  style={styles.nextBtn}
                  onPress={() => this.props.navigation.navigate("Home")} >
                  <Text style={{ color: 'white', fontSize: 17 }}>Next</Text>
                </TouchableOpacity>
              </View> */}

              <FlatList keyExtractor={(item) => item.id}
                key={(this.state.gridView) ? 1 : 0}
                numColumns={this.state.gridView ? 1 : 1}
                data={this.state.imagesData}
                renderItem={({ item }) =>
                  (item.channel_image)
                    ?
                    <CardComponent data={item} imageURI={item.channel_image} imageURL={item.channel_image} name={item.channel_name} />
                    :
                    <CardComponent data={item} imageURI={"https://res.cloudinary.com/sentinelprime/image/upload/v1568022290/2-79-512_fhsk5w.png"} imageURL={"https://res.cloudinary.com/sentinelprime/image/upload/v1568022290/2-79-512_fhsk5w.png"} name={item.channel_name} />
                }
                keyExtractor={item => item._id} />

            </View>)
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: "row",
    width: "98%",
    height: 150,
    justifyContent: "space-between",
    borderRadius: 18,
    elevation: 20,
    // backgroundColor: "yellow",
    margin: 16,
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center"
  },
  detailsHolder: {
    flex: 1,
    // backgroundColor: "blue",
    borderBottomRightRadius: 18,
    borderTopRightRadius: 18
  },
  imageHolder: {
    flex: 1,
    backgroundColor: "red",
    borderBottomLeftRadius: 18,
    borderTopLeftRadius: 18
  },
  titleViewHolder: {
    flex: 1,
    // backgroundColor: "green", 
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ba4900"
  },
  profileImg: {
    width: 33,
    height: 35,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 7,
    flex: 1
  },
  loadingContainer: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    marginLeft: 150
  }

});

// export default Video;
