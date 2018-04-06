import React, { Component } from 'react';
import { LinearGradient, Constants, ImagePicker } from 'expo';
import { connect } from 'react-redux';
import { View, Text, Switch, Picker, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { postUpdate, postCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';
import uuid from 'uuid';

class PostCreate extends Component {
	state:{
		id: null
	}

	onCameraPress = async () => {
    let result = await ImagePicker.launchCameraAsync();

    if(!result.cancelled){
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

	    if(!result.cancelled){
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

	    this.setState({id: uuid.v4()});
	    var ref = firebase.storage().ref().child("images/" + this.state.id);
	    
	    this.props.postUpdate({ prop: 'imageID', value: this.state.id })
	    return ref.put(blob);
	}

  	downloadURL() {
	  	firebase.storage().ref().child("images/" + this.state.id).getDownloadURL()
	  	.then((url) => {
	  		this.props.postUpdate({ prop: 'imageID', value: url})
	  	})
	}

	onPostPress() {
		const { user, safeTrek, postType, postTitle, price, address, imageID } = this.props;
		const { currentUser } = firebase.auth();

		this.props.postCreate({ user: currentUser.uid, safeTrek: safeTrek || false, postType: postType || 'Buy', postTitle, price, address, imageID });
	}

	render(){
		return (
				<LinearGradient colors={['#009688', '#B2DFDB']} style={styles.backgroundStyle}>
					<KeyboardAwareScrollView
				      resetScrollToCoords={{ x: 0, y: 0 }}
				      contentContainerStyle={styles.container}
				      scrollEnabled={true}
				    >
						<Card style={{ 'height': 50000}}>
							<CardSection>
								<Text style={styles.switchTextStyle}>
									SafeTrek Users Only
								</Text>
								<Switch
									value={this.props.safeTrek} 
									onValueChange={bool => this.props.postUpdate({ prop: 'safeTrek', value: bool})}
								/>
							</CardSection>

							<CardSection>
								<Text style={styles.pickerTextStyle}>Buy/Sell</Text>
									<Picker
									style={{ flex: 1 }}
										selectedValue={this.props.postType} 
										onValueChange={value => this.props.postUpdate({ prop: 'postType', value })}
									>
										<Picker.Item label="Buying" value="Buying" />
										<Picker.Item label="Selling" value="Selling" />
									</Picker>
						</CardSection>

							<CardSection>
								<Input
									label="Post Title"
									placeholder="Post Title"
									value={this.props.postTitle}
									onChangeText={text => this.props.postUpdate({ prop: 'postTitle', value: text })}
								/>
							</CardSection>

							<CardSection>
								<Input
									label="Price"
									placeholder="$"
									value={this.props.price}
									onChangeText={text => this.props.postUpdate({ prop: 'price', value: text })}
								/>
							</CardSection>

							<CardSection>
								<Input
									label="Meeting Place"
									placeholder="Address"
									value={this.props.address}
									onChangeText={text => this.props.postUpdate({ prop: 'address', value: text })}
								/>
							</CardSection>

							<CardSection>
								<Button onPress={this.onChooseImagePress}>
						          Choose an Image...
						        </Button>
							</CardSection>

							<CardSection>
								<Button onPress={this.onCameraPress}>
						          Take a Photo
						        </Button>
							</CardSection>

							<CardSection>
								<Button onPress={Actions.mapScreen}>
										Pick Address on Map
								</Button>
							</CardSection>


							<CardSection>
								<Button onPress={this.onPostPress.bind(this)}>
									Post
								</Button>
							</CardSection>
						</Card>
					</KeyboardAwareScrollView>
				</LinearGradient>
		);
	}
}

const styles = {
	backgroundStyle: {
		flex: 1,
		backgroundColor: '#7834a8'
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
	}
};

const mapStateToProps = (state) => {
	const { user, safeTrek, postType, postTitle, price, address, imageID } = state.postForm;

	return { user, safeTrek, postType, postTitle, price, address, imageID }
}
export default connect(mapStateToProps, { 
	postUpdate, postCreate
})(PostCreate);