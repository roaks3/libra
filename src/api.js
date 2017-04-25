const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = process.env.REACT_APP_API_URL;

export const resourceUrl = resource =>
  `${baseUrl}/${resource}?apiKey=${apiKey}`;

export const options = {
  headers: {
    'Content-type': 'application/json'
  }
};
