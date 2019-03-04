import React from 'react';

const CharacterListItem = ({ characterData }) => {
  const {
    name,
    status,
    species,
    gender,
    origin,
    location,
    image
  } = characterData;

  return (
    <>
      <div className="list-item">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <ul>
          <li>
            <span>Status:</span> {status}
          </li>
          <li>
            <span>Species:</span> {species}
          </li>
          <li>
            <span>Gender:</span> {gender}
          </li>
          <li>
            <span>Origin:</span> {origin.name}
          </li>
          <li>
            <span>Location:</span> {location.name}
          </li>
        </ul>
      </div>
    </>
  );
};

export default CharacterListItem;
