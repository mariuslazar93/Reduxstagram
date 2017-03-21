import React from 'react';

// Import components
import Main from '../components/Main';
import PhotoGrid from '../components/PhotoGrid';
import SinglePhoto from '../components/SinglePhoto';

// Import React-Router components
import { Router, Route, IndexRoute } from 'react-router';


import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:photoId" component={SinglePhoto} />
      </Route>
    </Router>
  </Provider>
);

export default router;
