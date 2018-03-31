import React, { Component } from 'react';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';
import { View, Text, Switch, Picker, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { postUpdate, postCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';
import { Actions } from 'react-native-router-flux';

class PostCreate extends Component {
	onPostPress() {
		const { safeTrek, postType, postTitle, price, address } = this.props;

		this.props.postCreate({ safeTrek: safeTrek || false, postType: postType || 'Buy', postTitle, price, address });
	}

	render(){
		return (
				<LinearGradient colors={['#7834a8', '#4c0844']} style={styles.backgroundStyle}>
					<KeyboardAwareScrollView
				      resetScrollToCoords={{ x: 0, y: 0 }}
				      contentContainerStyle={styles.container}
				      scrollEnabled={false}
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

							<CardSection style={{ flexDirection: 'column' }}>
								<Text style={styles.pickerTextStyle}>Buy/Sell</Text>
									<Picker
									style={{ flex: 1 }}
										selectedValue={this.props.postType} 
										onValueChange={value => this.props.postUpdate({ prop: 'postType', value })}
									>
										<Picker.Item label="Buy" value="Buy" />
										<Picker.Item label="Sell" value="Sell" />
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
	const { safeTrek, postType, postTitle, price, address } = state.postForm;

	return { safeTrek, postType, postTitle, price, address }
}
export default connect(mapStateToProps, { 
	postUpdate, postCreate
})(PostCreate);