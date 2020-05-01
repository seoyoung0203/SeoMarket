import { combineReducers } from 'redux';
import user from './user';
import item from './item';
import board from './board';

const rootReducer = combineReducers({
    user,
    item,
    board
});

export default rootReducer;