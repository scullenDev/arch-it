import { geocodeLocations } from "./utils.js";

// ! I've commented this code out, as the city list is presently stable and it is therefore unnecessary to regenerate it and regeocode it with every render; this will also save on the MapQuest API request allotment 
// // # generating list of unique cities
// const cities = buildings.reduce((accum, { location: city }) => [...accum, city], []);
// const uniqueCities = [...new Set(cities)].sort();
// const uniqueCityObjects = uniqueCities.map(city => ({ city }));

// // # ...then geocoding them
// geocodeLocations(uniqueCityObjects, "city")
//   .then(cities => console.log(cities))
//   .catch(err => console.log(err));

// # city data
export const cities = [
  {
    "city": "Bradenton",
    "lat": 27.4955,
    "lng": -82.57807
  },
  {
    "city": "Cocoa",
    "lat": 28.35226,
    "lng": -80.72618
  },
  {
    "city": "Coral Gables",
    "lat": 25.74923,
    "lng": -80.26295
  },
  {
    "city": "Deland",
    "lat": 29.02786,
    "lng": -81.30545
  },
  {
    "city": "Delray Beach",
    "lat": 26.4649,
    "lng": -80.07419
  },
  {
    "city": "Estero",
    "lat": 26.4309,
    "lng": -81.81055
  },
  {
    "city": "Flagler Beach",
    "lat": 29.48103,
    "lng": -81.12746
  },
  {
    "city": "Fort Lauderdale",
    "lat": 26.12401,
    "lng": -80.14357
  },
  {
    "city": "Fort Myers",
    "lat": 26.64084,
    "lng": -81.86793
  },
  {
    "city": "Hollywood",
    "lat": 26.01067,
    "lng": -80.16026
  },
  {
    "city": "Homestead",
    "lat": 25.4765,
    "lng": -80.46552
  },
  {
    "city": "Jacksonville",
    "lat": 30.33147,
    "lng": -81.65622
  },
  {
    "city": "Jupiter",
    "lat": 26.93277,
    "lng": -80.10189
  },
  {
    "city": "Key Biscayne",
    "lat": 25.68985,
    "lng": -80.16384
  },
  {
    "city": "Key West",
    "lat": 24.5545,
    "lng": -81.80023
  },
  {
    "city": "Lake Wales",
    "lat": 27.90126,
    "lng": -81.59389
  },
  {
    "city": "Lakeland",
    "lat": 28.04419,
    "lng": -81.94786
  },
  {
    "city": "Miami",
    "lat": 25.77481,
    "lng": -80.19773
  },
  {
    "city": "Miami Beach",
    "lat": 25.79339,
    "lng": -80.13493
  },
  {
    "city": "Miami Springs",
    "lat": 25.82116,
    "lng": -80.28452
  },
  {
    "city": "Mount Dora",
    "lat": 28.8009,
    "lng": -81.64368
  },
  {
    "city": "North Miami Beach",
    "lat": 25.93323,
    "lng": -80.16222
  },
  {
    "city": "Orlando",
    "lat": 28.53823,
    "lng": -81.37739
  },
  {
    "city": "Ormond Beach",
    "lat": 29.28558,
    "lng": -81.05555
  },
  {
    "city": "Palm Beach",
    "lat": 26.70306,
    "lng": -80.03661
  },
  {
    "city": "Ponce Inlet",
    "lat": 29.12154,
    "lng": -80.95209
  },
  {
    "city": "Punta Gorda",
    "lat": 26.93295,
    "lng": -82.05289
  },
  {
    "city": "Sarasota",
    "lat": 27.33889,
    "lng": -82.53887
  },
  {
    "city": "St. Augustine",
    "lat": 29.89216,
    "lng": -81.31411
  },
  {
    "city": "St. Petersburg",
    "lat": 27.77119,
    "lng": -82.63876
  },
  {
    "city": "Tallahassee",
    "lat": 30.43977,
    "lng": -84.28065
  },
  {
    "city": "Tampa",
    "lat": 27.94653,
    "lng": -82.45927
  },
  {
    "city": "Winter Park",
    "lat": 28.59454,
    "lng": -81.35069
  }
];