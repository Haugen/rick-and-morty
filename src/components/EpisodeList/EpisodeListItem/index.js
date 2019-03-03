import React from 'react';

import { Link } from 'react-router-dom';

const EpisodeListItem = ({ episodeData }) => {
  return (
    <>
      <article className="episode-list-item">
        <ul>
          <li>ID: {episodeData.id}</li>
          <li>Name: {episodeData.name}</li>
          <li>
            <Link to={'/episode/' + episodeData.id}>Episode details</Link>
          </li>
        </ul>
      </article>
    </>
  );
};

export default EpisodeListItem;
