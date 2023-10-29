import { buildings } from "./buildings.js";

// # map globals
export let map;
let lastInfoWindow;

export const initMap = async () => {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 28.4629237, lng: -81.1550128 },
    zoom: 8,
  });

  // # plotting initial locations on the map
  generateMarkers(buildings);
}

const generateMarkers = (filteredBuildings) => {
    filteredBuildings.forEach(({ lat, lng, buildingName, address, images }, i) => {
    images = images
      ? images.split(",")
      : [];

    const content = `
      <h3><a href="#">${buildingName}</a></h3>
      <p>${address}</p>
      ${images.length ? `<img src="./assets/photos/${images[0]}" alt="${buildingName}" />` : ""}
    `;

    const infoWindow = new google.maps.InfoWindow({
      content,
      ariaLabel: buildingName,
    });

    const marker = new google.maps.Marker({
      position: { lat, lng },
      label: (i + 1).toString(),
      map: map,
    });

    marker.addListener("click", () => {
      if (lastInfoWindow) lastInfoWindow.close();

      lastInfoWindow = infoWindow;
      infoWindow.open({
        anchor: marker,
        map,
      });
    });
  })
}