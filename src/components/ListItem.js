import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection, Card } from './common';

class ListItem extends Component {
	render() {
		const { safeTrek, postType, postTitle, price, address } = this.props.post.item;
		
		return (
			<Card>
				<CardSection>
					<View style={styles.titleStyle}>
						<Text style={styles.titleTextStyle} >
							{postType}: {postTitle}
						</Text>
					</View>
				</CardSection>

				<CardSection>
					<View style={styles.titleStyle}>
						<Text style={styles.titleTextStyle}>
							Asking Price: {price}
						</Text>
					</View>
				</CardSection>

				<CardSection>
					<View style={styles.titleStyle}>
						<Text style={styles.titleTextStyle} >
							Preferred Meeting Point: {address}
						</Text>
					</View>
				</CardSection>
			</Card>
			);
	}
}

const styles = {
	titleStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	titleTextStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

export default ListItem;