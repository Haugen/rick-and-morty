import React from 'react';

import Layout from '../../components/Layout';
import EpisodeList from '../../components/EpisodeList';

const FrontPage = () => {
  const renderHeader = <h1>Rick and Morty episodes!</h1>;
  const renderMain = <EpisodeList />;

  return <Layout header={renderHeader} main={renderMain} />;
};

export default FrontPage;
