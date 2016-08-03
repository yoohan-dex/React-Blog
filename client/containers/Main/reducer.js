import { fromJS } from 'immutable';
import {
  LOADING_ERROR,
  LOADING_ARTICLE,
  LOADING_ABOUT,
} from '../App/constants';

const initialState = fromJS({
  articles: [],
  title: '',
  error: '',
  images: [],
  date: [],
  item_num: 9,
  about: '',
});

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_ERROR:
      return state
        .set('error', action.err);
    case LOADING_ARTICLE:
      return state
        .set('articles', action.afterSorted);
    case LOADING_ABOUT:
      return state
        .set('about', action.aboutContent);
    default:
      return state;
  }
}

export default mainReducer;
