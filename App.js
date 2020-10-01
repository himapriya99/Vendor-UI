import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';

import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import Home from './components/Home';
import ForgotPasswordScreen from './components/ForgotPasswordScreen';
import List from './components/List';
import Addmenu from './components/Addmenu';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  // Vendor: {
  //   screen: LoginScreen,
  // },
 
  // Signup: {
  //    screen: RegisterScreen
  // },
  // Home: {
  //   screen: Home
  // },
  // Addmenu: {
  //   screen: Addmenu
  // }
LoginScreen,
RegisterScreen,
ForgotPasswordScreen,
Home,
List,
Addmenu,

 },
{
  initialRouteParams: 'Home',

  headerMode: 'none',
}
);

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
