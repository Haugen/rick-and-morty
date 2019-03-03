import React, { useState, useEffect } from 'react';

import cFetch from '../../utility/fetch';
import Episode from '../../components/Episode';

const EpisodePage = ({ match }) => {
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    fetchEpisode(match.params.id);
  }, []);

  async function fetchEpisode(episodeId) {
    const fetchedEpisode = await cFetch('/episode/' + episodeId);
    if (!fetchedEpisode.hasError) {
      setEpisode(fetchedEpisode);
    }
  }

  return !episode ? 'Loading...' : <Episode episodeData={episode} />;
};

export default EpisodePage;
