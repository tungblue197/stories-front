import { takeLatest, put, call } from 'redux-saga/effects';
import * as types from '../constant';
import loginService from '../service';
import * as actions from '../action';

function *loginSaga (action){
    try {
        const { payload } = action;
        yield console.log('payload: ', payload);
        const res = yield call(loginService.login,payload);
        yield put(actions.loginSuccess(res.data.result))
        console.log(res);
    } catch (error) {
        console.log('error ',error.message)
        yield put(actions.loginFalure(error));
    }
    
}


export default [takeLatest(types.LOGIN_REQUREST,loginSaga)]