import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_EXAMPLE, SUCCESS_EXAMPLE, ERROR_EXAMPLE } from '../constants/example';
import { fetchNews as fetchApiNews } from '../../services/example';

function* fetchNews() {
    try {
        const json = yield fetchApiNews();
        yield put({
            type: SUCCESS_EXAMPLE,
            payload: json.articles,
        });
    } catch (error) {
        yield put({
            type: ERROR_EXAMPLE,
            payload: error,
        });
    }
    
}

function* examplesSagaWatcher() {
    yield takeLatest(FETCH_EXAMPLE, fetchNews);
}

export default examplesSagaWatcher;
