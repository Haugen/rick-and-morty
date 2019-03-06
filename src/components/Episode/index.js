import React from 'react';

const Episode = ({ episodeData }) => {
  return !episodeData ? (
    'Loading episode...'
  ) : (
    <>
      <article className="episode">
        <ul>
          <li>
            <strong>Episode:</strong> {episodeData.episode}
          </li>
          <li>
            <strong>Air date:</strong> {episodeData.air_date}
          </li>
        </ul>
      </article>
    </>
  );
};

export default Episode;
