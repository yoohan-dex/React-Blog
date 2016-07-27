import React from 'react';
import { Route, IndexRoute } from 'react-router';


import App from './containers/App';
import Main from './containers/Main';
import About from './containers/About';
import Search from './containers/Search';
import ArticlePage from './containers/ArticlePage';
import Types from './containers/Types';
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="about" component={About} />
    <Route path="article/:id" component={ArticlePage} />
    <Route path="search/:slug" component={Search} />
    <Route path="genre/:genre" component={Types} />
    <Route path="about" component={ArticlePage} />
  </Route>
);

