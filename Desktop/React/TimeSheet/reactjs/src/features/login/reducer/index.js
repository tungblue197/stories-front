import * as types from '../constant';
import Token from '../../../helppers/tokenHelpper';
const initialState = {
    login: Token.getTokenFromLocal() ? true : false,
    loading: false,
    error: false,
    errorMsg: '',
    userId: null,
    token: Token.getTokenFromLocal() ? new Token(Token.getTokenFromLocal()) : null
}

const loginReducer = (state = initialState, action) => {
    const { payload } = action;
    console.log('payload: ', payload)
    switch (action.type) {
        case types.LOGIN_REQUREST:
            return {
                ...state,
                loading: true
            }
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                login: true,
                user: payload.userId,
                error: false,
                errorMsg: '',
                token:payload.token
            }
        case types.LOGIN_FALTURE:
            return {
                ...state,
                login: false,
                error: true,
                errorMsg: payload.message
            }
        default:
            return state;
    }
}

export default loginReducer;