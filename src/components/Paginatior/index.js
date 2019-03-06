import React from 'react';

const Paginator = props => {
  function extractPageNumber(url) {
    const page = Number(url.substr(url.length - 1));
    return page;
  }

  let prevPage = props.info.prev ? extractPageNumber(props.info.prev) : null;
  let nextPage = props.info.next ? extractPageNumber(props.info.next) : null;

  return (
    <nav className="pagination-wrapper">
      <ul className="pagination">
        <li className="page-item">
          <button
            disabled={!prevPage}
            onClick={() => props.fetchNewEpisodes(prevPage || null)}
          >
            Previous
          </button>
        </li>
        <li className="page-item">
          <button
            disabled={!nextPage}
            onClick={() => props.fetchNewEpisodes(nextPage || null)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Paginator;
