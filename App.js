import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';

import WelcomeScreen from './screens/WelcomeScreen';
import CreateAuthScreen from './screens/CreateAuthScreen';
import LoginAuthScreen from './screens/LoginAuthScreen';
import ListScreen from './screens/ListScreen';
import MapScreen from './screens/MapScreen';
import InterestsScreen from './screens/InterestsScreen';
import SettingsScreen from './screens/SettingsScreen';

export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDOE4qHaObgbGg5fDGAiKb7Opv7ClTD4nw",
      authDomain: "soma-b8c6f.firebaseapp.com",
      databaseURL: "https://soma-b8c6f.firebaseio.com",
      projectId: "soma-b8c6f",
      storageBucket: "soma-b8c6f.appspot.com",
      messagingSenderId: "381413117221"
    };
    firebase.initializeApp(config);
  }

  render() {
    const MainNavigator = createBottomTabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: {
        screen: createBottomTabNavigator({
          create: { screen: CreateAuthScreen },
          login: { screen: LoginAuthScreen }
        })
      },
      main: {
        screen: createBottomTabNavigator({
          list: { screen: ListScreen },
          map: { screen: MapScreen },
          interests: { screen: InterestsScreen }
        })
      }
    }, {
        navigationOptions: { tabBarVisible: false },
        lazy: true
      });

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

