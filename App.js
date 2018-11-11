
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Main from './src/components/main/main';
import SplashScreen from 'react-native-splash-screen';

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    SplashScreen.hide();
  }
  
  render() {
    return (
      <Main />
    );
  }
}

