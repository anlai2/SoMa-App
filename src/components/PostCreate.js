import React, { Component } from 'react';
import { LinearGradient, Constants, ImagePicker } from 'expo';
import { connect } from 'react-redux';
import { View, Text, Switch, Picker, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { postUpdate, postCreate } from '../actions';
import { Card, Input, Button } from './common';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';
import uuid from 'uuid';

class PostCreate extends Component {
	constructor(props) {
		super(props);
		const id = null;

		this.state = { id };
	}

	onCameraPress = async () => {
		let result = await ImagePicker.launchCameraAsync();

		if (!result.cancelled) {
			this.uploadImage(result.uri)
				.then(() => {
					alert("Success");
					this.downloadURL()
				})
				.catch((error) => {
					alert(error);
				});
		}
	}

	onChooseImagePress = async () => {
		let result = await ImagePicker.launchImageLibraryAsync();

		if (!result.cancelled) {
			this.uploadImage(result.uri)
				.then(() => {
					alert("Success");
					this.downloadURL()
				})
				.catch((error) => {
					alert(error);
				});
		}
	}

	onUploadPress() {
		const { imageID } = this.props;

		this.props.post({ imageID });
	}

	uploadImage = async (uri) => {
		const response = await fetch(uri);
		const blob = await response.blob();

		this.setState({ id: uuid.v4() });
		var ref = firebase.storage().ref().child("images/" + this.state.id);

		this.props.postUpdate({ prop: 'imageID', value: this.state.id })
		return ref.put(blob);
	}

	downloadURL() {
		firebase.storage().ref().child("images/" + this.state.id).getDownloadURL()
			.then((url) => {
				this.props.postUpdate({ prop: 'imageID', value: url })
			})
	}

	onPostPress() {
		const { user, safeTrek, postType, postTitle, price, address, imageID } = this.props;
		const { currentUser } = firebase.auth();

		this.props.postCreate({ user: currentUser.uid, safeTrek: safeTrek || false, postType: postType || 'Buy', postTitle, price, address, imageID });
	}

	render() {
		return (
			<View style={styles.backgroundStyle}>
				<KeyboardAwareScrollView
					resetScrollToCoords={{ x: 0, y: 0 }}
					contentContainerStyle={styles.container}
					scrollEnabled={true}
				>
					<View style={styles.cardsectionContainer}>
						<Text style={styles.switchTextStyle}>
							SafeTrek Users Only
								</Text>
						<Switch
							value={this.props.safeTrek}
							onValueChange={bool => this.props.postUpdate({ prop: 'safeTrek', value: bool })}
						/>
					</View>

					<View style={styles.cardsectionContainer}>
						<Text style={styles.pickerTextStyle}>Buy/Sell</Text>
						<Picker
							style={{ flex: 1 }}
							selectedValue={this.props.postType}
							onValueChange={value => this.props.postUpdate({ prop: 'postType', value })}
						>
							<Picker.Item label="Buying" value="Buying" />
							<Picker.Item label="Selling" value="Selling" />
						</Picker>
					</View>

					<View style={styles.cardsectionContainer}>
						<Input
							label="Post Title"
							placeholder="Post Title"
							value={this.props.postTitle}
							onChangeText={text => this.props.postUpdate({ prop: 'postTitle', value: text })}
						/>
					</View>

					<View style={styles.cardsectionContainer}>
						<Input
							label="Price"
							placeholder="$"
							value={this.props.price}
							onChangeText={text => this.props.postUpdate({ prop: 'price', value: text })}
						/>
					</View>

					<View style={styles.cardsectionContainer}>
						<Input
							label="Meeting"
							placeholder="Address"
							value={this.props.address}
							onChangeText={text => this.props.postUpdate({ prop: 'address', value: text })}
						/>
					</View>

					<View style={styles.buttonContainer}>
						<Button onPress={this.onChooseImagePress}>
							Choose an Image...
						</Button>
					</View>

					<View style={styles.buttonContainer}>
						<Button onPress={this.onCameraPress}>
							Take a Photo
						</Button>
					</View>

					<View style={styles.buttonContainer}>
						<Button onPress={Actions.mapScreen}>
							Pick Address on Map
								</Button>
					</View>


					<View style={styles.buttonContainer}>
						<Button onPress={this.onPostPress.bind(this)}>
							Post
								</Button>
					</View>
				</KeyboardAwareScrollView>
			</View>
		);
	}
}

const styles = {
	backgroundStyle: {
		flex: 1
	},
	switchTextStyle: {
		fontSize: 18,
		paddingLeft: 20,
		paddingTop: 5,
		flex: 1,
		alignItems: 'center'
	},
	pickerTextStyle: {
		fontSize: 18,
		paddingLeft: 20
	},
	cardsectionContainer: {
		flex: 1,
		borderRadius: 25,
		backgroundColor: "#1573E5",
		justifyContent: 'flex-start',
		flexDirection: 'row',
		padding: 10
	},
	buttonContainer: {
		paddingBottom: 10,
		padding: 10
	},
};

const mapStateToProps = (state) => {
	const { user, safeTrek, postType, postTitle, price, address, imageID } = state.postForm;

	return { user, safeTrek, postType, postTitle, price, address, imageID }
}
export default connect(mapStateToProps, {
	postUpdate, postCreate
})(PostCreate);