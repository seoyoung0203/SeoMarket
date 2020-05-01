import { all, delay, fork, put, takeEvery } from 'redux-saga/effects';
import {ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE, ADD_ITEM_REQUEST} from '../reducers/item';

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

export default function* itemSaga() {
    yield all([
       fork(watchAddItem),
    ]);
}