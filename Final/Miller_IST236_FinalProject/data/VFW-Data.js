import District from "../models/district";
import Post from "../models/posts";

/* ==== HOLD INFORMATION FOR EACH DISTRICT AND POSTS ==== */

// District has a ID, State, and Number
export const DISTRICTS = [
  new District("d1", "South Carolina", 1),
  new District("d2", "South Carolina", 2),
  new District("d3", "South Carolina", 3),
  new District("d4", "South Carolina", 4),
  new District("d5", "South Carolina", 5),
  new District("d6", "South Carolina", 6),
  new District("d7", "South Carolina", 7),
  new District("d8", "South Carolina", 8),
  new District("d9", "South Carolina", 9),
];

// Post has a ID, DistrictID, post number, county, address, phone number,
// description, address url and image url.

export const POSTS = [
  new Post(
    "p1",
    "d7",
    6091,
    "Dillon",
    "2024 Hwy 9 East Dillon, SC 29536",
    "843-506-0504",
    `Veterans of Foreign Wars Post 6091 is a cornerstone of support and camaraderie for veterans in its community. Located in Dillon, South Carolina, Post 6091 serves as a hub where veterans from various branches of the military come together to share their experiences, support one another, and contribute to their local area.`,
    `https://maps.app.goo.gl/criWFwmUwaJLB9oQ8`,
    "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=tlUHrmyJsn5b1aoZ_n1Ipg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=7.9575987&pitch=0&thumbfov=100"
  ),
  new Post(
    "p2",
    "d7",
    6122,
    "Mullins",
    "1216 Homestead Ct. Mullins, SC 29574",
    "843-430-7615",
    `Veterans of Foreign Wars Post 6122 is a cornerstone of support and camaraderie for veterans in its community. Located in Mullins, South Carolina, Post 6122 serves as a hub where veterans from various branches of the military come together to share their experiences, support one another, and contribute to their local area.`,
    `https://maps.app.goo.gl/quLCmWgpgrvfoB5J8`,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCMJz41jDJeJdOvi8oegwURERYFftWh3ZRpPerOHJqhA&s"
  ),
  new Post(
    "p3",
    "d7",
    6444,
    "Georgetown",
    "711 Church St, Georgetown, SC 29440" ,
    "843-546-0529",
    `Veterans of Foreign Wars Post 6444 is a cornerstone of support and camaraderie for veterans in its community. Located in Georgetown, South Carolina, Post 6444 serves as a hub where veterans from various branches of the military come together to share their experiences, support one another, and contribute to their local area.`,
    `https://maps.app.goo.gl/NsdbDUia48o65aYZ8`,
    "https://bloximages.newyork1.vip.townnews.com/postandcourier.com/content/tncms/assets/v3/editorial/2/4d/24da8fa6-d7de-5db8-90eb-efe5f9503158/5ecebb31327e9.image.jpg?resize=750%2C500"
  ),
  new Post(
    "p4",
    "d7",
    6500,
    "Williamsburg",
    "2317 Sandy Bay Rd Kingstree, SC 29556-1830" ,
    "803-473-4943",
    `Veterans of Foreign Wars Post 6500 is a cornerstone of support and camaraderie for veterans in its community. Located in Williamsburg, South Carolina, Post 6500 serves as a hub where veterans from various branches of the military come together to share their experiences, support one another, and contribute to their local area.`,
    `https://maps.app.goo.gl/rpBNh4UfRtpM4oDM6`,
    "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=eCWgMcSpXX0FflUWNWwCoA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=237.36049&pitch=0&thumbfov=100"
  ),
  new Post(
    "p5",
    "d7",
    10319,
    "Marion",
    "425 Dixon St, Marion, SC 29571" ,
    "843-423-4983",
    `Veterans of Foreign Wars Post 10319 is a cornerstone of support and camaraderie for veterans in its community. Located in Marion, South Carolina, Post 10319 serves as a hub where veterans from various branches of the military come together to share their experiences, support one another, and contribute to their local area.`,
    `https://maps.app.goo.gl/ZMWVDz4NbJ71VYBP6`,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJB6kVr9hlobBsucqi4O1EcFYNeYqYb_Qb2E5aApNcQg&s"
  ),
  new Post(
    "p6",
    "d7",
    10420 ,
    "Georgetown",
    "4359 US-17 BUS, Murrells Inlet, SC 29576" ,
    "843-651-6900",
    `Veterans of Foreign Wars Post 10420 is a cornerstone of support and camaraderie for veterans in its community. Located in Georgetown, South Carolina, Post 10420 serves as a hub where veterans from various branches of the military come together to share their experiences, support one another, and contribute to their local area.`,
    `https://maps.app.goo.gl/VYwwq6UDnjFcuuPs9`,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsDczYotWwwKuHIc1PGvGaDyaOtD3-rn3byaPmrOmbDw&s"
  ),
  new Post(
    "p7",
    "d7",
    10804,
    "Horry",
    "VFW Post 10804, 111 State Hwy 57 N, Little River, SC 29566" ,
    "843-399-0877",
    `Veterans of Foreign Wars Post 10804 is a cornerstone of support and camaraderie for veterans in its community. Located in Horry, South Carolina, Post 10804 serves as a hub where veterans from various branches of the military come together to share their experiences, support one another, and contribute to their local area.`,
    `https://maps.app.goo.gl/8MCcdKQCqQnp2ApF6`,
    "https://lh3.googleusercontent.com/zngawWIiixubxut-F_MGI09Rswn27sCxCzSXBUtugCTjiO96KTvsNeH1JqUGxgkWCosH_UJlsTFWk1CJjhNto1On0gJ1gRkMvuh3vB7giDO_Otc8Q2VuymrZqYfvLoDmJYkl9X6RpQ=w1920-h1080"
  ),
  new Post(
    "p8",
    "d7",
    11078 ,
    "Clarendon",
    "1 N Dukes St, Summerton, SC 29148" ,
    "803-435-8748",
    `Veterans of Foreign Wars Post 11078 is a cornerstone of support and camaraderie for veterans in its community. Located in Clarendon, South Carolina, Post 11078 serves as a hub where veterans from various branches of the military come together to share their experiences, support one another, and contribute to their local area.`,
    `https://maps.app.goo.gl/nzLXNFWCq9Zx5ugJ6`,
    "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=YQkSpKDJfSgjhYR9v2B1bw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=281.61032&pitch=0&thumbfov=100"
  ),
];
