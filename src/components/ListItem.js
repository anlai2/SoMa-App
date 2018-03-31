import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
	render() {
		const { postTitle } = this.props.post.item;
		
		return (
			<CardSection>
				<Text style={styles.titleStyle} >
					{postTitle}
				</Text>
			</CardSection>
			);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

export default ListItem;