import React from 'react';

import CharacterListItem from './CharacterListItem';

const CharacterList = ({ characters }) => {
  return !characters ? (
    'Loading characters...'
  ) : (
    <section className="character-list">
      {characters.map(character => {
        return (
          <CharacterListItem key={character.id} characterData={character} />
        );
      })}
    </section>
  );
};

export default CharacterList;
