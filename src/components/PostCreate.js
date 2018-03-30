import React, { Component } from 'react';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { postUpdate, postCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';
import { Actions } from 'react-native-router-flux';

class PostCreate extends Component {
	onPostPress() {
		const { postTitle, price, address } = this.props;

		this.props.postCreate({ postTitle, price, address });
	}
	render(){
		return (
			<LinearGradient colors={['#7834a8', '#4c0844']} style={styles.backgroundStyle}>
				<Card>
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
			</LinearGradient>
		);
	}
}

const styles = {
	backgroundStyle: {
		flex: 1,
		backgroundColor: '#7834a8'
	}
};

const mapStateToProps = (state) => {
	const { postTitle, price, address } = state.postForm;

	return { postTitle, price, address }
}
export default connect(mapStateToProps, { 
	postUpdate, postCreate 
})(PostCreate);