import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
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
			<Button 
			style={styles.loginButtonStyle}
			onPress={this.onButtonPress.bind(this)}
			>
				Login
			</Button>
		);
	}

	render(){
		return (
			<LinearGradient colors={['#009688', '#B2DFDB']} style={styles.backgroundStyle}>
				<Card>
					<CardSection>
						<Input 
							label="Email"
							placeholder="example@email.com"
							onChangeText={this.onEmailChange.bind(this)}
							value={this.props.email}
						/>
					</CardSection>
					<CardSection>
						<Input
							secureTextEntry
							label="Password"
							placeholder="password"
							onChangeText={this.onPasswordChange.bind(this)}
							value={this.props.password}
						/>
					</CardSection>

					{this.renderError()}

					<CardSection>
						{this.renderButton()}
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
		backgroundColor: '#009688'
	},
	loginButtonStyle: {
		height: 40
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