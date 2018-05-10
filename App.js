import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './store';

import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import ListScreen from './screens/ListScreen';
import MapScreen from './screens/MapScreen';
import InterestsScreen from './screens/InterestsScreen';
import SettingsScreen from './screens/SettingsScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = createBottomTabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: createBottomTabNavigator({
          list: { screen: ListScreen },
          map: { screen: MapScreen },
          interests: { screen: InterestsScreen }
        })
      }
    }, {
        navigationOptions: { tabBarVisible: true },
        lazy: true
      });

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

