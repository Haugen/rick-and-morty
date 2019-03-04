import React, { useState, useEffect } from 'react';

import cFetch from '../../utility/fetch';
import EpisodeListItem from './EpisodeListItem';

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
    <>
      <h1>Rick and Morty episodes!</h1>
      <section className="episode-list">
        {episodes.length === 0
          ? 'Loading...'
          : episodes.map(episode => {
              return <EpisodeListItem key={episode.id} episodeData={episode} />;
            })}
      </section>
    </>
  );
};

export default EpisodeList;
