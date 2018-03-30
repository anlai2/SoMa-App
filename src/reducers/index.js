import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PostFormReducer from './PostFormReducer';

export default combineReducers({
	auth: AuthReducer,
	postForm: PostFormReducer,
});