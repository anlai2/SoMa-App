import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Spinner } from './common';

const soma_logo = require('../../assets/soma1.gif');

class IntroScreen extends Component {
	render() {
		return (

			<View style={styles.backgroundStyle}>
				<View style={styles.logoContainer}>
					<Image style={styles.imageLogo} source={soma_logo} />
					<Text style={styles.textLogo}>SoMa </Text>
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						onPress={Actions.createUser}
					>
						<Text style={styles.button}> Sign Up </Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={Actions.loginUser}
					>
						<Text style={styles.button}> Login </Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	},
	backgroundStyle: {
		flex: 1,
		backgroundColor: '#1573E5'
	},
	logoContainer: {
		flex: 1,
		paddingLeft: 50,
		paddingRight: 50,
		alignItems: 'center',
		justifyContent: 'center'
	},
	imageLogo: {
		height: 150,
		width: 150
	},
	textLogo: {
		marginTop: 30,
		color: 'white',
		fontWeight: "700",
		fontSize: 40
	},
	buttonContainer: {
		flexDirection: 'row',
		height: 60,
		width: '100%',
		justifyContent: 'space-around',
		padding: 15,
		backgroundColor: '#1537e5',
	},
	button: {
		fontSize: 20,
		color: 'white',
	}
};

const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading } = auth;

	return {
		email,
		password,
		error,
		loading
	};
};
export default connect(mapStateToProps, {
	emailChanged, passwordChanged, loginUser
})(IntroScreen);