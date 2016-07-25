import { createSelector } from 'reselect';
import {
  mainDomain,
  articleSelector,
} from '../Main/selectors';

const articlePageSelector = () => createSelector(
  mainDomain(),
  articleSelector(),
  subState => subState.toJS()
);

export default articlePageSelector;
