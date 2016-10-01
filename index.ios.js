/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  Navigator
} from 'react-native'
//Components
import Login from './app/Login'


class bPay extends Component {

  renderScene(route, navigator) {
    switch (route.title) {
      case 'login':
        return <Login navigator={navigator} {...route.passProps} />
      case 'camera':
        return <Camera navigator={navigator} {...route.passProps} />
      case 'cart':
        return <Cart navigator={navigator} context={'search'}/>
      case 'qrcode':
        return <Qrcode navigator={navigator} {...route.passProps} />
      case 'products':
        return <Products navigator={navigator} {...route.passProps} />
      default:
        return null
    }
  }

  render() {
   return  <Navigator
        initialRoute={{ title: 'login'}}
        renderScene={this.renderScene}
      />
  }
}


AppRegistry.registerComponent('bPay', () => bPay);
