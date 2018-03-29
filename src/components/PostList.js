import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo';

class PostList extends Component {
	render() {
		return (
			<LinearGradient colors={['#7834a8', '#4c0844']} style={styles.backgroundStyle}>
				<View>
					<Text> Post List</Text>
					<Text> Post List</Text>
					<Text> Post List</Text>
					<Text> Post List</Text>
					<Text> Post List</Text>
				</View>
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
export default PostList;