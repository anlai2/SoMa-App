import { 

	SAFETREK_AUTH,
	SAFETREK_UPDATE,
	 } from '../actions/types';

const INITIAL_STATE = { 
	safeTrek: false,
	stCode: ''
}

export default (state = INITIAL_STATE, action) => {
	console.log(action);

	switch (action.type) {
		case SAFETREK_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value }
		case SAFETREK_AUTH:
			return INITIAL_STATE;
		default:
			return state;
	}
};