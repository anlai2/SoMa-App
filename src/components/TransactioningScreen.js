import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo';
import { emailChanged, passwordChanged, createUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';
import ApiUtils from './ApiUtils';

class CreateForm extends Component {
	createAlarm(){
		fetch('https://api-sandbox.safetrek.io/v1')
		  method: 'POST',
		  headers: {
		    'Authorization': 'JPobwWmqpxMG34zz',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
		    firstParam: 'yourValue',
		    secondParam: 'yourOtherValue',
		  }),
});
	}
	render(){
		return (
			<LinearGradient colors={['#009688', '#B2DFDB']} style={styles.backgroundStyle}>
				<Card>
					<CardSection>
						<Button>
							Panic
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
		backgroundColor: '#009688'
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
	emailChanged, passwordChanged, createUser 
})(CreateForm);