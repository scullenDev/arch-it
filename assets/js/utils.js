// # globals
const buildingsSection = document.getElementById("buildings");

// # displays buildings
const displayBuildings = (buildings) => {
  let html = ``;

  for (const { buildingName, address, wikiUrl } of buildings) {
    html += `
      <li>
        <h3><a href="${wikiUrl}" target="_blank">${buildingName}</a></h3>
        <p>${address}</p>
      </li>
    `
  };

  buildingsSection.innerHTML = html;
}  

// # filters array of passed-in buildings to only include buildings with a matching city (used in the buildings data to represent the city)
const filterBuildings = (buildings, city) => {
  return buildings.filter(({ location }) => location.toLowerCase() === city.toLowerCase())
}

// # geocoding utilities
// this function was used to geocode the the city and building list; it is additionally needed if the buildings data is updated and/or needs to be regeocoded
const geocodeLocations = async (arr, addressKey) => {
  const addCoordinates = arr.map(async (obj) => {
    const address = addressKey !== "city"
      ? obj[addressKey]
      : `${obj[addressKey]}, FL`;
    
    const data = await fetch(`https://www.mapquestapi.com/geocoding/v1/address?key=PKgqKSoV6YCz06zWzzat9Oa113wHo7hq&location=${address}`);
    const { results: [{ locations: [{ latLng: { lat, lng } }] }] } = await data.json();
    return { ...obj, lat, lng };
  });

  const geocodedLocations = await Promise.all(addCoordinates);
  return geocodedLocations;
}

export { displayBuildings, filterBuildings, geocodeLocations };