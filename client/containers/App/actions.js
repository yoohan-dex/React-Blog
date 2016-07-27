
import {
  LOADING_APP,
  SEARCH_ARTICLE,
} from './constants';


export function loadApp() {
  return {
    type: LOADING_APP,
  };
}

export function search(slug) {
  return {
    type: SEARCH_ARTICLE,
    slug,
  }
}


// export function loadSuccess(title) {
//   return {
//     type: LOADING_SUCCESS,
//     title,
//   };
// }

