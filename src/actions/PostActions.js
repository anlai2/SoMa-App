import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
	POST_UPDATE,
	POST_CREATE,
	SEARCH_CREATE,
	SEARCH_STORE,
	FETCH_LOCATION,
	MEETING_FETCH_SUCCESS,
	POST_FETCH_SUCCESS
} from './types';

export const postUpdate = ({ prop, value }) => {
	return {
		type: POST_UPDATE,
		payload: { prop, value }
	};
};

export const postCreate = ({ safeTrek, postType, postTitle, price, address, imageID }) => {
	const { currentUser } = firebase.auth();

	if(postType === "Buy"){
			return (dispatch) => {
			firebase.database().ref(`/users/${currentUser.uid}/posts/buy`)
			.push({ safeTrek, postType, postTitle, price, address, imageID })
			.then(() => {
				dispatch({ type: POST_CREATE });
				Actions.pop()
			});
		}
	}else {
		return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/posts/sell`)
		.push({ safeTrek, postType, postTitle, price, address, imageID })
		.then(() => {
			dispatch({ type: POST_CREATE });
			Actions.pop()
		})
		};
		};
}

export const searchCreate = ({ latitude, longitude }) => {
	return {
		type: SEARCH_CREATE,
		payload: { latitude, longitude }

	};
};

export const searchStore =({ latitude, latitudeDelta, longitude, longitudeDelta }) => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
	firebase.database().ref(`/users/${currentUser.uid}/posts/meetingPoint`)
		.push({ latitude, longitude, latitudeDelta, longitudeDelta })
		Actions.pop();
	};
};

export const postsFetchBuy = () => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/posts/buy`)
			.on('value', snapshot => {
				dispatch({ type: POST_FETCH_SUCCESS, payload: snapshot.val() });
			});
	};
};

export const postsFetchSell = () => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/posts/sell`)
			.on('value', snapshot => {
				dispatch({ type: POST_FETCH_SUCCESS, payload: snapshot.val() });
			});
	};
};