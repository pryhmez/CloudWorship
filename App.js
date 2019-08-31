import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createRootnavigator} from './App/config/router';
import {isSignedIn} from "./App/config/auth"

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      signedIn: false,
      checkedSignin: false
    }
  }

componentDidMount() {
  isSignedIn()
  .then(res => this.setState({signedIn: res, checkedSignin: true}))
  .catch(err => alert("sorry bro an error occured" +  String(err)))
}

  render() {
    const { checkedSignin, signedIn } = this.state;

    if (!checkedSignin) {
      return null;
    }
    
    const Layout = createAppContainer(createRootnavigator(signedIn));
    return (<Layout/>);
  }
}


