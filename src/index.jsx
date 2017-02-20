import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// get redux promise
import Promise from "redux-promise";

// get react router
import { Router, browserHistory } from "react-router";
// get the main routes element
import Routes from "./routes/routes.jsx";

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(Promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    
    <Router history={browserHistory} routes={Routes} />

  </Provider>
  , document.getElementById("app-wrap"));
