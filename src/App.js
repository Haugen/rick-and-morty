import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import EpisodeList from './components/EpisodeList';
import EpisodePage from './containers/EpisodePage';

const App = () => {
  return (
    <Router>
      <>
        <Link to="/">Rick and Morty!</Link>
        <Switch>
          <Route exact path="/" component={EpisodeList} />
          <Route exact path="/episode/:id" component={EpisodePage} />
        </Switch>
      </>
    </Router>
  );
};

export default App;
