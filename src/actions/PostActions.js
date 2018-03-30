import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
	POST_UPDATE,
	SEARCH_CREATE,
	SEARCH_STORE,
	FETCH_LOCATION
} from './types';

export const postUpdate = ({ prop, value }) => {
	return {
		type: POST_UPDATE,
		payload: { prop, value }
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
	};
};
