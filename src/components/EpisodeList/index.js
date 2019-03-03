import React, { useState, useEffect } from 'react';

import cFetch from '../../utility/fetch';
import Episode from '../Episode';

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetchEpisodes();
  }, []);

  async function fetchEpisodes() {
    const fetchedEpisodes = await cFetch('/episode');
    setEpisodes(fetchedEpisodes.results);
  }

  return episodes.length > 0
    ? episodes.map(episode => {
        return <Episode key={episode.id} id={episode.id} />;
      })
    : 'Loading...';
};

export default EpisodeList;
