import React, { useState, useEffect } from 'react';

import cFetch from '../../utility/fetch';
import Episode from '../../components/Episode';
import CharacterList from '../../components/CharacterList';
import Layout from '../../components/Layout';
import { getIdsFromUrl } from '../../utility/helpers';

const EpisodePage = ({ match }) => {
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    fetchEpisode(match.params.id);
    if (episode) fetchCharacters();
  }, [episode]);

  async function fetchEpisode(episodeId) {
    const fetchedEpisode = await cFetch('/episode/' + episodeId);
    if (!fetchedEpisode.hasError) {
      setEpisode(fetchedEpisode);
    }
  }

  async function fetchCharacters() {
    const characterIds = getIdsFromUrl(episode.characters);
    const fetchedCharacters = await cFetch('/character/' + characterIds);
    if (!fetchedCharacters.hasError) {
      setCharacters(fetchedCharacters);
    }
  }

  const renderHeader = (
    <>
      <h1>{episode ? episode.name : ''}</h1>
      <Episode episodeData={episode} />
    </>
  );
  const renderMain = <CharacterList characters={characters} />;

  return <Layout header={renderHeader} main={renderMain} />;
};

export default EpisodePage;
