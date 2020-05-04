import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import {
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_IN_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
    LOG_OUT_REQUEST
} from '../reducers/user';

axios.defaults.baseURL = 'http://localhost:8084/api';

function loginAPI(loginData) {
    return axios.post('/user',loginData);
}

function logoutAPI() {
    return axios.post('/user/logout');
}


function* login(action) {
    try {
        const result = yield call(loginAPI, action.data);
        console.log(result);
        yield put({ // put은 dispatch 동일
            type: LOG_IN_SUCCESS,
        });
    } catch (e) { // loginAPI 실패
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE,
        });
    }
}

function* watchLogin() {
    yield takeEvery(LOG_IN_REQUEST, login);
}

function* logout() {
    try{
        yield logoutAPI();
        yield put({
           type: LOG_OUT_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
           type: LOG_OUT_FAILURE,
        });
    }
}

function* watchLogout() {
    yield takeEvery(LOG_OUT_REQUEST, logout);
}

export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogout)
    ]);
}