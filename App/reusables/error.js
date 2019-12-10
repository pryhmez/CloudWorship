import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
    ImageBackground,
  } from 'react-native';


const Error = (props) => {
    return (

        <Text style={styles.err}>{props.message + " !!"}</Text>
        
    )
}

const styles = StyleSheet.create({
    err: {
      color: "red",
      fontSize: 12,
      fontStyle: "italic",
      alignSelf: "flex-end",
      marginLeft: 50
    }
})

export default Error;