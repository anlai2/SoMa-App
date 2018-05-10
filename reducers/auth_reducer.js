import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED
} from '../actions/types';

const INITAL_STATE = {
    email: '',
    password: ''
}

export default function (state = INITAL_STATE, action) {
    switch(action.type){
        case EMAIL_CHANGED:
            return { ...state, email: action.payload}
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload}
        default:
            return state;
    }
}