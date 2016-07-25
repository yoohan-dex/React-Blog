import { fromJS } from 'immutable';
import {
  LOADING_ERROR,
  LOADING_ARTICLE,
} from '../App/constants';

const initialState = fromJS({
  articles: [],
  title: '',
  error: '',
  images: [],
  date: [],
  item_num: 9,
});

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_ERROR:
      return state
        .set('error', action.err);
    case LOADING_ARTICLE:
      return state
        .set('articles', action.afterSorted);

    default:
      return state;
  }
}

export default mainReducer;
