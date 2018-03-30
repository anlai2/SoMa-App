import React, { Component } from 'react';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { postUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class PostCreate extends Component {
	render(){
		return (
			<LinearGradient colors={['#7834a8', '#4c0844']} style={styles.backgroundStyle}>
				<Card>
					<CardSection>
						<Input
							label="Post Title"
							placeholder="Post Title"
							value={this.props.postTitle}
							onChangeText={value => this.props.postUpdate({ prop: 'postTitle', value: text })}
						/>
					</CardSection>

					<CardSection>
						<Input
							label="Price"
							placeholder="$"
							value={this.props.price}
							onChangeText={value => this.props.postUpdate({ prop: 'price', value: text })}
						/>
					</CardSection>

					<CardSection>
						<Button>
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
	const { postTitle, price } = state.postForm;

	return { postTitle, price }
}
export default connect(mapStateToProps, { postUpdate })(PostCreate);