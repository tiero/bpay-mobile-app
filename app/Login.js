/*
 * @Author: tiero 
 * @Date: 2016-10-01 14:44:42 
 * @Last Modified by: tiero
 * @Last Modified time: 2016-10-01 14:49:02
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Dimensions,
  Image,
  Text,
  View
} from 'react-native'
import { Button } from 'react-native-elements'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('bPay/app/img/b-pay-home.jpg')}
          style={styles.bgImage} />
        <Text style={styles.welcome}>
          B-PAY
        </Text>
        <Text style={styles.instructions}>
          Pay fast
        </Text>
        <Button
          raised
          backgroundColor="blue"
          title='LOGIN' />
      </View>
    );
  }
}

const SCREEN_WIDTH = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightskyblue',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bgImage: {
    alignItems:'flex-start',
    height:400,
    width: SCREEN_WIDTH,
    marginBottom: 40,
  }
});