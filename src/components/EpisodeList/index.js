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

  return (
    <section className="episode-list">
      {episodes.length === 0
        ? 'Loading...'
        : episodes.map(episode => {
            return <Episode key={episode.id} episodeData={episode} />;
          })}
    </section>
  );
};

export default EpisodeList;
