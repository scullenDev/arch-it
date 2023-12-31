import { geocodeLocations } from "./utils.js";

// # building data
export const buildings = [
  {
    "buildingName": "Alfred I. duPont Building",
    "location": "Miami",
    "address": "169 E Flagler St, Miami, FL 33131",
    "architecturalStyle": "Art Deco",
    "notableFeatures": "Historic skyscraper, distinctive Art Deco design",
    "yearBuilt": "1937",
    "architect": "Marsh and Saxelbye",
    "wikiUrl": "https://en.wikipedia.org/wiki/Alfred_I._DuPont_Building",
    "images": "Miami_Dupont.jpg",
    "lat": 25.77421,
    "lng": -80.19063
  },
  {
    "buildingName": "Alhambra Dinner Theatre",
    "location": "Jacksonville",
    "address": "12000 Beach Blvd, Jacksonville, FL 32246",
    "architecturalStyle": "Moorish Revival",
    "notableFeatures": "Historic theater and dining venue",
    "yearBuilt": "1967",
    "architect": "Roy Benjamin",
    "wikiUrl": "https://en.wikipedia.org/wiki/Alhambra_Dinner_Theatre",
    "images": "Jacksonville_Alhambra.jpg",
    "lat": 30.28629,
    "lng": -81.50182
  },
  {
    "buildingName": "Art Deco Historic District",
    "location": "Miami Beach",
    "address": "1001 Ocean Dr, Miami Beach, FL 33139",
    "architecturalStyle": "Art Deco",
    "notableFeatures": "White and pastel-colored stucco buildings in South Beach",
    "yearBuilt": "1930-1950",
    "architect": "L. Murray Dixon, Henry Hohauser, Albert Anis",
    "wikiUrl": "https://en.wikipedia.org/wiki/Miami_Beach_Architectural_District",
    "images": "Miami_ArtDeco_1.jpg,Miami_ArtDeco_2.jpg",
    "lat": 25.78044,
    "lng": -80.13062
  },
  {
    "buildingName": "Bass Museum of Art",
    "location": "Miami Beach",
    "address": "2100 Collins Ave, Miami Beach, FL 33139",
    "architecturalStyle": "Contemporary",
    "notableFeatures": "Contemporary art museum, sleek",
    "yearBuilt": "1964",
    "architect": "Russell Pancoast; Arata Isozaki",
    "wikiUrl": "https://en.wikipedia.org/wiki/Bass_Museum",
    "images": "Miami_Bass.jpg",
    "lat": 25.7974,
    "lng": -80.13023
  },
  {
    "buildingName": "Biltmore Hotel",
    "location": "Coral Gables",
    "address": "1200 Anastasia Ave, Coral Gables, FL 33134",
    "architecturalStyle": "Spanish Colonial Revival",
    "notableFeatures": "Grand tower, frescoes, historic swimming pool",
    "yearBuilt": "1926",
    "architect": "Schultze and Weaver",
    "wikiUrl": "https://en.wikipedia.org/wiki/Biltmore_Hotel",
    "images": "CoralGables_Biltmore_1.jpg,CoralGables_Biltmore_2.jpg",
    "lat": 25.74151,
    "lng": -80.27876
  },
  {
    "buildingName": "Edison Hotel",
    "location": "Miami Beach",
    "address": "960 Ocean Dr, Miami Beach, FL 33139",
    "architecturalStyle": "Mediterranean Revival",
    "notableFeatures": "Historic hotel, Spanish-style architecture",
    "yearBuilt": "1926",
    "architect": "Albert Anis",
    "wikiUrl": "https://en.m.wikipedia.org/wiki/File:Miami_Beach_-_South_Beach_Buildings_-_Edison_Hotel_on_Ocean_Drive.jpg",
    "images": "Miami_Edison.jpg",
    "lat": 25.78018,
    "lng": -80.13068
  },
  {
    "buildingName": "Bok Tower Gardens",
    "location": "Lake Wales",
    "address": "1151 Tower Blvd, Lake Wales, FL 33853",
    "architecturalStyle": "Art Deco",
    "notableFeatures": "Singing tower, lush gardens",
    "yearBuilt": "1929",
    "architect": "Milton B. Medary",
    "wikiUrl": "https://en.wikipedia.org/wiki/Bok_Tower_Gardens",
    "images": "LakeWales_BokTower_1.jpg,LakeWales_BokTower_2.jpg",
    "lat": 27.91567,
    "lng": -81.56601
  },
  {
    "buildingName": "Bonnet House Museum & Gardens",
    "location": "Fort Lauderdale",
    "address": "900 N Birch Rd, Fort Lauderdale, FL 33304",
    "architecturalStyle": "Vernacular",
    "notableFeatures": "Artist's retreat, lush gardens",
    "yearBuilt": "1920",
    "architect": "Frederic Clay Bartlett",
    "wikiUrl": "https://en.wikipedia.org/wiki/Bonnet_House",
    "images": "FortLauderdale_Bonnett_1.jpg,FortLauderdale_Bonnett_2.jpg",
    "lat": 26.136535,
    "lng": -80.105563
  },
  {
    "buildingName": "Ca' d'Zan Mansion",
    "location": "Sarasota",
    "address": "5401 Bay Shore Rd, Sarasota, FL 34243",
    "architecturalStyle": "Venetian Gothic Revival",
    "notableFeatures": "Opulent mansion, part of the Ringling complex",
    "yearBuilt": "1924",
    "architect": "Dwight James Baum",
    "wikiUrl": "https://en.wikipedia.org/wiki/Ca%27_d%27Zan",
    "images": "Sarasota_Cadzan_1.jpg,Sarasota_Cadzan_2.jpg",
    "lat": 27.38094,
    "lng": -82.5598
  },
  {
    "buildingName": "Casa Feliz Historic Home Museum",
    "location": "Winter Park",
    "address": "656 N Park Ave, Winter Park, FL 32789",
    "architecturalStyle": "Mediterranean Revival",
    "notableFeatures": "Historic home, Spanish-style architecture",
    "yearBuilt": "1933",
    "architect": "James Gamble Rogers II",
    "wikiUrl": "https://en.wikipedia.org/wiki/Robert_Bruce_Barbour_House",
    "images": "WinterPark_CasaFeliz.jpg",
    "lat": 28.60303,
    "lng": -81.34954
  },
  {
    "buildingName": "Cloisters of the Monastery of Saint Bernard de Clairvaux (\"Ancient Spanish Monastery\")",
    "location": "North Miami Beach",
    "address": "16711 W Dixie Hwy, North Miami Beach, FL 33160",
    "architecturalStyle": "Cistercian Romanesque",
    "notableFeatures": "Originally built in Sacramenia in Segovia, Spain",
    "yearBuilt": "",
    "architect": "Unknown",
    "wikiUrl": "https://en.wikipedia.org/wiki/St._Bernard_de_Clairvaux_Church",
    "images": "Miami_Cloisters.jpg",
    "lat": 25.93059,
    "lng": -80.15526
  },
  {
    "buildingName": "Cocoa Village Playhouse (\"Aladdin Theater\")",
    "location": "Cocoa",
    "address": "300 Brevard Ave, Cocoa, FL 32922",
    "architecturalStyle": "Neoclassical Revival",
    "notableFeatures": "Historic theater, classical architecture",
    "yearBuilt": "1924",
    "architect": "Richard Rummell",
    "wikiUrl": "https://en.wikipedia.org/wiki/Aladdin_Theater",
    "images": "Cocoa_AladdinTheater.jpg",
    "lat": 28.35503,
    "lng": -80.72622
  },
  {
    "buildingName": "Coconut Grove Playhouse",
    "location": "Miami",
    "address": "3500 Main Hwy, Miami, FL 33133",
    "architecturalStyle": "Mediterranean Revival",
    "notableFeatures": "Historic theater with distinctive architecture",
    "yearBuilt": "1926",
    "architect": "Kiehnel and Elliott",
    "wikiUrl": "https://en.wikipedia.org/wiki/Coconut_Grove_Playhouse",
    "images": "CoconutGrove_Playhouse.jpg",
    "lat": 25.72599,
    "lng": -80.24447
  },
  {
    "buildingName": "Coral Castle",
    "location": "Homestead",
    "address": "28655 S Dixie Hwy, Homestead, FL 33033",
    "architecturalStyle": "Coral Stone Sculpture Park",
    "notableFeatures": "Mysterious stone structures, single-handedly built",
    "yearBuilt": "1923",
    "architect": "Edward Leedskalnin",
    "wikiUrl": "https://en.wikipedia.org/wiki/Coral_Castle",
    "images": "Homestead_CoralCastle_1.jpg,Homestead_CoralCastle_2.jpg",
    "lat": 25.50043,
    "lng": -80.4447
  },
  {
    "buildingName": "Coral Gables City Hall",
    "location": "Coral Gables",
    "address": "405 Biltmore Way, Coral Gables, FL 33134",
    "architecturalStyle": "Mediterranean Revival",
    "notableFeatures": "Built of limestone with a stuccoed exterior and Corinthian colonnade",
    "yearBuilt": "1928",
    "architect": "Phineas Paist and Harold Steward",
    "wikiUrl": "https://en.wikipedia.org/wiki/Coral_Gables_City_Hall",
    "images": "CoralGables_CityHall.jpg",
    "lat": 25.74904,
    "lng": -80.26448
  },
  {
    "buildingName": "Courthouse Tower",
    "location": "Miami",
    "address": "175 NW 1st Ave, Miami, FL 33128",
    "architecturalStyle": "Modernist",
    "notableFeatures": "Modernist skyscraper, distinctive architectural design",
    "yearBuilt": "1985",
    "architect": "Skidmore, Owings & Merrill",
    "wikiUrl": "https://en.wikipedia.org/wiki/Lawson_Thomas",
    "images": "Miami_CourthouseTower.jpg",
    "lat": 25.77582,
    "lng": -80.19528
  },
  {
    "buildingName": "Crisp-Ellert Art Museum",
    "location": "St. Augustine",
    "address": "48 Sevilla Street. Augustine, FL 32084",
    "architecturalStyle": "Modernist",
    "notableFeatures": "Contemporary art museum, modern architecture",
    "yearBuilt": "2008",
    "architect": "KBJ Architects",
    "wikiUrl": "https://www.flagler.edu/information-for/community-members/arts--culture/crisp-ellert-art-museum/",
    "images": null,
    "lat": 29.89281,
    "lng": -81.316
  },
  {
    "buildingName": "Curtiss Mansion",
    "location": "Miami Springs",
    "address": "500 Deer Run, Miami Springs, FL 33166",
    "architecturalStyle": "Pueblo Mission Revival",
    "notableFeatures": "V-shaped home constructed of hollow clay with a rough textured stucco exterior",
    "yearBuilt": "1925",
    "architect": "Martin L. Hampton",
    "wikiUrl": "https://en.wikipedia.org/wiki/Glenn_Curtiss_Mansion",
    "images": "MiamiSprings_Curtiss.jpg",
    "lat": 25.81051,
    "lng": -80.28229
  },
  {
    "buildingName": "De Soto National Memorial",
    "location": "Bradenton",
    "address": "8300 De Soto Memorial Hwy, Bradenton, FL 34209",
    "architecturalStyle": "Vernacular",
    "notableFeatures": "Historic park, tribute to Hernando de Soto",
    "yearBuilt": "1948",
    "architect": "Unknown",
    "wikiUrl": "https://en.wikipedia.org/wiki/De_Soto_National_Memorial",
    "images": "Bradenton_DeSoto.jpg",
    "lat": 27.52165,
    "lng": -82.64458
  },
  {
    "buildingName": "Deering Estate at Cutler",
    "location": "Miami",
    "address": "16701 SW 72nd Ave, Miami, FL 33157",
    "architecturalStyle": "Mediterranean Revival",
    "notableFeatures": "Historic mansion with bayfront location",
    "yearBuilt": "1916",
    "architect": "Charles Deering",
    "wikiUrl": "https://en.wikipedia.org/wiki/Charles_Deering_Estate",
    "images": null,
    "lat": 25.61552,
    "lng": -80.30841
  },
  {
    "buildingName": "Donnelly House",
    "location": "Mount Dora",
    "address": "535 N Donnelly St, Mount Dora, FL 32757",
    "architecturalStyle": "Queen Anne",
    "notableFeatures": "Historic home built for prominent real estate family",
    "yearBuilt": "1893",
    "architect": "George Franklin Barber",
    "wikiUrl": "https://en.wikipedia.org/wiki/Donnelly_House_(Mount_Dora,_Florida)",
    "images": "MtDora_Donnelly.jpg",
    "lat": 28.80101,
    "lng": -81.64471
  },
  {
    "buildingName": "Edison and Ford Winter Estates",
    "location": "Fort Myers",
    "address": "2350 McGregor Blvd, Fort Myers, FL 33901",
    "architecturalStyle": "Mediterranean Revival",
    "notableFeatures": "Historic homes, lush gardens",
    "yearBuilt": "1885",
    "architect": "Unknown",
    "wikiUrl": "https://en.wikipedia.org/wiki/Edison_and_Ford_Winter_Estates",
    "images": "FortMyers_EdisonFord_1.jpg,FortMyers_EdisonFord_2.jpg",
    "lat": 26.63402,
    "lng": -81.88018
  },
  {
    "buildingName": "Florida Southern College, Frank Lloyd Wright Architecture",
    "location": "Lakeland",
    "address": "111 Lake Hollingsworth Dr, Lakeland, FL 33801",
    "architecturalStyle": "Organic Architecture",
    "notableFeatures": "Collection of Frank Lloyd Wright's designs",
    "yearBuilt": "1938",
    "architect": "Frank Lloyd Wright",
    "wikiUrl": "https://en.wikipedia.org/wiki/Florida_Southern_College",
    "images": "Lakeland_FloridaSouthernCollege_1.jpg,Lakeland_FloridaSouthernCollege_2.jpg",
    "lat": 28.02981,
    "lng": -81.94394
  },
  {
    "buildingName": "Fontainebleau Miami Beach",
    "location": "Miami Beach",
    "address": "4441 Collins Ave, Miami Beach, FL 33140",
    "architecturalStyle": "Modernist",
    "notableFeatures": "Iconic curved architecture, luxury resort",
    "yearBuilt": "1954",
    "architect": "Morris Lapidus",
    "wikiUrl": "https://en.wikipedia.org/wiki/Fontainebleau_Miami_Beach",
    "images": "Miami_Fontainebleau.jpg",
    "lat": 25.81797,
    "lng": -80.12275
  },
  {
    "buildingName": "Freedom Tower",
    "location": "Miami",
    "address": "600 Biscayne Blvd, Miami, FL 33132",
    "architecturalStyle": "Mediterranean Revival",
    "notableFeatures": "Historic architecture, once served as a newspaper HQ",
    "yearBuilt": "1925",
    "architect": "George A. Fuller Co.",
    "wikiUrl": "https://en.wikipedia.org/wiki/Freedom_Tower_(Miami)",
    "images": "Miami_FreedomTower.jpg",
    "lat": 25.78006,
    "lng": -80.1897
  },
  {
    "buildingName": "Jupiter Inlet Lighthouse and Museum",
    "location": "Jupiter",
    "address": "500 Captain Armours Way, Jupiter, FL 33469",
    "architecturalStyle": "Gothic Revival",
    "notableFeatures": "Historic lighthouse, maritime museum",
    "yearBuilt": "1860",
    "architect": "George Gordon Meade Morris",
    "wikiUrl": "https://en.wikipedia.org/wiki/Jupiter_Inlet_Light#Jupiter_Inlet_Lighthouse_and_Museum",
    "images": "Jupiter_Lighthouse.jpg",
    "lat": 26.94852,
    "lng": -80.08453
  },
  {
    "buildingName": "Koreshan Unity Settlement Historic District",
    "location": "Estero",
    "address": "3800 Corkscrew Rd, Estero, FL 33928",
    "architecturalStyle": "Vernacular",
    "notableFeatures": "Historic settlement, unique architectural features",
    "yearBuilt": "1894",
    "architect": "Cyrus Teed",
    "wikiUrl": "https://en.wikipedia.org/wiki/Koreshan_State_Historic_Site",
    "images": "Estero_Koreshan.jpg",
    "lat": 26.43118,
    "lng": -81.81081
  },
  {
    "buildingName": "Lightner Museum",
    "location": "St. Augustine",
    "address": "75 King St, St. Augustine, FL 32084",
    "architecturalStyle": "Spanish Renaissance Revival",
    "notableFeatures": "Former hotel turned museum, opulent interior",
    "yearBuilt": "1887",
    "architect": "Carrère and Hastings",
    "wikiUrl": "https://en.wikipedia.org/wiki/Lightner_Museum",
    "images": "StAugustine_LightnerMuseum.jpg",
    "lat": 29.89213,
    "lng": -81.31427
  },
  {
    "buildingName": "Little White House",
    "location": "Key West",
    "address": "111 Front St, Key West, FL 33040",
    "architecturalStyle": "Vernacular",
    "notableFeatures": "Historic residence, presidential retreat",
    "yearBuilt": "1890",
    "architect": "Unknown",
    "wikiUrl": "https://en.wikipedia.org/wiki/Little_White_House",
    "images": "KeyWest_LittleWhiteHouse.jpg",
    "lat": 24.55634,
    "lng": -81.80656
  },
  {
    "buildingName": "Mar-a-Lago National Historic Landmark",
    "location": "Palm Beach",
    "address": "1100 S Ocean Blvd, Palm Beach, FL 33480",
    "architecturalStyle": "Mediterranean Revival",
    "notableFeatures": "Historic mansion, Spanish-style architecture",
    "yearBuilt": "1927",
    "architect": "Joseph Urban",
    "wikiUrl": "https://en.wikipedia.org/wiki/Mar-a-Lago",
    "images": "PalmBeach_Maralago.jpg",
    "lat": 26.67608,
    "lng": -80.03765
  },
  {
    "buildingName": "Merrick House",
    "location": "Coral Gables",
    "address": "907 Coral Way, Coral Gables, FL 33134",
    "architecturalStyle": "Mediterranean Revival",
    "notableFeatures": "Childhood home of George Merrick, city founder",
    "yearBuilt": "1905",
    "architect": "Richard Kiehnel",
    "wikiUrl": "https://en.wikipedia.org/wiki/Coral_Gables_House",
    "images": "CoralGables_MerrickHouse.jpg",
    "lat": 25.74887,
    "lng": -80.27326
  },
  {
    "buildingName": "Miami City Hall",
    "location": "Miami",
    "address": "3500 Pan American Dr, Miami, FL 33133",
    "architecturalStyle": "Neoclassical Revival",
    "notableFeatures": "Classical architecture, historic government building",
    "yearBuilt": "1934",
    "architect": "William Delano and Charles Aldrich",
    "wikiUrl": "https://en.wikipedia.org/wiki/Miami_City_Hall",
    "images": "Miami_CityHall.jpg",
    "lat": 25.72787,
    "lng": -80.23412
  },
  {
    "buildingName": "Miami Marine Stadium",
    "location": "Miami",
    "address": "3501 Rickenbacker Cswy, Miami, FL 33149",
    "architecturalStyle": "Modernist",
    "notableFeatures": "Cantilevered concrete roof, waterfront location",
    "yearBuilt": "1963",
    "architect": "Hilario Candela",
    "wikiUrl": "https://en.wikipedia.org/wiki/Miami_Marine_Stadium",
    "images": "Miami_MarineStadium.jpg",
    "lat": 25.74162,
    "lng": -80.1711
  },
  {
    "buildingName": "Miami Tower",
    "location": "Miami",
    "address": "100 SE 2nd St, Miami, FL 33131",
    "architecturalStyle": "High Rise",
    "notableFeatures": "Gently curved facade facing Miami River and Biscayne Bay",
    "yearBuilt": "1987",
    "architect": "I.M. Pei",
    "wikiUrl": "https://en.wikipedia.org/wiki/Miami_Tower",
    "images": "Miami_MiamiTower_1.jpg,Miami_MiamiTower_2.jpg",
    "lat": 25.77258,
    "lng": -80.19118
  },
  {
    "buildingName": "Old Town Hall and Firehouse Museum",
    "location": "Punta Gorda",
    "address": "900 West Marion Avenue, Punta Gorda, FL 33950",
    "architecturalStyle": "Mediterranean Revival",
    "notableFeatures": "Historic town hall and firehouse",
    "yearBuilt": "1928",
    "architect": "Unknown",
    "wikiUrl": "https://militaryheritagemuseum.org/",
    "images": null,
    "lat": 26.92867,
    "lng": -82.05934
  },
  {
    "buildingName": "Ormond Memorial Art Museum & Gardens",
    "location": "Ormond Beach",
    "address": "78 E Granada Blvd, Ormond Beach, FL 32176",
    "architecturalStyle": "Mediterranean Revival",
    "notableFeatures": "Art museum, beautiful gardens",
    "yearBuilt": "1946",
    "architect": "Sam Moltzahn",
    "wikiUrl": "https://en.wikipedia.org/wiki/Ormond_Memorial_Art_Museum_and_Gardens",
    "images": null,
    "lat": 29.28994,
    "lng": -81.04509
  },
  {
    "buildingName": "Pena Peck House",
    "location": "St. Augustine",
    "address": "143 St. George St, St. Augustine, FL 32084",
    "architecturalStyle": "Colonial Revival",
    "notableFeatures": "Historic house museum, colonial architecture",
    "yearBuilt": "1750",
    "architect": "Unknown",
    "wikiUrl": "https://en.wikipedia.org/wiki/St._Augustine_Town_Plan_Historic_District#/media/File:Pena-Peck_House.jpg",
    "images": "StAugustine_PenaPeck.jpg",
    "lat": 29.89345,
    "lng": -81.31283
  },
  {
    "buildingName": "Pérez Art Museum Miami",
    "location": "Miami",
    "address": "1103 Biscayne Blvd, Miami, FL 33132",
    "architecturalStyle": "Contemporary",
    "notableFeatures": "Striking modern architecture, hanging vertical garden",
    "yearBuilt": "2013",
    "architect": "Herzog & de Meuron",
    "wikiUrl": "https://en.wikipedia.org/wiki/P%C3%A9rez_Art_Museum_Miami",
    "images": "Miami_Perez.jpg",
    "lat": 25.78487,
    "lng": -80.18921
  },
  {
    "buildingName": "Ponce de Leon Inlet Lighthouse and Museum",
    "location": "Ponce Inlet",
    "address": "4931 S Peninsula Dr, Ponce Inlet, FL 32127",
    "architecturalStyle": "Gothic Revival",
    "notableFeatures": "Historic lighthouse, maritime museum",
    "yearBuilt": "1887",
    "architect": "Francis Hopkinson Smith",
    "wikiUrl": "https://en.wikipedia.org/wiki/Ponce_de_Leon_Inlet_Light",
    "images": "PonceInlet_PonceLighthouse.jpg",
    "lat": 29.08097,
    "lng": -80.92849
  },
  {
    "buildingName": "Porcher House",
    "location": "Cocoa",
    "address": "434 Delannoy Ave, Cocoa, FL 32922",
    "architecturalStyle": "Classic Revival",
    "notableFeatures": "Historic home made of coquina rock",
    "yearBuilt": "1916",
    "architect": "Unknown",
    "wikiUrl": "https://en.wikipedia.org/wiki/Porcher_House",
    "images": "Cocoa_Porcher.jpg",
    "lat": 28.35377,
    "lng": -80.72534
  },
  {
    "buildingName": "Ransom School House Museum \"The Pagoda\"",
    "location": "Miami",
    "address": "1 Ransom Everglades School, Coconut Grove, Miami, FL 33133",
    "architecturalStyle": "Vernacular",
    "notableFeatures": "Historic schoolhouse, early 20th-century architecture",
    "yearBuilt": "1921",
    "architect": "Unknown",
    "wikiUrl": "https://en.wikipedia.org/wiki/Ransom_School_%22Pagoda%22",
    "images": null,
    "lat": 25.72327,
    "lng": -80.24528
  },
  {
    "buildingName": "Ringling Museum of Art",
    "location": "Sarasota",
    "address": "5401 Bay Shore Rd, Sarasota, FL 34243",
    "architecturalStyle": "Mediterranean Revival",
    "notableFeatures": "Ca' d'Zan Mansion, Italian palazzo architecture",
    "yearBuilt": "1927",
    "architect": "John H. Phillips",
    "wikiUrl": "https://en.wikipedia.org/wiki/John_and_Mable_Ringling_Museum_of_Art",
    "images": "Sarasota_Ringling_1.jpg,Sarasota_Ringling_2.jpg",
    "lat": 27.38094,
    "lng": -82.5598
  },
  {
    "buildingName": "Santa Maria del Mar Catholic Church",
    "location": "Flagler Beach",
    "address": "915 N Central Ave, Flagler Beach, FL 32136",
    "architecturalStyle": "Modernist",
    "notableFeatures": "Unique modernist church design",
    "yearBuilt": "1967",
    "architect": "Anthony J. DePace",
    "wikiUrl": "https://smdmcc.org/",
    "images": "Flagler_SantaMariaChurch.jpg",
    "lat": 29.48622,
    "lng": -81.13145
  },
  {
    "buildingName": "Seminole Hard Rock Hotel & Casino Hollywood",
    "location": "Hollywood",
    "address": "1 Seminole Way, Hollywood, FL 33314",
    "architecturalStyle": "Contemporary",
    "notableFeatures": "Iconic guitar-shaped hotel, modern design",
    "yearBuilt": "2004",
    "architect": "Klai Juba Wald Architects",
    "wikiUrl": "https://en.wikipedia.org/wiki/Seminole_Hard_Rock_Hotel_%26_Casino_Hollywood",
    "images": "Hollywood_SeminoleHardRock_1.jpg,Hollywood_SeminoleHardRock_2.jpg",
    "lat": 26.051,
    "lng": -80.210599
  },
  {
    "buildingName": "Spady Cultural Heritage Museum",
    "location": "Delray Beach",
    "address": "170 NW 5th Ave, Delray Beach, FL 33444",
    "architecturalStyle": "Vernacular",
    "notableFeatures": "African American heritage museum, historic architecture",
    "yearBuilt": "1926",
    "architect": "Samuel Ogren Sr.",
    "wikiUrl": "https://en.wikipedia.org/wiki/Spady_Cultural_Heritage_Museum",
    "images": "Delray_Spady.jpg",
    "lat": 26.46474,
    "lng": -80.07851
  },
  {
    "buildingName": "St. Augustine Lighthouse & Museum",
    "location": "St. Augustine",
    "address": "100 Red Cox Dr, St. Augustine, FL 32080",
    "architecturalStyle": "Colonial Revival",
    "notableFeatures": "Historic lighthouse, maritime museum",
    "yearBuilt": "1874",
    "architect": "Paul J. Pelz",
    "wikiUrl": "https://en.wikipedia.org/wiki/St._Augustine_Light",
    "images": "StAugustine_Lighthouse.jpg",
    "lat": 29.88648,
    "lng": -81.28774
  },
  {
    "buildingName": "St. George Street",
    "location": "St. Augustine",
    "address": "St George St, St. Augustine, FL 32084",
    "architecturalStyle": "Spanish Colonial Revival",
    "notableFeatures": "Historic district, cobblestone street",
    "yearBuilt": "16th century",
    "architect": "N/A",
    "wikiUrl": "https://en.wikipedia.org/wiki/St._Augustine,_Florida",
    "images": "StAugustine_StGeorgeStreet.jpg",
    "lat": 29.897789,
    "lng": -81.313597
  },
  {
    "buildingName": "Stetson Mansion",
    "location": "Deland",
    "address": "1031 Camphor Ln, DeLand, FL 32720",
    "architecturalStyle": "Vernacular",
    "notableFeatures": "A blend of cottage, Gothic, Tudor, Moorish, and Polynesian details",
    "yearBuilt": "1886",
    "architect": "George T. Pearson",
    "wikiUrl": "https://en.wikipedia.org/wiki/John_B._Stetson_House",
    "images": "Deland_StetsonMansion.jpg",
    "lat": 29.02278,
    "lng": -81.32302
  },
  {
    "buildingName": "Stiltsville",
    "location": "Key Biscayne",
    "address": "Crandon Blvd, Key Biscayne, FL 33149",
    "architecturalStyle": "Shack on stilts",
    "notableFeatures": "Wooden stilt homes built on reinforced concrete pilings",
    "yearBuilt": "1933",
    "architect": "N/A",
    "wikiUrl": "https://en.wikipedia.org/wiki/Stiltsville",
    "images": "Miami_Stiltsville_1.jpg,Miami_Stiltsville_2.jpg",
    "lat": 25.70441,
    "lng": -80.15928
  },
  {
    "buildingName": "Sunken Gardens",
    "location": "St. Petersburg",
    "address": "1825 4th St N, St. Petersburg, FL 33704",
    "architecturalStyle": "Vernacular",
    "notableFeatures": "Lush botanical gardens, historic horticultural attraction",
    "yearBuilt": "1903",
    "architect": "George Turner Sr.",
    "wikiUrl": "https://en.wikipedia.org/wiki/Sunken_Gardens_(Florida)",
    "images": "StPetersburg_SunkenGardens.jpg",
    "lat": 27.78949,
    "lng": -82.63838
  },
  {
    "buildingName": "Tampa Bay Hotel \"Henry B. Plant Museum\"",
    "location": "Tampa",
    "address": "401 W Kennedy Blvd, Tampa, FL 33606",
    "architecturalStyle": "Moorish Revival",
    "notableFeatures": "Historic hotel, distinctive minarets",
    "yearBuilt": "1891",
    "architect": "J.A. Wood",
    "wikiUrl": "https://en.wikipedia.org/wiki/Henry_B._Plant_Museum",
    "images": "Tampa_TampaBayHotel_1.jpg,Tamp_TampaBayHotel.jpg",
    "lat": 27.94541,
    "lng": -82.46341
  },
  {
    "buildingName": "Tampa Museum of Art",
    "location": "Tampa",
    "address": "120 W Gasparilla Plaza, Tampa, FL 33602",
    "architecturalStyle": "Contemporary",
    "notableFeatures": "Sleek, curved exterior, cantilevered section",
    "yearBuilt": "2010",
    "architect": "Stanley Saitowitz",
    "wikiUrl": "https://en.wikipedia.org/wiki/Tampa_Museum_of_Art",
    "images": "Tampa_MuseumofArt.jpg",
    "lat": 27.94966,
    "lng": -82.46277
  },
  {
    "buildingName": "The Breakers Palm Beach",
    "location": "Palm Beach",
    "address": "1 S County Rd, Palm Beach, FL 33480",
    "architecturalStyle": "Italian Renaissance Revival",
    "notableFeatures": "Opulent historic architecture",
    "yearBuilt": "1926",
    "architect": "Schultze and Weaver",
    "wikiUrl": "https://en.wikipedia.org/wiki/The_Breakers_(hotel)",
    "images": "PalmBeach_TheBreakers.jpg",
    "lat": 26.71478,
    "lng": -80.03465
  },
  {
    "buildingName": "Florida State Capitol",
    "location": "Tallahassee",
    "address": "400 S Monroe St, Tallahassee, FL 32399",
    "architecturalStyle": "Contemporary",
    "notableFeatures": "Modern government buildings",
    "yearBuilt": "Ongoing",
    "architect": "Reynolds, Smith & Hills and Edward Durell Stone",
    "wikiUrl": "https://en.wikipedia.org/wiki/Florida_State_Capitol",
    "images": "Tallahassee_FloridaStateCapitol_1.jpg,Tallahassee_Florida_State_Capitol_2.jpg",
    "lat": 30.43875,
    "lng": -84.28066
  },
  {
    "buildingName": "The Dali Museum",
    "location": "St. Petersburg",
    "address": "1 Dali Blvd, St. Petersburg, FL 33701",
    "architecturalStyle": "Modernist",
    "notableFeatures": "Unique \"Enigma\" glass structure",
    "yearBuilt": "2011",
    "architect": "Yann Weymouth",
    "wikiUrl": "https://en.wikipedia.org/wiki/Dali_Museum",
    "images": "StPetersburg_Dali_1.jpg,StPetersburg_Dali_2.jpg,StPetersburg_Dali_3.jpg",
    "lat": 27.770902,
    "lng": -82.632852
  },
  {
    "buildingName": "The James Museum of Western and Wildlife Art",
    "location": "St. Petersburg",
    "address": "150 Central Ave, St. Petersburg, FL 33701",
    "architecturalStyle": "Modernist",
    "notableFeatures": "Unique design, Western and wildlife art collection",
    "yearBuilt": "2018",
    "architect": "St. Petersburg Design Group",
    "wikiUrl": "https://en.wikipedia.org/wiki/James_Museum_of_Western_and_Wildlife_Art",
    "images": null,
    "lat": 27.77122,
    "lng": -82.63473
  },
  {
    "buildingName": "Vizcaya Museum and Gardens",
    "location": "Miami",
    "address": "3251 S Miami Ave, Miami, FL 33129",
    "architecturalStyle": "Mediterranean Revival",
    "notableFeatures": "Italian Renaissance villa with beautiful gardens",
    "yearBuilt": "1916",
    "architect": "F. Burrall Hoffman",
    "wikiUrl": "https://en.wikipedia.org/wiki/Vizcaya_Museum_and_Gardens",
    "images": "Miami_Vizcaya.jpg",
    "lat": 25.74443,
    "lng": -80.21113
  },
  {
    "buildingName": "Walt Disney Concert Hall",
    "location": "Orlando",
    "address": "445 S Magnolia Ave, Orlando, FL 32801",
    "architecturalStyle": "Postmodern",
    "notableFeatures": "Frank Gehry design with stainless steel surfaces",
    "yearBuilt": "2014",
    "architect": "Frank Gehry",
    "wikiUrl": "https://en.wikipedia.org/wiki/Dr._Phillips_Center_for_the_Performing_Arts",
    "images": "Orlando_WaltDisneyConcertHall.jpg",
    "lat": 28.53748,
    "lng": -81.37739
  },
  {
    "buildingName": "Wynnwood Walls",
    "location": "Miami",
    "address": "2516 NW 2nd Ave, Miami, FL 33127",
    "architecturalStyle": "Street Art",
    "notableFeatures": "Outdoor street art gallery, vibrant murals",
    "yearBuilt": "2009",
    "architect": "Various Street Artists",
    "wikiUrl": "https://en.wikipedia.org/wiki/Wynwood",
    "images": "Miami_WynwoodWalls.jpg",
    "lat": 25.80106,
    "lng": -80.19909
  }
];

// ! I've commented this code out, as the buildings list is presently stable and it is therefore unnecessary to regeocode it with every render; this will also save on the MapQuest API request allotment 
// // # geocoding buildings data; this will be useful if additional cities are added, removed, edited, etc; if so, replace the array of objects above with the logged out buildings array
// geocodeLocations(buildings, "address")
//   .then(buildings => console.log(buildings))
//   .catch(err => console.log(err));
