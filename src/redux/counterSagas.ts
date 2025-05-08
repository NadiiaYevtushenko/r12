import { put, delay, takeEvery, all } from 'redux-saga/effects';
import {
  increment,
  decrement,
  incrementAsync,
  decrementAsync,
} from './counterSlice';

/**
 * Saga for handling asynchronous increment.
 */
export function* incrementAsyncSaga() {
  yield delay(1000);
  yield put(increment());
}

/**
 * Saga for handling asynchronous decrement.
 */
export function* decrementAsyncSaga() {
  yield delay(1000);
  yield put(decrement());
}

/**
 * Root saga that registers all watchers.
 */
function* rootSaga() {
  yield all([
    takeEvery(incrementAsync.type, incrementAsyncSaga),
    takeEvery(decrementAsync.type, decrementAsyncSaga),
  ]);
}

export default rootSaga;
