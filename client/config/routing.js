import React from 'react';

// Import react-redux connector
import Connect from '../config/connect';

// Import components
import PhotoGrid from '../components/PhotoGrid';
import SinglePhotoGrid from '../components/SinglePhotoGrid';

// Import React-Router components
import { Router, Route, IndexRoute } from 'react-router';


import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Connect}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={SinglePhotoGrid} />
      </Route>
    </Router>
  </Provider>
);

export default router;
