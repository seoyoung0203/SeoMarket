import { all, delay, fork, put, takeEvery } from 'redux-saga/effects';
import {
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_IN_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
    LOG_OUT_REQUEST
} from '../reducers/user';

function* login() {
    try {
        // yield call(loginAPI);
        yield delay(2000);
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
        yield delay(2000);
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