import { all, fork, delay, put, takeEvery } from "redux-saga/effects";
import {ADD_BOARD_FAILURE, ADD_BOARD_REQUEST, ADD_BOARD_SUCCESS} from "../reducers/board";

function* addBoard() {
    try {
        yield delay(2000);
        yield put({
            type: ADD_BOARD_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: ADD_BOARD_FAILURE,
        });
    }
}

function* watchAddBoard() {
    yield takeEvery(ADD_BOARD_REQUEST, addBoard);
}

export default function* boardSaga() {
    yield all([
        fork(watchAddBoard),
    ]);
}