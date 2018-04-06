import {
	POST_FETCH_SUCCESS,
	SENT_INTEREST
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case POST_FETCH_SUCCESS:
			return action.payload;
		case SENT_INTEREST:
			return INITIAL_STATE;
		default: 
			return state;
	}
};