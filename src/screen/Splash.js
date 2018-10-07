import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Splash extends Component{

  constructor(props) {
    super(props);
    // Actions.GenerateOtp();
  }

  componentDidUnMount(){
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>MaidInCity</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
