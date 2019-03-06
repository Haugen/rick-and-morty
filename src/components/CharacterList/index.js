import React from 'react';

import CharacterListItem from './CharacterListItem';

const CharacterList = props => {
  return !props.characters ? (
    'Loading characters...'
  ) : (
    <section className="character-list">
      {props.characters.map(character => {
        return (
          <CharacterListItem key={character.id} characterData={character} />
        );
      })}
    </section>
  );
};

export default CharacterList;
