import React, { useState, useEffect } from 'react';

import cFetch from '../../utility/fetch';
import EpisodeListItem from './EpisodeListItem';
import Paginator from '../Paginatior';

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [pages, setPages] = useState({});

  useEffect(() => {
    fetchEpisodes();
  }, []);

  async function fetchEpisodes(page = 1) {
    const fetchedEpisodes = await cFetch('/episode?page=' + page);
    setPages(fetchedEpisodes.info);
    setEpisodes(fetchedEpisodes.results);
  }

  return (
    <>
      <section className="episode-list">
        {episodes.length === 0
          ? 'Loading...'
          : episodes.map(episode => {
              return <EpisodeListItem key={episode.id} episodeData={episode} />;
            })}
      </section>
      {episodes.length > 0 ? (
        <Paginator info={pages} fetchNewEpisodes={fetchEpisodes} />
      ) : null}
    </>
  );
};

export default EpisodeList;
