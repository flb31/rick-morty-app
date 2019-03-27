import { put, takeLatest } from 'redux-saga/effects';
import { 
    FETCH_CHARACTER,
    SUCCESS_CHARACTER,
    ERROR_CHARACTER,
 } from '../constants/characters';

 import { listCharacters } from '../../services/character';

function* fetchCharacters(action) {
    const { page } = action;
    try {
        const json = yield listCharacters(page);
        yield put({
            type: SUCCESS_CHARACTER,
            payload: {
                data:json.results,
                page,
                pages: json.info.pages,
                prev: json.info.prev ? true : false,
                next: json.info.next ? true : false,
            }
        });
    } catch (error) {
        yield put({
            type: ERROR_CHARACTER,
            payload: error,
        });
    }
    
}

function* characterSagaWatcher() {
    yield takeLatest(FETCH_CHARACTER, fetchCharacters);
}

export default characterSagaWatcher;
