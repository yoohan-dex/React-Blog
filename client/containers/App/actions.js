
import {
  LOADING_APP,
} from './constants';


export function loadApp() {
  return {
    type: LOADING_APP,
  };
}


// export function loadSuccess(title) {
//   return {
//     type: LOADING_SUCCESS,
//     title,
//   };
// }

