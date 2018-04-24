import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
	SAFETREK_UPDATE,
	SAFETREK_AUTH
	 } from './types';


export const safeTrekAuth = ({ safeTrek, stCode, accessToken, refreshToken }) => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/safeTrekAuth`)
		.push({ safeTrek, stCode, accessToken, refreshToken })
		.then(() => {
			dispatch({ type: SAFETREK_AUTH });
		})
		};
}

export const safeTrekAuthUpdate = ({ prop, value }) => {
	return {
		type: SAFETREK_UPDATE,
		payload: { prop, value }
	};
	//return (dispatch, getState) => {
	//	dispatch(safeTrekAuthUpdateInternal({ prop, value }));
		//const { safeTrek, stCode, accessToken } = this.props;
    	//this.props.safeTrekAuth({ safeTrek: true, stCode, accessToken });
	//};
};

export const safeTrekCheck = () => {
	const { currentUser } = firebase.auth();
	return (dispatch) => {
	firebase.database().ref(`/users/${currentUser.uid}/safeTrekAuth`)
		.on('value', snapshot => {
		if(snapshot.val() === null){
			Actions.stAuth();
		}
		else{
			Actions.main();
		}
		});
}
}