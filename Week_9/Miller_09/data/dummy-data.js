import Country from "../models/countries";
import Destination from "../models/destinations";

/* ==== HOLD INFORMATION FOR EACH COUNTRY AND DESTINATIONS ==== */

// Country has an ID, Name, Image(Flag)
export const COUNTRIES = [
  new Country(
    "c1",
    "France",
    "https://cdn.countryflags.com/thumbs/france/flag-400.png"
  ),
  new Country(
    "c2",
    "Japan",
    "https://cdn.countryflags.com/thumbs/japan/flag-400.png"
  ),
  new Country(
    "c3",
    "Italy",
    "https://cdn.countryflags.com/thumbs/italy/flag-400.png"
  ),
  new Country(
    "c4",
    "Spain",
    "https://cdn.countryflags.com/thumbs/spain/flag-400.png"
  ),
  new Country(
    "c5",
    "Greece",
    "https://cdn.countryflags.com/thumbs/greece/flag-400.png"
  ),
  new Country(
    "c6",
    "Austria",
    "https://cdn.countryflags.com/thumbs/austria/flag-400.png"
  ),
  new Country(
    "c7",
    "Germany",
    "https://cdn.countryflags.com/thumbs/germany/flag-400.png"
  ),
  new Country(
    "c8",
    "Switzerland",
    "https://cdn.countryflags.com/thumbs/switzerland/flag-400.png"
  ),
  new Country(
    "c9",
    "New Zealand",
    "https://cdn.countryflags.com/thumbs/new-zealand/flag-400.png"
  ),
  new Country(
    "c10",
    "Egypt",
    "https://cdn.countryflags.com/thumbs/egypt/flag-400.png"
  ),
];

// Destination has ID, Country ID, Name, Cost, Year Founded, User Rating, Description, Image(Picture of Location)

export const DESTINATIONS = [
  new Destination(
    "d1",
    "c1",
    "Paris",
    1759.0,
    "259 B.C.",
    4.5,
    'Paris is the capital and most populous city of France. Situated on the Seine River, in the north of the country, it is in the centre of the Île-de-France region, also known as the région parisienne, "Paris Region".',
    "https://a.cdn-hotels.com/gdcs/production107/d507/f99efdcd-6fcc-4a97-a00c-cb6a491554b7.jpg?impolicy=fcrop&w=800&h=533&q=medium"
  ),
  new Destination(
    "d2",
    "c1",
    "Nice",
    1989.0,
    "350 B.C.",
    4.3,
    "Sheltered by beautiful hills, Nice has a pleasant climate and is the leading resort city of the Côte d'Azur, or French Riviera.",
    "https://thesavvybackpacker.com/wp-content/uploads/2018/10/things-to-do-nice-france.jpg"
  ),
  new Destination(
    "d3",
    "c2",
    "Tokyo",
    2250.0,
    "1889",
    4.8,
    "Tokyo, the capital of Japan, is vibrant as a city that leads Japan and the world.\nOne of the attractions of Tokyo is that people from various regions and countries gather and interact with each other, and there is a tendency for many cultures to merge and to create new things.",
    "https://media.istockphoto.com/id/1390815938/photo/tokyo-city-in-japan.webp?b=1&s=170667a&w=0&k=20&c=YVI8iGWf-w_cLyQNcWA57Ll9eXv_s_SHfoM0MufEMMQ="
  ),
  new Destination(
    "d4",
    "c2",
    "Kyoto",
    1575.0,
    "794",
    4.6,
    "Kyoto is a city with a unique repertoire of compelling culture that has been refined over the past 1,200 years.\nMany aspects of Japanese culture originate from Kyoto and are deeply rooted in the lives of residents to this day.",
    "https://i.natgeofe.com/n/508c82e4-efb5-4273-80ad-dcf1a043e6e6/temple-kyoto-japan.jpg"
  ),
  new Destination(
    "d5",
    "c3",
    "Rome",
    1550.0,
    "753 B.C.",
    4.7,
    "Rome is the capital of Italy and also of the Province of Rome and of the region of Lazio.\nWith its iconic monuments, bustling squares and ancient remains, the Italian capital offers an unforgettable experience for travellers from all over the world.",
    "https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg"
  ),
  new Destination(
    "d6",
    "c3",
    "Naples",
    1250.0,
    "470 B.C.",
    4.0,
    "Naples not only welcomes, but literally embraces all who visit: it is well-known for its warmth, not only in terms of the weather. Overlooking the sea and with Vesuvius in the background, Campania's capital city has a colourful centuries-old history, with countless monuments to admire.",
    "https://fullsuitcase.com/wp-content/uploads/2023/09/Where-to-stay-in-Naples-Napoli-Italy-guide-to-the-best-neighborhoods-and-areas-to-stay-in-for-tourists.jpg"
  ),
  new Destination(
    "d7",
    "c4",
    "Barcelona",
    1200.0,
    "230 B.C.",
    4.8,
    "Overlooking the Mediterranean Sea, and famous for Gaudí and other Art Nouveau architecture, Barcelona is one of Europe's trendiest cities. It's a hub of new trends in the world of culture, fashion and cuisine. It combines the creativity of its artists and designers with respect and care for local traditions.",
    "https://www.berlinsbi.com/uploads/sites/2/2023/06/web-banner-barcelona.jpg?w=1854&h=1043&crop=1"
  ),
  new Destination(
    "d8",
    "c4",
    "Valencia",
    1100.0,
    "138 B.C.",
    4.5,
    "Valencia is a vibrant, cosmopolitan city on the Mediterranean coast. Once the capital of its own kingdom, it is now a regional capital and Spain's third largest city. ",
    "https://www.civitatis.com/f/espana/valencia/galeria/peniscola.jpg"
  ),
  new Destination(
    "d9",
    "c5",
    "Athens",
    1275.0,
    "508 B.C.",
    4.4,
    "Athens is a major coastal urban area in the Mediterranean, and it is both the capital and the largest city of Greece.",
    "https://cdn.britannica.com/61/179661-138-6F13E02A/Overview-Athens.jpg?w=800&h=450&c=crop"
  ),
  new Destination(
    "d10",
    "c5",
    "Thessaloniki",
    1025.0,
    "315 B.C.",
    4.5,
    "Thessaloniki Greece (or Salonica), the capital of Macedonia Prefecture, is the second largest city in Greece, after Athens. In fact, the town is honorarily called co-capital, for its historical and administrative importance.",
    "https://static.independent.co.uk/2023/01/16/16/iStock-1272509097.jpg?width=1200&height=1200&fit=crop"
  ),
  new Destination(
    "d11",
    "c6",
    "Vienna",
    1640.0,
    "500 B.C.",
    4.2,
    "Vienna, situated on the Danube River in the eastern part of Austria, developed from early Celtic and Roman settlements into a medieval and Baroque city, eventually becoming the capital of the Austro-Hungarian Empire.",
    "https://www.travelandleisure.com/thmb/zFpjulihpXjpUV7gKNHzydvJANA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vienna-austria-VIENNATG0621-ecb0ee926c2d49c4bce610db594f7405.jpg"
  ),
  new Destination(
    "d12",
    "c6",
    "Salzburg",
    1400.0,
    "696",
    4.1,
    "Salzburg is the point where the Italian and German cultures met and which played a crucial role in the exchanges between these two cultures. The result is a Baroque town that has emerged intact from history, and exceptional material testimony of a particular culture and period.",
    "https://cdn.britannica.com/22/9522-050-2F24E888/fortress-Hohensalzburg-Monchsberg-Salzburg-Austria.jpg"
  ),
  new Destination(
    "d13",
    "c7",
    "Berlin",
    1500.0,
    "1237",
    4.3,
    "Berlin, the capital city of Germany, is renowned for its exceptional range of landmarks, vibrant cultural scene and way of life that's somehow all go yet relaxed.",
    "https://i.natgeofe.com/n/b234ec7d-a988-4b75-9e65-749ddcbea7a0/citylife_berlin_2B4H3T1_web_3x2.jpg"
  ),
  new Destination(
    "d14",
    "c7",
    "Hamburg",
    1200.0,
    "500",
    4.5,
    "Hamburg, city and Land (state), located on the Elbe River in northern Germany. It is the country's largest port and commercial centre.",
    "https://ocdn.eu/pulscms-transforms/1/xdxk9kpTURBXy82MGRjMjI3ZDU4ZjkwMDU5OWNkZDQzOGQzYTJhMjk4Zi5qcGeTlQMAzErNCErNBKmVAs0EsADDw5MJpjE0OTczNwbeAAGhMAE/hamburg.jpeg"
  ),
  new Destination(
    "d15",
    "c8",
    "Zürich",
    1940.0,
    "15 B.C.",
    4.3,
    "Zürich is located in the heart of Europe and is an important economic, cultural and social centre of Switzerland. With its unique location on Lake Zürich, the Alps on the horizon, the numerous local recreation areas and its urban diversity, the city offers an attractive environment to live and work.",
    "https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/033/341/slideshow/5c472d66a697be01bc22961ddb4a8241/slide-switzerland-zuerich-dusk.jpg"
  ),
  new Destination(
    "d16",
    "c8",
    "Geneva",
    1750.0,
    "58 B.C.",
    4.5,
    "Geneva is the second most populous city in Switzerland (after Zürich) and is the most populous city of Romandy. Situated where the Rhône exits Lake Geneva, it is the capital of the Republic and Canton of Geneva.",
    "https://observer.com/wp-content/uploads/sites/2/2023/08/Genf.jpg?quality=80"
  ),
  new Destination(
    "d17",
    "c9",
    "Auckland",
    1200.0,
    "1840",
    4.4,
    "Auckland is New Zealand's largest city with a population of 1.6 million people, and is the centre of the country's retail and commercial activities.",
    "https://cdn.britannica.com/99/61399-050-B867F67F/skyline-Auckland-New-Zealand-Westhaven-Marina.jpg"
  ),
  new Destination(
    "d18",
    "c9",
    "Wellington",
    1000.0,
    "1839",
    4.3,
    "Wellington is New Zealand's centre of government and the world's southernmost capital city. Wellington is also the country's cultural capital and the third most populous urban area in New Zealand. The city is home to: many museums, including Te Papa Tongarewa (the Museum of New Zealand).",
    "https://www.newzealand.com/assets/Tourism-NZ/Wellington/5819544f98/img-1536237965-7200-15477-p-E946185A-06D2-650F-15B99BC19228455E-2544003__aWxvdmVrZWxseQo_CropResizeWzE5MDAsMTAwMCw3NSwianBnIl0.jpg"
  ),
  new Destination(
    "d19",
    "c10",
    "Cairo",
    1250.0,
    "969",
    4.2,
    "Cairo is the capital and largest city of Egypt. The city's metropolitan area is the largest in the Middle East and the Arab world, and 15th-largest in the world, and is associated with ancient Egypt, as the famous Giza pyramid complex and the ancient city of Memphis are located in its geographical area.",
    "https://ychef.files.bbci.co.uk/1280x720/p07zy3y6.jpg"
  ),
  new Destination(
    "d20",
    "c10",
    "Aswan",
    1400.0,
    "1975",
    4.4,
    "Aswan is known for its beautiful Nile Valley scenery, significant archaeological sites and its peaceful aura. Its weather is warm all year round, which makes it a perfect winter destination. The city provides splendid views and attractions to sail through the Nile with a felucca (Egyptian sailboat).",
    "https://www.egypttoursportal.com/images/2017/11/Aswan-City-Egypt-Egypt-Tours-Portal.jpg"
  ),
];
