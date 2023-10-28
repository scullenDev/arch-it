import { googleKey } from "./utils.js";
import buildings from "./buildings.js";

// # workaround to buy time for the async fetch to retrieve the API key
setTimeout(() => {
  // boilerplate Google Maps setup code; do not modify
  (g => { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => { await (a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = `https://maps.${c}apis.com/maps/api/js?` + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a) })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) })
    ({ key: googleKey, v: "weekly" });
  
  initMap();
}, 500);

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



// # generating list of unique cities
const cities = [...new Set(buildings.reduce((accum, { location: city }) => [...accum, city], []))];



