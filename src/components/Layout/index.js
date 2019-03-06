import React from 'react';

const Layout = props => {
  let header,
    main = null;

  if (props.header) {
    header = <section id="site-header">{props.header}</section>;
  }

  if (props.main) {
    main = <section id="main-content">{props.main}</section>;
  }

  return (
    <>
      {header}
      {main}
    </>
  );
};

export default Layout;
