import {
	POST_UPDATE
} from './types';

export const postUpdate = ({ prop, value }) => {
	return {
		type: POST_UPDATE,
		payload: { prop, value }
	};
};