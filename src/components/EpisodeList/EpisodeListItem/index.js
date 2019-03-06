import React from 'react';

import { Link } from 'react-router-dom';
import Episode from '../../Episode';

const EpisodeListItem = ({ episodeData }) => {
  return (
    <>
      <div className="list-item">
        <h2>{episodeData.name}</h2>
        <Episode episodeData={episodeData} />
        <Link to={'/episode/' + episodeData.id}>Episode details</Link>
      </div>
    </>
  );
};

export default EpisodeListItem;
