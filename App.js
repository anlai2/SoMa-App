import React from 'react';
import { AppRegistry, View } from 'react-native';
import { Header } from './src/components/common';
import PostList from './src/components/PostList';

//Create a component
const App = () => (
  <View style={{ flex: 1 }}>
  <Header headerText={'SoMa'}/>
  <PostList />
  </View>
);

AppRegistry.registerComponent('posts', () => App);

export default App;