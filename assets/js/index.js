import { googleKey } from "./utils.js";

console.log(googleKey)

// # map setup
let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  let infoWindow;

  map = new Map(document.getElementById("map"), {
    center: { lat: 28.4629237, lng: -81.1550128 },
    zoom: 8,
  });

  // # plotting initial locations on the map, eventually extract into a function
  buildings.forEach(({ lat, lng, buildingName, location }, i) => {
    if (infoWindow) infoWindow.close();

    // ! MAKE THIS DYNAMIC!
    const content = `{building name} in {building location}`;

    infoWindow = new google.maps.InfoWindow({
      content,
      ariaLabel: location,
    });

    const marker = new google.maps.Marker({
      position: { lat, lng },
      label: (i + 1).toString(),
      map: map,
    });

    marker.addListener("click", () => {
      infoWindow.open({
        anchor: marker,
        map,
      });
    });
  })
}

initMap();


// # generating list of unique cities
const cities = [...new Set(buildings.reduce((accum, { location: city }) => [...accum, city], []))];



