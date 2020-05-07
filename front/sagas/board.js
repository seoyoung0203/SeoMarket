import { all, fork, put, takeEvery, call } from "redux-saga/effects";
import axios from 'axios';
import {
    ADD_BOARD_FAILURE,
    ADD_BOARD_REQUEST,
    ADD_BOARD_SUCCESS,
    GET_BOARD_FAILURE,
    GET_BOARD_REQUEST,
    GET_BOARD_SUCCESS,
    GET_ONE_BOARD_REQUEST,
    GET_ONE_BOARD_SUCCESS,
    GET_ONE_BOARD_FAILURE
} from "../reducers/board";

axios.defaults.baseURL = 'http://localhost:8084/api';


function addBoardAPI(boardData) {
    return axios.post('/board/', boardData);
}

function* addBoard(action) {
    try {
        const result = yield call(addBoardAPI, action.data);
        yield put({
            type: ADD_BOARD_SUCCESS,
            data: result.data,
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

function getBoardListAPI() {
    return axios.get('/board/');
}

function* getBoardList() {
    try {
        const result = yield call(getBoardListAPI);
        yield put({
            type: GET_BOARD_SUCCESS,
            data: result.data,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: GET_BOARD_FAILURE,
        });
    }
}

function* watchGetBoardList() {
    yield takeEvery(GET_BOARD_REQUEST, getBoardList);
}

function getBoardAPI() {
    return axios.get('');
}

function* getBoard() {
    try{
        yield put({
            type: GET_ONE_BOARD_SUCCESS,
            data: 'test',
        });
    } catch(e) {
        console.error(e);
        yield put({
            type: GET_ONE_BOARD_FAILURE,
        });
    }
}

function* watchGetBoard() {
    yield takeEvery(GET_ONE_BOARD_REQUEST, getBoard);
}

export default function* boardSaga() {
    yield all([
        fork(watchAddBoard),
        fork(watchGetBoardList),
        fork(watchGetBoard)
    ]);
}