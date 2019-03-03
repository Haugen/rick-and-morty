import React, { useState, useEffect } from 'react';

import cFetch from '../../utility/fetch';
import { getIdsFromUrl } from '../../utility/helpers';

const Episode = ({ episodeData }) => {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    fetchCharacters();
  }, []);

  async function fetchCharacters() {
    const characterIds = getIdsFromUrl(episodeData.characters);
    const fetchedCharacters = await cFetch('/character/' + characterIds);
    if (!fetchedCharacters.hasError) {
      setCharacters(fetchedCharacters);
    }
  }

  return (
    <>
      <article className="episode">
        <h2>{episodeData.name}</h2>
      </article>
      {!characters
        ? 'Loading characters...'
        : characters.map(character => {
            return character.name;
          })}
    </>
  );
};

export default Episode;
