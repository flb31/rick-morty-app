import { all } from 'redux-saga/effects'
import ExampleSaga from './example';

export default function* Sagas() {
  yield all([
    ExampleSaga(),
  ])
}
