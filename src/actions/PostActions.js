import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
	POST_UPDATE,
	POST_CREATE,
	SEARCH_CREATE,
	SEARCH_STORE,
	FETCH_LOCATION,
	MEETING_FETCH_SUCCESS
} from './types';

export const postUpdate = ({ prop, value }) => {
	return {
		type: POST_UPDATE,
		payload: { prop, value }
	};
};

export const postCreate = ({ safeTrek, postTitle, price, address }) => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
	firebase.database().ref(`/users/${currentUser.uid}/posts`)
		.push({ postTitle, price, address })
		.then(() => {
			dispatch({ type: POST_CREATE });
			Actions.pop()
		});
	};
};

export const searchCreate = ({ latitude, longitude }) => {
	return {
		type: SEARCH_CREATE,
		payload: { latitude, longitude }

	};
};

export const searchStore =({ latitude, latitudeDelta, longitude, longitudeDelta }) => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
	firebase.database().ref(`/users/${currentUser.uid}/post/meetingPoint`)
		.push({ latitude, longitude, latitudeDelta, longitudeDelta })
		Actions.pop();
	};
};

export const employeesFetch = () => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/post/meetingPoint`)
			.on('value', snapshot => {
				dispatch({ type: MEETING_FETCH_SUCCESS, payload: snapshot.val() });
			});
	};
};