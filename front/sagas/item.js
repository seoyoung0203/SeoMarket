import { all, delay, fork, put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import {
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAILURE,
    ADD_ITEM_REQUEST,
    GET_ITEM_REQUEST,
    GET_ITEM_SUCCESS,
    GET_ITEM_FAILURE, GET_ONE_ITEM_SUCCESS, GET_ONE_ITEM_FAILURE, GET_ONE_ITEM_REQUEST
} from '../reducers/item';

axios.defaults.baseURL = 'http://localhost:8084/api';


function* addItem() {
    try {
        yield delay(2000);
        yield put({
           type: ADD_ITEM_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: ADD_ITEM_FAILURE,
        });
    }
}

function* watchAddItem() {
    yield takeEvery(ADD_ITEM_REQUEST, addItem);
}

function getItemListAPI() {
    return axios.get('/item/');
}

function* getItemList() {
    const result = yield call(getItemListAPI);
    try {
        yield put({
            type: GET_ITEM_SUCCESS,
            data: result.data,
        });
    } catch(e) {
        yield put({
            type: GET_ITEM_FAILURE
        });
    }
}

function* watchGetItemList() {
    yield takeEvery(GET_ITEM_REQUEST, getItemList);
}

function getItemAPI(itemIndex) {
    return axios.get(`/item/${itemIndex}`);
}

function* getItem() {
    const result = yield call(getItemAPI, action.data);
    try {
        yield put({
            type: GET_ONE_ITEM_SUCCESS,
            data: result.data
        });
    } catch (e) {
        put({
            type: GET_ONE_ITEM_FAILURE
        });
    }
}

function* watchGetItem() {
    yield takeEvery(GET_ONE_ITEM_REQUEST, getItem);
}

export default function* itemSaga() {
    yield all([
        fork(watchAddItem),
        fork(watchGetItemList),
        fork(watchGetItem)
    ]);
}