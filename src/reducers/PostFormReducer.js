import {
	POST_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
	postTitle: '',
	price: '',
	meetingAddress: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case POST_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value }
		default:
			return state;
	}
}