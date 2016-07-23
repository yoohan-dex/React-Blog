import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import appReducer from './containers/App/reducer';
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

const initialState = fromJS({
  article: 'yoohoo!',
});
function contentReducer(state = initialState, action) {
  return state;
}


export default function reducerCreator() {
  return combineReducers({
    route: routeReducer,
    content: contentReducer,
    global: appReducer,
  });
}
