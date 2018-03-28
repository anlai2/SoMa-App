export default (state = null, action) => { //if undefined assign to null(no selected library)
	switch (action.type) {
		case 'select_post':
			return action.payload;
		default:
			return state;
	}
};