import React from 'react';

const Episode = ({ episodeData }) => {
  return !episodeData ? (
    'Loading episode...'
  ) : (
    <>
      <article className="episode">
        <h2>{episodeData.name}</h2>
      </article>
    </>
  );
};

export default Episode;
