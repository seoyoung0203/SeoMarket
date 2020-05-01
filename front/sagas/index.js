import { all, fork } from 'redux-saga/effects';
import user from './user';
import item from './item';
import board from './board';

export default function* rootSaga() {
    yield all([
        fork(user),
        fork(item),
        fork(board)
    ]);
}