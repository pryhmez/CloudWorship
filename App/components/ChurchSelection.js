import React, { Component } from 'react';
import { AppRegistry, TouchableOpacity, Image, FlatList, ActivityIndicator, StyleSheet, View, Platform, Text } from 'react-native';
import Ionicon from "react-native-vector-icons/Ionicons"
import { } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
import { SearchBar, CheckBox } from 'react-native-elements';

class ImageComponent extends Component {

  constructor() {
    super();
    this.state = {
      checked: false
    }
  }
  render() {
    return (
      <TouchableOpacity style={styles.imageHolder} onPress={() => { this.selectItem(this.props.data) }}>
        <Image source={{ uri: this.props.imageURI }} style={styles.image} />
        <TouchableOpacity style={{ position: 'absolute', paddingTop: 10 }} onPress={() => alert("na me be boss")}>
          <Image source={{ uri: this.props.imageURL }} style={{ resizeMode: 'cover', height: 30, width: 30 }} />
        </TouchableOpacity>
        <View style={{ position: 'absolute', alignSelf: "flex-end", paddingLeft: 10, height: "50%", borderRadius: 20, paddingBottom: 35, justifyContent: 'flex-end' }}>
          <CheckBox style={{ resizeMode: 'cover', height: 30, width: 30 }}
            checkedIcon={<Ionicon name='ios-checkbox-outline' color='#fd9443' size={30} />}
            uncheckedIcon={<Ionicon name='ios-square-outline' color='#fd9443' size={30} />}
            onPress={() => { this.setState({ checked: !this.state.checked }) }}
            value={true}
            checked={this.state.checked}
          />
        </View>
        <View style={styles.textViewHolder}>
          <Text numberOfLines={1} style={styles.textOnImage}>
            {this.props.name}
            {/* {console.warn(this.props.data)} */}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class ChurchSelection extends Component {

  constructor(props) {
    super(props);
    this.checkedBoxes = this.checkedBoxes.bind(this);
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

  checkedBoxes = (myComponenet) => {
    console.warn(myComponenet + "")
  }

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

              <View style={styles.searchBar}>
                <TextInput
                  placeholder="   Search Here..."
                  // onChangeText={this.updateSearch}
                  // value={search}
                  style={{ borderRadius: 20, marginTop: 10, marginLeft: 10, marginBottom: 10, flex: 4, marginRight: 25, height: 38, borderWidth: 0.5, borderColor: '#FD9451' }}
                />

                <TouchableOpacity
                  style={styles.nextBtn}
                  onPress={() => this.props.navigation.navigate("Home")} >
                  <Text style={{ color: 'white', fontSize: 17 }}>Next</Text>
                </TouchableOpacity>
              </View>

              <FlatList keyExtractor={(item) => item.id}
                key={(this.state.gridView) ? 1 : 0}
                numColumns={this.state.gridView ? 2 : 1}
                data={this.state.imagesData}
                renderItem={({ item }) =>
                  (item.channel_image)
                    ?
                    <ImageComponent data={item} imageURI={item.channel_image} imageURL={item.channel_image} name={item.channel_name} checkedBoxes={this.checkedBoxes} />
                    :
                    <ImageComponent data={item} imageURI={"https://res.cloudinary.com/sentinelprime/image/upload/v1568022290/2-79-512_fhsk5w.png"} imageURL={"https://res.cloudinary.com/sentinelprime/image/upload/v1568022290/2-79-512_fhsk5w.png"} name={item.channel_name} checkedBoxes={this.checkedBoxes} />
                }
                keyExtractor={item => item._id} />

            </View>)
        }
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
    },
    imageHolder: {
      margin: 5,
      height: 160,
      flex: 1,
      position: 'relative'
    },
    image: {
      height: '100%',
      width: '100%',
      resizeMode: 'cover'
    },
    textViewHolder: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.75)',
      paddingHorizontal: 10,
      paddingVertical: 13,
      alignItems: 'center'
    },
    textOnImage: {
      color: 'white'
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    loadingText: {
      paddingTop: 10,
      fontSize: 18,
      color: 'black'
    },
    buttonDesign: {
      padding: 5,
      backgroundColor: '#e91e63'
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      alignSelf: 'stretch'
    },
    searchBar: {
      width: '100%',
      flexDirection: 'row',
      // backgroundColor: 'red',
      marginTop: 12
    },
    nextBtn: {
      flex: 1,
      backgroundColor: '#FD9451',
      marginRight: 20,
      justifyContent: 'center',
      width: 80,
      height: 38,
      alignItems: 'center',
      margin: 8,
      borderRadius: 8
    }
  });