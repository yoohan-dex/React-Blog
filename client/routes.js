import React from 'react';
import { Route, IndexRoute } from 'react-router';


import App from './containers/App';
import Main from './containers/Main';
import Content from './containers/Content';
import ArticlePage from './containers/ArticlePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="content" component={ArticlePage} />
    <Route path="search" component={ArticlePage} />
    <Route path="about" component={ArticlePage} />
  </Route>
);

