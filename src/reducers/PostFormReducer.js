import {
	POST_UPDATE,
	SEARCH_CREATE,
	SEARCH_STORE
} from '../actions/types';

const INITIAL_STATE = {
	postTitle: '',
	price: '',
	latitude: '',
	longitude: ''
};

export default (state = INITIAL_STATE, action) => {
	console.log(action);

	switch (action.type) {
		case POST_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value }
		case SEARCH_CREATE:
			console.log(action);
			return INITIAL_STATE;
		case SEARCH_STORE:
			console.log(action);
			return INITIAL_STATE;
		default:
			return state;
	}
}