import { put, takeLatest } from 'redux-saga/effects';
import { 
    FETCH_CHARACTER,
    SUCCESS_CHARACTER,
    ERROR_CHARACTER,
    FETCH_CHARACTER_GET,
    SUCCESS_CHARACTER_GET,
    ERROR_CHARACTER_GET,
    SUCCESS_CHARACTER_SEARCH,
    ERROR_CHARACTER_SEARCH,
    FETCH_CHARACTER_SEARCH,
 } from '../constants/characters';

 import { listCharacters, getCharacter } from '../../services/character';

function* fetchCharacters(action) {
    const { page, query, isSearching } = action;
    try {
        const json = yield listCharacters(page, query);
        
        yield put({
            type: isSearching ? SUCCESS_CHARACTER_SEARCH : SUCCESS_CHARACTER,
            payload: {
                data:json.results,
                page,
                pages: json.info.pages,
                prev: json.info.prev ? true : false,
                next: json.info.next ? true : false,
                query,
            }
        });
    } catch (error) {
        yield put({
            type: isSearching ? ERROR_CHARACTER_SEARCH : ERROR_CHARACTER,
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
    yield takeLatest(FETCH_CHARACTER_SEARCH, fetchCharacters);
}

export default characterSagaWatcher;
