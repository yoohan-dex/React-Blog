import React from 'react';
import { Route, IndexRoute } from 'react-router';


import App from './containers/App';
import Main from './containers/Main';
import Content from './containers/Content';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="content" component={Content} />
  </Route>
);

