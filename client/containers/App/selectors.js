import { createSelector } from 'reselect';

const globalDomain = () => state => state.get('global');

const readySelector = () => createSelector(
  globalDomain(),
  s => s.get('ready')
);

const errorSelector = () => createSelector(
  globalDomain(),
  globalState => globalState.get('error')
);

const titleSelector = () => createSelector(
  globalDomain(),
  globalState => globalState.get('title')
);

const genreSelector = () => createSelector(
  globalDomain(),
  globalState => globalState.get('genres')
);


const dateGroupSelector = () => createSelector(
  globalDomain(),
  globalState => globalState.get('dateGroup')
);

const appSelector = () => createSelector(
  globalDomain(),
  readySelector(),
  errorSelector(),
  titleSelector(),
  genreSelector(),
  dateGroupSelector(),
  substate => substate.toJS()
);

const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export default appSelector;
export {
  selectLocationState,
  readySelector,
  errorSelector,
  titleSelector,
};
