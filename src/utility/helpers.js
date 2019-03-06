// Base URL for API.
module.exports.BASE_URL = 'https://rickandmortyapi.com/api';
// module.exports.BASE_URL = 'http://localhost:3001';

// Helper function used to extract an array of ids based on an array of urls.
module.exports.getIdsFromUrl = urls => {
  const ids = [];

  if (Array.isArray(urls)) {
    urls.forEach(url => {
      let splitUrl = url.split('/');
      let id = splitUrl[splitUrl.length - 1];
      ids.push(id);
    });
  }

  return ids;
};
