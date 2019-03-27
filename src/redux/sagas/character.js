import { put, takeLatest } from 'redux-saga/effects';
import { 
    FETCH_CHARACTER,
    SUCCESS_CHARACTER,
    ERROR_CHARACTER,
    FETCH_CHARACTER_GET,
    SUCCESS_CHARACTER_GET,
    ERROR_CHARACTER_GET,
 } from '../constants/characters';

 import { listCharacters, getCharacter } from '../../services/character';

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

function* fetchCharacter(action) {
    const { id } = action;
    try {
        const json = yield getCharacter(id);
        yield put({
            type: SUCCESS_CHARACTER_GET,
            payload: {
                character: json,
                id,
            },
        });
    } catch (error) {
        yield put({
            type: ERROR_CHARACTER_GET,
            payload: error,
        });
    }
}

function* characterSagaWatcher() {
    yield takeLatest(FETCH_CHARACTER, fetchCharacters);
    yield takeLatest(FETCH_CHARACTER_GET, fetchCharacter);
}

export default characterSagaWatcher;
