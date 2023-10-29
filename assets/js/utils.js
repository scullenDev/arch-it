let googleKey;
let mapquestKey;

// # globals
const resultsSection = document.getElementById("results");

// # accesses API keys from Netflify environment variables
fetch("/.netlify/functions/api")
  .then(response => response.json())
  .then(({ googleApi, mapquestApi }) => {
    googleKey = googleApi;
    mapquestKey = mapquestApi;
  });


// # displays results
const displayResults = (arr) => {
  let html = ``;

  arr.forEach(({ buildingName, address }, i) => {
    html += `
      <li>
        <h2>${buildingName}</h2>
        <p>${address}</p>
      </li>
    `
  });

  resultsSection.innerHTML = html;
}  

const filterResults = (results, city) => {
  return results.filter(({ location }) => location === city)
}

// # geocoding utilities
// this function was used to geocode the the city and building list; it is additionally needed if the buildings data is updated and/or needs to be regeocoded
const geocodeLocations = async (arr, addressKey) => {
  const addCoordinates = arr.map(async (obj) => {
    const data = await fetch(`https://www.mapquestapi.com/geocoding/v1/address?key=PKgqKSoV6YCz06zWzzat9Oa113wHo7hq&location=${obj[addressKey]}`);
    const { results: [{ locations: [{ latLng: { lat, lng } }] }] } = await data.json();
    return { ...obj, lat, lng };
  });

  const geocodedLocations = await Promise.all(addCoordinates);
  return geocodedLocations;
}

export { googleKey, mapquestKey, displayResults, filterResults, geocodeLocations };