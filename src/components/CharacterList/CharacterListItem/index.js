import React from 'react';

const CharacterListItem = ({ characterData }) => {
  return (
    <>
      <article className="character-list-item">
        <ul>
          <li>ID: {characterData.id}</li>
          <li>Name: {characterData.name}</li>
        </ul>
      </article>
    </>
  );
};

export default CharacterListItem;
