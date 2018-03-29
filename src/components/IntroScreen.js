import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text){
		this.props.passwordChanged(text);
	}

	onButtonPress(){
		const { email, password } = this.props;

		this.props.loginUser({ email, password });
	}

	renderError() {
		if (this.props.error) {
			return (
				<View style={{ backgroundColor: 'white'}}>
				<Text style={styles.errorTextStyle}>
				{this.props.error}
				</Text>
				</View>
				);
		}
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		}

		return (
			<Button onPress={Actions.login}>
			Login
			</Button>
			);
	}

	render(){
		return (
			<LinearGradient colors={['#7834a8', '#4c0844']} style={styles.backgroundStyle}>
				<Card>
					<CardSection>
						<Button onPress={Actions.createuser}>
							Create Account
						</Button>
					</CardSection>

					<CardSection>
						<Button onPress={Actions.loginuser}>
							Login
						</Button>
					</CardSection>

					{this.renderError()}
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
})(LoginForm);