import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { sendInterest } from '../actions';

class ListItem extends Component {
	onPressShowInterest() {
		const { user, safeTrek, postType, postTitle, price, address, imageID } = this.props.post.item;
		this.props.sendInterest({ user, safeTrek, postType, postTitle, price, address, imageID })
	}

	render() {
		const { safeTrek, postType, postTitle, price, address, imageID } = this.props.post.item;

		return (
			<Card>
				<CardItem>
					<Left>
						<Body>
							<Text>{postTitle}</Text>
							<Text>{"$" + price}</Text>
						</Body>
					</Left>
				</CardItem>
				<CardItem cardBody>
					<Image source={{ uri: imageID }} style={{ height: 250, width: 250, flex: 1 }} />
				</CardItem>
				<CardItem>
					<Body>
						<Button onPress={() => this.onPressShowInterest()}>
							<Text>Show Interest</Text>
						</Button>
					</Body>
				</CardItem>
			</Card>

			/* <Card
			image={{ uri: imageID }}
			imageStyle={{
				position: 'absolute',
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
			  }}
			>
				<View style={styles.titleStyle}>
					<Text style={styles.titleTextStyle} >
						{postType}: {postTitle}
					</Text>
				</View>

				<View style={styles.titleStyle}>
					<Text style={styles.titleTextStyle}>
						Asking Price: {price}
					</Text>
				</View>

				<View style={styles.titleStyle}>
					<Text style={styles.titleTextStyle} >
						Preferred Meeting Point: {address}
					</Text>
				</View>

				<Button onPress={() => this.onPressShowInterest()}>
					Show Interest
					</Button>

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
})(ListItem);