import { all, delay, fork, put, takeEvery } from 'redux-saga/effects';
import {ADD_ITEM_SUCCESS,
        ADD_ITEM_FAILURE,
        ADD_ITEM_REQUEST,
    GET_ITEM_REQUEST,
GET_ITEM_SUCCESS,
GET_ITEM_FAILURE
} from '../reducers/item';

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

function* getItemList() {
    try {
        yield put({
            type: GET_ITEM_SUCCESS
        })
    } catch(e) {
        yield put({
            type: GET_ITEM_FAILURE
        })
    }
}

function* watchGetItemList() {
    yield takeEvery(GET_ITEM_REQUEST, getItemList);
}

export default function* itemSaga() {
    yield all([
       fork(watchAddItem),
        fork(watchGetItemList)
    ]);
}