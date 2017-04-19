const apiKey = 'vRuA7T2f300-GJDEzgMWv1_aCNiL4Lyv';
const baseUrl =
  'https://api.mlab.com/api/1/databases/heroku_txlwplj5/collections';

export const resourceUrl = resource =>
  `${baseUrl}/${resource}?apiKey=${apiKey}`;

export const options = {
  headers: {
    'Content-type': 'application/json'
  }
};
