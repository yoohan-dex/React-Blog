import { createSelector } from 'reselect';

const globalDomain = () => state => state.get('global');

const readySeletor = () => createSelector(
  globalDomain(),
  s => s.get('ready')
);

const errorSeletor = () => createSelector(
  globalDomain(),
  globalState => globalState.get('error')
);

const titleSeletor = () => createSelector(
  globalDomain(),
  globalState => globalState.get('title')
);

const genreSeletor = () => createSelector(
  globalDomain(),
  globalState => globalState.get('genres')
);

const appSeletor = () => createSelector(
  globalDomain(),
  readySeletor(),
  errorSeletor(),
  titleSeletor(),
  genreSeletor(),
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

export default appSeletor;
export {
  selectLocationState,
  readySeletor,
  errorSeletor,
  titleSeletor,
};
