import React from 'react';

const Episode = ({ episodeData }) => {
  return (
    <>
      <article className="episode">
        <h2>{episodeData.name}</h2>
      </article>
    </>
  );
};

export default Episode;
