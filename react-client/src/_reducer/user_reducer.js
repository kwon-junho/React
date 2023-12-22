/* eslint-disable no-unreachable */
/* eslint-disable import/no-anonymous-default-export */
import { 
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from '../_action/types'

export default function (state = {}, action) {
    switch(action.tpye) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
        case REGISTER_USER:
            return { ...state, register: action.payload }
        case AUTH_USER:
            return {...state, userData: action.payload}            
        default:
            return state;
    }
}