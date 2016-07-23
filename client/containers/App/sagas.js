import { take, call, put, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { getTitle } from './fetchData';
import { LOADING_APP, LOADING_SUCCESS, LOADING_ERROR } from './constants';
import Cosmic from 'cosmicjs';

function* getAppData() {
  try {
    const title = yield call(getTitle);
    console.log(title);
    yield put({ type: LOADING_SUCCESS, title });
  } catch (err) {
    yield put({ type: LOADING_ERROR, err });
  }
}
function* watchFetch() {
  yield* takeEvery(LOADING_APP, getAppData);
}

export default watchFetch;
