import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Card, CardSection, Button} from './common';

const PostDetail = ({ albumProp }) => {
	//Destructure references for nicer code
	const { title, artist, thumbnail_image, image, url } = albumProp;
	const { thumbnailStyle, 
		headerContentStyle, 
		thumbnailContainerStyle,
		headerTextStyle,
		imageStyle } = styles;

	return (
		<Card>
			<CardSection>
			<View style ={thumbnailContainerStyle}>
				<Image 
				style={thumbnailStyle}
				source={{ uri: thumbnail_image}}
				/>
			</View>
			<View style={headerContentStyle}>
				<Text style={headerTextStyle}>{title}</Text>
				<Text>{artist}</Text>
			</View>
			</CardSection>

			<CardSection>
				<Image 
				style={imageStyle}
				source={{ uri: image}} />
			</CardSection>

			<CardSection>
				<Button onPress={() => Linking.openURL(url)}>
					Buy Now
				</Button>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 1, //Tells content to expand as much of the container as possible
		width: null
	}
};
export default PostDetail;