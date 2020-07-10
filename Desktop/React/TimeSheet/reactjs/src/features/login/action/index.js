import * as types from '../constant';
import Token from '../../../helppers/tokenHelpper';

export const loginRequest = (payload) => {
    return ({
        type: types.LOGIN_REQUREST,
        payload
    })
}
export const loginSuccess = (payload) => {
    const token = new Token(payload.accessToken);
    console.log('token : ', token)
    return ({
        type:types.LOGIN_SUCCESS,
        payload: {
            ...payload,
            token
        }
    })
}
export const loginFalure = (payload) => {
    return ({ 
        type:types.LOGIN_FALTURE,
        payload
    })
}