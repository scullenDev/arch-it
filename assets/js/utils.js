let googleKey;
let mapquestKey;

console.log('pl')

fetch("netlify/functions/api")
  .then(response => response.json())
  .then(json => {
    googleKey = json.googleApi;
    console.log('wut?')
    console.log(googleKey)
    mapquestKey = json.mapquestApi;
  });


export { googleKey, mapquestKey };