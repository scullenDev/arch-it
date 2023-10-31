import { initMap, map, resetMap, generateMarkers } from "./mapUtils.js";
import { displayBuildings, filterBuildings } from "./utils.js";
import { buildings } from "./buildings.js";
import { cities } from "./cities.js";

// # globals
const citySelect = document.getElementById("cities");

// # populates city dropdown with list of unique cities
const populateCitySelect = (cities) => {
  let html = `
    <option selected value="">-- select city to filter buildings --</option>
    <option value="">View all buildings</option>
  `;

  for (const { city, lat, lng } of cities) {
    html += `<option value="${city}" data-lat="${lat}" data-lng="${lng}">${city}</option>`;
  }

  citySelect.innerHTML = html;
}

const resetMapAndBuildingsResults = () => {
  displayBuildings(buildings);
  generateMarkers(buildings);
  resetMap();
}

// # updates map center and zooms in on city filter
citySelect.addEventListener("change", function ({ target }) {
  // # if no city name is select, display all buildings
  if (!target.value) return resetMapAndBuildingsResults();

  const { lat, lng } = target.querySelector(':checked').dataset;
  const filteredBuildings = filterBuildings(buildings, target.value);
  displayBuildings(filteredBuildings);
  generateMarkers(filteredBuildings);
  map.setCenter({ lat: +lat, lng: +lng });
  map.setZoom(11);
});

initMap();
displayBuildings(buildings);
populateCitySelect(cities);



