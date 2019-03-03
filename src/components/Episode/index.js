import React from 'react';

const Episode = ({ episodeData }) => {
  return (
    <>
      <article className="episode">
        <ul>
          <li>ID: {episodeData.id}</li>
          <li>Name: {episodeData.name}</li>
        </ul>
      </article>
    </>
  );
};

export default Episode;
