import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import EpisodeList from './components/EpisodeList';

const App = () => {
  return (
    <>
      <h1>Rick and Morty!</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={EpisodeList} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
