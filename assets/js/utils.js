let googleKey;
let mapquestKey;

fetch(".netlify/functions/google-api")
  .then(response => response.json())
  .then(json => {
    googleKey = json.googleApi;
    mapquestKey = json.mapquestApi;
  });

export { googleKey, mapquestKey };