import { fromJS } from 'immutable';
import {
  LOADING_APP,
  LOADING_SUCCESS,
  LOADING_TITLE,
  LOADING_ARTICLE,
  LOADING_ERROR,
} from './constants';

const initialState = fromJS({
  ready: false,
  title: '',
  error: '',
  article: [],
  item_num: 5,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_APP:
      return state;
    case LOADING_SUCCESS:
      return state
        .set('ready', true);
    case LOADING_ERROR:
      return state
        .set('error', action.err);
    // case LOADING_ARTICLE:
    //   return state
    //     .set('acticle', action.acticle);
    case LOADING_TITLE:
      return state
        .set('title', action.title);
    default:
      return state;
  }
}

export default appReducer;
