import React, { useState, useEffect } from 'react';

import cFetch from '../../utility/fetch';
import Episode from '../../components/Episode';
import CharacterList from '../../components/CharacterList';
import { getIdsFromUrl } from '../../utility/helpers';

const EpisodePage = ({ match }) => {
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    fetchEpisode(match.params.id);
    if (episode) fetchCharacters(episode);
  }, [episode]);

  async function fetchEpisode(episodeId) {
    const fetchedEpisode = await cFetch('/episode/' + episodeId);
    if (!fetchedEpisode.hasError) {
      setEpisode(fetchedEpisode);
    }
  }

  async function fetchCharacters(fetchedEpisode) {
    const characterIds = getIdsFromUrl(fetchedEpisode.characters);
    const fetchedCharacters = await cFetch('/character/' + characterIds);
    if (!fetchedCharacters.hasError) {
      setCharacters(fetchedCharacters);
    }
  }

  return (
    <>
      <Episode episodeData={episode} />
      <CharacterList characters={characters} />
    </>
  );
};

export default EpisodePage;
