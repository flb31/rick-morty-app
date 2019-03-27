import { all } from 'redux-saga/effects';
import ExampleSaga from './example';
import CharacterSaga from './character';

export default function* Sagas() {
  yield all([
    ExampleSaga(),
    CharacterSaga(),
  ])
}
