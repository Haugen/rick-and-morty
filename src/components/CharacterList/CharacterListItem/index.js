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
            <strong>Status:</strong> {status}
          </li>
          <li>
            <strong>Species:</strong> {species}
          </li>
          <li>
            <strong>Gender:</strong> {gender}
          </li>
          <li>
            <strong>Origin:</strong> {origin.name}
          </li>
          <li>
            <strong>Location:</strong> {location.name}
          </li>
        </ul>
      </div>
    </>
  );
};

export default CharacterListItem;
