import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Welcome to Listy!</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>by BlackGlod Labs</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: '#008000',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    titleWrapper: {
      flex:1,
      justifyContent: 'center'
    },
    title: {
      color: 'white',
      fontSize: 35,
      fontWeight: 'bold'
    },
    subtitle: {
      color: 'white',
      fontWeight: '200',
      paddingBottom: 20
    }
})


