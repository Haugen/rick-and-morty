import React from 'react';

const Episode = ({ episodeData }) => {
  return !episodeData ? (
    'Loading episode...'
  ) : (
    <>
      <article className="episode">
        <h1>{episodeData.name}</h1>
        <ul>
          <li>
            <span>Episode:</span> {episodeData.episode}
          </li>
          <li>
            <span>Air date:</span> {episodeData.air_date}
          </li>
        </ul>
      </article>
    </>
  );
};

export default Episode;
