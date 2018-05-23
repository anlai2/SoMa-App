import React, { Component } from 'react';
import { ImagePicker } from 'expo';
import { connect } from 'react-redux';
import { View, Text, Switch, Picker } from 'react-native';
import { Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';
import uuid from 'uuid';
import { postUpdate, postCreate } from '../actions';
import { Input } from './common';

class PostCreate extends Component {
  constructor(props) {
    super(props);
    const id = null;

    this.state = { id };
  }

  onCameraPress = async () => {
    const result = await ImagePicker.launchCameraAsync();

    if (!result.cancelled) {
      this.uploadImage(result.uri)
        .then(() => {
          alert('Success');
          this.downloadURL();
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  onChooseImagePress = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      this.uploadImage(result.uri)
        .then(() => {
          alert('Success');
          this.downloadURL();
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  onUploadPress() {
    const { imageID } = this.props;

    this.props.post({ imageID });
  }

  onPostPress() {
    const {
      safeTrek,
      postType,
      postTitle,
      price,
      address,
      imageID,
    } = this.props;
    const { currentUser } = firebase.auth();

    this.props.postCreate({
      user: currentUser.uid,
      safeTrek: safeTrek || false,
      postType: postType || 'Buy',
      postTitle,
      price,
      address,
      imageID,
    });
  }

  uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    this.setState({ id: uuid.v4() });
    const ref = firebase
      .storage()
      .ref()
      .child(`images/${this.state.id}`);

    this.props.postUpdate({ prop: 'imageID', value: this.state.id });
    return ref.put(blob);
  };

  downloadURL() {
    firebase
      .storage()
      .ref()
      .child(`images/${this.state.id}`)
      .getDownloadURL()
      .then((url) => {
        this.props.postUpdate({ prop: 'imageID', value: url });
      });
  }

  render() {
    return (
      <View style={styles.backgroundStyle}>
        <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={styles.container}
          scrollEnabled
        >
          <View style={styles.cardSectionContainer}>
            <Button
              title="BUYING"
            />
            <Button
              title="SELLING"
            />
          </View>
          <View style={styles.cardSectionContainer}>
            <Input
              label="Post Title"
              placeholder="Post Title"
              value={this.props.postTitle}
              onChangeText={text =>
                this.props.postUpdate({ prop: 'postTitle', value: text })
              }
            />
          </View>

          <View style={styles.cardSectionContainer}>
            <Input
              label="Price"
              placeholder="$"
              value={this.props.price}
              onChangeText={text =>
                this.props.postUpdate({ prop: 'price', value: text })
              }
            />
          </View>

          <View style={styles.cardSectionContainer}>
            <Input
              label="Meeting"
              placeholder="Address"
              value={this.props.address}
              onChangeText={text =>
                this.props.postUpdate({ prop: 'address', value: text })
              }
            />
          </View>
          <View style={styles.cardSectionContainer}>
            <Text style={styles.switchTextStyle}>SafeTrek Users Only</Text>
            <Switch
              value={this.props.safeTrek}
              onValueChange={bool =>
                this.props.postUpdate({ prop: 'safeTrek', value: bool })
              }
            />
          </View>

          <View style={styles.cardSectionContainer}>
            <Text style={styles.pickerTextStyle}>Buy/Sell</Text>
            <Picker
              style={{ flex: 1 }}
              selectedValue={this.props.postType}
              onValueChange={value =>
                this.props.postUpdate({ prop: 'postType', value })
              }
            >
              <Picker.Item label="Buying" value="Buying" />
              <Picker.Item label="Selling" value="Selling" />
            </Picker>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this.onChooseImagePress}
              title="Choose an Image..."
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              onPress={this.onCameraPress}
              title="Take a Picture"
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              onPress={Actions.mapScreen}
              title="Choose a Safe Meeting Point"
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              onPress={() => this.onPostPress()}
              title="Post"
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = {
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  switchTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 5,
    flex: 1,
    alignItems: 'center',
  },
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
  cardSectionContainer: {
    flex: 1,
    borderRadius: 25,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 10,
  },
  buttonContainer: {
    paddingBottom: 10,
    padding: 10,
  },
};

const mapStateToProps = (state) => {
  const {
    user,
    safeTrek,
    postType,
    postTitle,
    price,
    address,
    imageID,
  } = state.postForm;

  return {
    user,
    safeTrek,
    postType,
    postTitle,
    price,
    address,
    imageID,
  };
};
export default connect(mapStateToProps, {
  postUpdate,
  postCreate,
})(PostCreate);
