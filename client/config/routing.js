import React from 'react';

// Import components
import Main from '../components/Main';
import PhotoGrid from '../components/PhotoGrid';
import SinglePhoto from '../components/SinglePhoto';

// Import React-Router components
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid} />
      <Route path="/view/:photoId" component={SinglePhoto} />
    </Route>
  </Router>
);

export default router;
