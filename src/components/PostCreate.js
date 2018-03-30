import React, { Component } from 'react';
import { LinearGradient } from 'expo';
import { View, Text } from 'react-native';
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
						/>
					</CardSection>

					<CardSection>
						<Input
							label="Price"
							placeholder="$"
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
export default PostCreate;