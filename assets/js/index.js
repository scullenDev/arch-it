import { initMap, map } from "./mapUtils.js";
import { displayResults, filterResults, geocodeLocations } from "./utils.js";
import { buildings } from "./buildings.js";

// # globals
const citySelect = document.getElementById("cities");

// # generating list of unique cities
const cities = buildings.reduce((accum, { location: city }) => [...accum, city], []);
const uniqueCities = [...new Set(cities)].sort();
const uniqueCityObjects = uniqueCities.map(city => ({ city }));

// # ...then geocoding them
geocodeLocations(uniqueCityObjects, "city")
  .then(cities => populateCitySelect(cities))
  .catch(err => console.log(err));

// # populates city dropdown with list of unique cities
const populateCitySelect = (cities) => {
  let html = `<option selected value="">-- select city to filter locations --</option>`;

  for (const { city, lat, lng } of cities) {
    html += `<option value="${city}" data-lat="${lat}" data-lng="${lng}">${city}</option>`;
  }

  citySelect.innerHTML = html;
}

// # updates map center and zooms in on city filter
citySelect.addEventListener("change", function ({ target }) {
  const { lat, lng } = target.querySelector(':checked').dataset;
  const filteredResults = filterResults(buildings, target.value);
  displayResults(filteredResults);
  map.setCenter({ lat: +lat, lng: +lng });
  map.setZoom(11);
});

initMap();

displayResults(buildings);



