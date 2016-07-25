import { createSelector } from 'reselect';

const mainDomain = () => state => state.get('main');

const articleSelector = () => createSelector(
  mainDomain(),
  mainState => mainState.get('acticles')
);

const numSelector = () => createSelector(
  mainDomain(),
  mainState => mainState.get('item_num')
);

const mainSeletor = () => createSelector(
  mainDomain(),
  articleSelector(),
  numSelector(),
  substate => substate.toJS()
);



export default mainSeletor;
export {
  mainDomain,
  articleSelector,
  numSelector,
};
