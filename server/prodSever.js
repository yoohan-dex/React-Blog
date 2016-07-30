import React from 'react';
import { match, RoutingContext, Route, IndexRoute } from 'react-router';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import hogan from 'hogan-express';
import config from './config';
import routes from '../client/routes';

const app = express();
app.engine('html', hogan);
app.set('views', `${__dirname}/client/index.html`);
// app.use('/', express.static(__dirname + '/public/'))

app.set('*', (req,res)=> {
  
})
