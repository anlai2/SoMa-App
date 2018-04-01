import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
	SAFETREK_UPDATE,
	SAFETREK_AUTH
	 } from './types';


export const safeTrekAuthUpdate = ({ prop, value }) => {
	return {
		type: SAFETREK_UPDATE,
		payload: { prop, value }
	};
};



export const safeTrekAuth = ({ safeTrek, stCode }) => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/safeTrekAuth`)
		.push({ safeTrek, stCode })
		.then(() => {
			dispatch({ type: SAFETREK_AUTH });
		Actions.main();
		})
		};
}

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