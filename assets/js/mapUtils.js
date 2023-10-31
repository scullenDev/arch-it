import { buildings } from "./buildings.js";

// # map globals
export let map;
let lastInfoWindow;
const mapMarkers = [];
const floridaCenter = { lat: 28.4629237, lng: -81.1550128 };
const initialZoom = 8;

export const initMap = async () => {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: floridaCenter,
    zoom: initialZoom,
  });

  // # plotting initial locations on the map
  generateMarkers(buildings);
}

export const resetMap = () => {
  map.setCenter(floridaCenter);
  map.setZoom(initialZoom);
}

export const generateMarkers = (buildings) => {
  if (mapMarkers.length) removeMarkers();

  buildings.forEach(({ lat, lng, buildingName, address, images, wikiUrl }, i) => {
    images = images
      ? images.split(",")
      : [];

    const content = `
      <article class="info-window">
        <h3><a href="${wikiUrl}" target="_blank">${buildingName}</a></h3>
        <p>${address}</p>
        ${images.length ? `<img src="./assets/photos/${images[0]}" alt="${buildingName}" />` : ""}
      </article>
    `;

    const infoWindow = new google.maps.InfoWindow({
      content,
      ariaLabel: buildingName,
    });

    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: map,
      label: (i + 1).toString()
    });

    mapMarkers.push(marker);

    marker.addListener("click", () => {
      if (lastInfoWindow) lastInfoWindow.close();

      lastInfoWindow = infoWindow;
      infoWindow.open({
        anchor: marker,
        map,
      });
    });
  });
}

const removeMarkers = () => {
  for (const marker of mapMarkers) {
    marker.setMap(null);
  }

  mapMarkers.length = 0;
}