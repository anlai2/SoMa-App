import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card, Button } from './common';
import { sendTransaction } from '../actions';

class InterestListItem extends Component {
	onAcceptPress() {
		const { user, safeTrek, postType, postTitle, price, address, imageID } = this.props.post.item;
		this.props.sendTransaction({ user, safeTrek, postType, postTitle, price, address, imageID })
	}

	render() {
		const { user, safeTrek, postType, postTitle, price, address, imageID } = this.props.post.item;
		
		return (
			<Card>
				<CardSection>
					<View style={styles.titleStyle}>
						<Text style={styles.titleTextStyle} >
							{ user }
						</Text>
					</View>
				</CardSection>

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

				<CardSection>
					<View>
			          <Text style={styles.titleTextStyle} >
							Images: 
						</Text>
						<Image 
						source= {{ uri: imageID }}
						style={{ width: 250, height: 250 }}
					 	/>
					</View>
				</CardSection>

				<CardSection>
					<Button onPress={() => this.onAcceptPress()}>
						Accept
					</Button>
					<Button onPress={() => this.onDeclinePress()}>
						Decline
					</Button>
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

const mapStateToProps = (state) => {
	const { user, safeTrek, postType, postTitle, price, address, imageID } = state.posts;

	return { user, safeTrek, postType, postTitle, price, address, imageID }
}
export default connect(mapStateToProps, { 
	sendInterest
})(InterestListItem);