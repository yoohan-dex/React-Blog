import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import request from '../../utils/request';
import {
  LOADING_APP,
  LOADING_TITLE,
  LOADING_ARTICLE,
  LOADING_SUCCESS,
  LOADING_ERROR,
  LOADING_GENRE,
  LOADING_DATE,
} from './constants';
import config from '../../config';
import parseData from './parseData';

const apiVersion = 'v1';
const apiUrl = `https://api.cosmicjs.com/${apiVersion}`;
const endpointCreator = (type = '', c) =>
  `${apiUrl}/${c.bucket.slug}/${type}?read_key=${c.bucket.read_key}`;
function* getAppData() {
  try {
    let { data } = yield call(request, endpointCreator('objects', config));
    data = parseData(data);
    // console.log(data.objects.type);
    const { articles } = data.objects.type;
    const genres = articles.map(x => x.metafield.genre);
    const counts = genres.reduce((pre, cur) => (pre[cur.value]++ || (pre[cur.value] = 1), pre), {});
    const dateGroup = articles.map(x => x.created);
    const afterSorted = articles.sort((x, y) => x.created < y.created);
    // console.log(afterSorted);
    const { metafields } = data.object.text;
    const key = metafields.findIndex(x => x.key === 'menu_title');
    const title = metafields[key].value;
    yield put({ type: LOADING_DATE, dateGroup });
    yield put({ type: LOADING_GENRE, counts });
    yield put({ type: LOADING_ARTICLE, afterSorted });
    yield put({ type: LOADING_TITLE, title });
    yield put({ type: LOADING_SUCCESS });
  } catch (err) {
    yield put({ type: LOADING_ERROR, err });
  }
}
function* watchFetch() {
  yield* takeEvery(LOADING_APP, getAppData);
}

export default watchFetch;
