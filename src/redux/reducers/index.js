import { combineReducers } from 'redux';
import example from './example';
import character from './character';

const reducers = combineReducers({
    example,
    character,
});

export default reducers;
