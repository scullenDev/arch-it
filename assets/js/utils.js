let googleKey;
let mapquestKey;

// # accesses API keys from Netflify environment variables
fetch("/.netlify/functions/api")
  .then(response => response.json())
  .then(({ googleApi, mapquestApi }) => {
    googleKey = googleApi;
    mapquestKey = mapquestApi;
  });

// # building utilities
// this function is only needed if the buildings data is updated and/or needs to be regeocoded
const geocodeLocations = async (arr, addressKey) => {
  const addCoordinates = arr.map(async (obj) => {
    const data = await fetch(`https://www.mapquestapi.com/geocoding/v1/address?key=PKgqKSoV6YCz06zWzzat9Oa113wHo7hq&location=${obj[addressKey]}`);
    const { results: [{ locations: [{ latLng: { lat, lng } }] }] } = await data.json();
    return { ...obj, lat, lng };
  });

  const geocodedLocations = await Promise.all(addCoordinates);
  return geocodedLocations;
}

// const geocodeAddresses = async () => {
//   const addCoordinates = buildings.map(async (building) => {
//   const data = await fetch(`https://www.mapquestapi.com/geocoding/v1/address?key=&location=${building.address}`);
//   const { results: [{ locations: [{ latLng: { lat, lng } }]}] } = await data.json();
//   return { ...building, lat, lng };
// });

//   const buildingsWithCoordinates = await Promise.all(addCoordinates);
//   console.log(buildingsWithCoordinates);
// }

export { googleKey, mapquestKey, geocodeLocations };