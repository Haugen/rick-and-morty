import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import FrontPage from './containers/FrontPage';
import EpisodePage from './containers/EpisodePage';

import './styles/base.scss';
import './styles/grid.scss';

const App = () => {
  return (
    <Router>
      <>
        <header id="toolbar">
          <Link to="/">Rick and Morty!</Link>
        </header>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/episode/:id" component={EpisodePage} />
        </Switch>
      </>
    </Router>
  );
};

export default App;
