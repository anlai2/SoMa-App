import React from 'react';
import {
  ActivityIndicator,
  Button,
  Clipboard,
  Image,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Constants, ImagePicker } from 'expo';
import uuid from 'uuid';
import * as firebase from 'firebase';

export default class App extends React.Component {

  onChooseImagePress = async () => {
    let result = await ImagePicker.launchCameraAsync();
    //let result = await ImagePicker.launchImageLibraryAsync();

    if(!result.cancelled){
      this.uploadImage(result.uri, "test-image")
        .then(() => {
          alert("Success");
        })
        .catch((error) => {
          alert(error);
        });
    }
  }

  uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = firebase.storage().ref().child("images/" + imageName);
    return ref.put(blob);
  }

  render() {
    return(
    <View style={styles.container}>
      <Button title="Choose image..." onPress={this.onChooseImagePress} />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center"
  }
});