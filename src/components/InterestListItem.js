import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { declineInterest, acceptInterest } from '../actions';

class InterestListItem extends Component {
	onAcceptPress() {
		const { user, safeTrek, postType, postTitle, price, address, imageID } = this.props.post.item;
		this.props.acceptInterest({ user, safeTrek, postType, postTitle, price, address, imageID })
		this.props.declineInterest();
	}

	onDeclinePress() {
		this.props.declineInterest();
	}
	render() {
		const { user, safeTrek, postType, postTitle, price, address, imageID } = this.props.post.item;

		return (
			<Card>
				<CardItem>
					<Left>
						<Body>
							<Text style={styles.titleTextStyle}>{user}</Text>
							<Text style={styles.titleTextStyle}>{postTitle}</Text>
							<Text>{"$" + price}</Text>
						</Body>
					</Left>
				</CardItem>
				<CardItem cardBody>
					<Image source={{ uri: imageID }} style={{ height: 250, width: 250, flex: 1 }} />
				</CardItem>
				<CardItem>
					<Left>
						<Button
							success
							onPress={() => this.onAcceptPress()}
						>
							<Text>Accept</Text>
						</Button>
					</Left>
					<Body>
						<Button
							danger
							onPress={() => this.onDeclinePress()}
						>
							<Text>Decline</Text>
						</Button>
					</Body>
				</CardItem>
			</Card>

			/* <Card>
				<CardSection>
					<View style={styles.titleStyle}>
						<Text style={styles.titleTextStyle} >
							User: {user}
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
							source={{ uri: imageID }}
							style={{ width: 250, height: 250 }}
						/>
					</View>
				</CardSection>

				<CardSection>
					<Button onPress={() => this.onAcceptPress()}>
						Accept
					</Button>
				</CardSection>

				<CardSection>
					<Button onPress={() => this.onDeclinePress()}>
						Decline
					</Button>
				</CardSection>
			</Card> */
		);
	}
}

const styles = {
	titleStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	titleTextStyle: {
		fontSize: 24
	}
};

const mapStateToProps = (state) => {
	const { user, safeTrek, postType, postTitle, price, address, imageID } = state.posts;

	return { user, safeTrek, postType, postTitle, price, address, imageID }
}
export default connect(mapStateToProps, {
	declineInterest, acceptInterest
})(InterestListItem);