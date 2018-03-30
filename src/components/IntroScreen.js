import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

const soma_logo = require('../../assets/soma.png');

class IntroScreen extends Component {
	render(){
		return (

			<LinearGradient colors={['#7834a8', '#4c0844']} style={styles.backgroundStyle}>
				<View style={styles.logoContainer}>
	                <Image style={styles.imageLogo} source={soma_logo} />
	                <Text style={styles.textLogo}>SoMa </Text>
	            </View>
					<Card style={styles.backgroundStyle}>
						<CardSection>
							<Button onPress={Actions.createUser}>
								Create Account
							</Button>
						</CardSection>

						<CardSection>
							<Button onPress={Actions.loginUser}>
								Login
							</Button>
						</CardSection>
					</Card>
			</LinearGradient>
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
		backgroundColor: '#7834a8'
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
    }
};

const mapStateToProps = ({auth}) => {
	const {email, password, error, loading} = auth;

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