import { fromJS } from 'immutable';
import {
  LOADING_APP,
  LOADING_SUCCESS,
  LOADING_ERROR,
} from './constants';

const initialState = fromJS({
  ready: false,
  title: '',
  error: '',
  pages: [],
  item_num: 5,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_APP:
      return state;
    case LOADING_SUCCESS:
      return state
        .set('title', action.title);
    case LOADING_ERROR:
      return state
        .set('error', action.err);
    default:
      return state;
  }
}

export default appReducer;
