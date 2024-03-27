/* ==== HOLD INFORMATION ABOUT THE NEWS ARTICLES ====*/
import News from "../models/News";

// News has an Id, type, headline, date, author, agency, description, imageUrl
// News types => USA, WORLD, GAME
export const NEWSARTICLES = [
  // Article can be founded at https://www.cnn.com/2024/03/17/us/cherry-blossoms-peak-bloom-washington/index.html
  new News(
    "n1",
    "USA",
    "“Peak bloom!”: Cherry blossoms open early in DC, park service announces",
    "March 17, 2024",
    "Aileen Graef and Elisa Raffa",
    "CNN",
    "The cherry blossoms lining the National Mall in Washington, DC, have hit “peak bloom,” bursting open in an early spring display after a warm winter, the National Park Service announced Sunday." +
      " “PEAK BLOOM! PEAK BLOOM! PEAK BLOOM! Did we say PEAK BLOOM?! The blossoms are opening & putting on a splendid spring spectacle. See you soon,” the National Mall NPS posted on the social media platform X." +
      " The NPS describes “peak bloom” as when 70% of the Yoshino Cherry trees that line the National Mall and the Tidal Basin are open. They typically bloom for several days and can vary based on weather conditions." +
      " It is the cherry trees' second-earliest peak bloom on record and follows one of Washington's warmest recorded winters.",
    "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2084803477.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp"
  ),
  // Article can be founded at https://www.nbcnews.com/news/us-news/marriages-us-are-back-pre-pandemic-levels-cdc-says-rcna143786
  new News(
    "n2",
    "USA",
    "Marriages in the U.S. are back to pre-pandemic levels, CDC says",
    "March 17, 2024",
    "The Associated Press",
    "NBC NEWS",
    "U.S. marriages have rebounded to pre-pandemic levels with nearly 2.1 million in 2022." +
      " That's a 4% increase from the year before. The Centers for Disease Control and Prevention released the data Friday but has not released marriage data for last year." +
      " In 2020, the first year of the Covid-19 pandemic, there were 1.7 million U.S. weddings — the lowest number recorded since 1963. The pandemic threw many marriage plans into disarray, with communities ordering people to stay at home and banning large gatherings to limit the spread of Covid-19." +
      " Marriages then rose in 2021, but not to pre-pandemic levels. They ticked up again in 2022 and surpassed 2019 marriage statistics by a small margin.",
    "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2024-03/240317-marriage-vl-356p-f23be1.jpg"
  ),

  // Article can be founded at https://www.usatoday.com/story/news/nation/2024/03/16/st-paddys-or-st-pattys-day/72992619007/
  new News(
    "n3",
    "USA",
    "'Paddy's' or 'Patty's': What's the correct St. Patrick's Day abbreviation",
    "March, 16, 2024",
    "Anthony Robledo",
    "USA TODAY",
    "Look around everything is green from donuts and clothing to the Chicago River, which can only mean one thing. St. Patrick's Day is upon us." +
      " Irish pubs will be packed on Sunday as Americans gather to drink green beer. While people have already agreed on what color to wear they can't seem to agree on the holiday's proper abbreviation." +
      " Much like the pronunciation of Nevada there has long been confusion on whether it's St. Paddy's Day or St. Patty's Day. You don't need look for the answer at the end of the rainbow we got you covered.\n" +
      "\nIt's St. Paddy's, not St. Patty's",
    "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/03/15/USAT/72993173007-usatsi-22783618-168401916-lowres.jpg?width=660&height=441&fit=crop&format=pjpg&auto=webp"
  ),

  // Article can be founded at https://www.cbsnews.com/news/1742-shipreck-identified-florida-british-warship-hms-tyger/
  new News(
    "n4",
    "USA",
    "British warship identified off Florida coast 3 centuries after wreck left surviving crew marooned on uninhabited island",
    "March, 15, 2024",
    "Stephen Smith",
    "CBS NEWS",
    "A British warship has been identified off the Florida coast nearly three centuries after it sank while on patrol in the waters of what is now Dry Tortugas National Park, officials said. HMS Tyger went down with hundreds of sailors on board and the surviving crew were marooned on an uninhabited island for more than two months before making a dramatic escape on makeshift boats." +
      " The shipwreck was initially located in 1993 off of Key West, but new research by archeologists has confirmed definitive evidence that the wreck is indeed the 50-gun frigate HMS Tyger, the National Park Service said on Thursday." +
      ' The ship sank on Jan. 13, 1742, after it ran aground on the reefs of the Dry Tortugas during the Anglo-Spanish War, a nine-year conflict between Britain and Spain, officials said. Old logbooks described how the crew "lightened her forward" — presumably by offloading heavy equipment — after initially running aground, briefly refloating the vessel and then sinking.',
    "https://assets2.cbsnewsstatic.com/hub/i/r/2024/03/15/a7082ed3-0271-4a1d-b723-355f93a68770/thumbnail/620x413/bf9fe83461b6017ba9669130732766c9/cannon-from-hms-tyger-nps-photo-by-brett-seymour.jpg?v=d1d78866939020fc1f2607ef7298e4ec"
  ),

  // Article can be founded at https://www.foxnews.com/lifestyle/this-day-history-march-16-1802-united-states-military-academy-established-west-point
  new News(
    "n5",
    "USA",
    "On this day in history, March 16, 1802, United States Military Academy established at West Point",
    "March 16, 2024",
    "Kerry J. Byrne",
    "FOX NEWS",
    "The United States Military Academy at West Point, which has trained generations of American leaders to serve from the battlefield to the White House, was established on this day in history, March 16, 1802." +
    " Its graduates pioneered America's way west and humanity's path into the heavens. The academy's creation was part of the Military Peace Establishment Act, introduced by Massachusetts Congressman Joseph Varnum, and signed into law by President Thomas Jefferson.",
    "https://a57.foxnews.com/cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/549a40ae-f29d-4523-962b-729db963cd6d/6b3e843d-1ccd-494b-9411-113a8492b3cb/877x493/match/896/500/image.jpg?ve=1&tl=1"
  ),
    // Article can be founded at https://www.cnn.com/2024/03/17/europe/putin-wins-russia-presidential-election-intl/index.html?iid=cnn_buildContentRecirc_end_recirc
  new News(
    "n6",
    "WORLD",
    "Putin extends one man-rule in Russia after stage-managed election devoid of credible opposition",
    "March, 17, 2024",
    "Christian Edwards",
    "CNN",
    "President Vladimir Putin is set to tighten his grip on the country he has ruled since the turn of the century, with partial results from Russia's stage-managed election indicating a predictably large victory for the Kremlin leader in a result that was a foregone conclusion." + 
    " With half of the ballots counted, Putin was in the lead with 87.3% of the vote, according to preliminary results reported Sunday by Russia's Central Election Commission (CEC)." + 
    " The result means Putin will rule until at least 2030, when he will be 77. Russia's longest-serving leader since Soviet dictator Joseph Stalin, he will secure a third full decade of rule.",
    "https://media.cnn.com/api/v1/images/stellar/prod/2024-03-17t212036z-1537592867-rc2xn6aotth3-rtrmadp-3-russia-election-putin-copy.jpg?c=16x9&q=w_850,c_fill"
  ),
  // Article can be founded at https://edition.cnn.com/travel/article/airplane-mode-reasons-why/index.html
  new News(
    "n7",
    "WORLD",
    "Here's the real reason to turn on airplane mode when you fly",
    "April 7, 2023",
    "Doug Drury",
    "CNN",
    'We all know the routine by heart: “Please ensure your seats are in the upright position, tray tables stowed, window shades are up, laptops are stored in the overhead bins and electronic devices are set to flight mode.”' + 
    " Now, the first four are reasonable, right? Window shades need to be up so we can see if there's an emergency, such as fire. Tray tables need to be stowed and seats upright so we can get out of the row quickly. Laptops can become projectiles in an emergency, as the seat back pockets are not strong enough to contain them." + 
    " And mobile phones need to be set to flight mode so they can't cause an emergency for the airplane, right? Well, it depends whom you ask.",
    "https://media.cnn.com/api/v1/images/stellar/prod/230402145738-airplane-phone-stock-restricted.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp"
  ),
  // Article can be founded at https://www.nbcnews.com/specials/israel-hamas-war-spread-gaza-pakistan-middle-east-region/index.html
  new News(
    "n8",
    "WORLD",
    "Map: How the Israel-Hamas conflict has spread beyond the Mideast",
    "February 13, 2023",
    "Alexander Smith, JoElla Carman and Jiachuan Wu",
    "NBC NEWS",
    "Hamas' terrorist attack on Israel in October and Israel's retaliatory assault on the Gaza Strip have set off a chain reaction." + 
    " Fears are growing that the violence could spiral into a full-blown regional war and maybe even lead to a direct confrontation between Iran and the United States. An attack in late January that killed three U.S. soldiers and wounded dozens more at a base in Jordan, prompting retaliatory strikes from the U.S., only escalated those concerns."+
    " While many experts and Western officials believe there is little desire in Tehran or Washington for a direct war, the scope of potential miscalculation is huge. Furthermore, militias supported by Iran operate with some autonomy, adding a layer of uncertainty and volatility.",
    "https://www.nbcnews.com/specials/israel-hamas-war-spread-gaza-pakistan-middle-east-region/assets/1DE4cAC9AI/240126-lebanon-beirut-blast-mn-1325-2500x1668.jpg"
  ),
  // Article can be founded at https://www.nbcnews.com/news/world/volcano-iceland-erupting-fourth-time-3-months-rcna143751
  new News(
    "n9",
    "WORLD",
    "A volcano in Iceland is erupting for the 4th time in 3 months",
    "March 17, 2024",
    "The Associated Press",
    "NBC NEWS",
    "A volcano in Iceland erupted Saturday evening for the fourth time in three months, sending orange jets of lava into the night sky." + 
    " Iceland's Meteorological Office said the eruption opened a fissure in the earth almost 2 miles long between Stóra-Skógfell and Hagafell mountains on the Reykjanes Peninsula." + 
    " The Met Office had warned for weeks that magma — semi-molten rock — was accumulating under the ground, making an eruption likely." + 
    " Hundreds of people were evacuated from the Blue Lagoon thermal spa, one of Iceland's top tourist attractions, when the eruption began, national broadcaster RUV said." + 
    " No flight disruptions were reported at nearby Keflavik, Iceland's main airport.",
    "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2024-03/240317-iceland-volcano-aa-5fd885.jpg"
  ),
  // Article can be founded at https://www.cbsnews.com/news/kate-middleton-photo-prince-william-speaks-harry-not-together-princess-diana-event/
  new News(
    "n10",
    "WORLD",
    'William calls Kate the "arty one" amid photo scandal, as he and Harry keep their distance at Princess Diana event',
    "March 15, 2024",
    "Ramy Inocencio",
    "CBS NEWS",
    "Not even an event honoring the late Princess Diana could bring her estranged sons, Prince William and Prince Harry, back together this week. At the 25th annual Diana Legacy Awards, honoring young global change makers in London, the two brothers clearly kept their distance Thursday night — in both time, appearing hours apart, and in place, as they were half a world away from each other." + 
    " William, the Prince of Wales, attended in person and celebrated the 20 winners, whom he lauded as prime examples of" +  "my mother's" + 'belief that young people can change the world."',
    "https://assets3.cbsnewsstatic.com/hub/i/r/2024/03/15/f0ed88ea-4681-4d31-8496-deebfdd0764f/thumbnail/620x413g2/4d94a217d20cfddfa2e959a1f48d3bf8/prince-william-2076703222.jpg?v=d1d78866939020fc1f2607ef7298e4ec"
  ),
  // Article can be founded at https://gamerant.com/halo-2-multiplayer-revival-insignia/
  new News(
    "n11",
    "GAME",
    "Incredible Fan Project Revives Original Halo 2 Multiplayer",
    "March 17, 2024",
    "Daniel Morris",
    "GAME RANT",
    "A fan project has brought the original Halo 2's multiplayer back to life, 14 years after its servers closed down for the last time. While Halo 2's multiplayer did receive a re-release alongside Halo: The Master Chief Collection, this project aims to bring back the original servers, exactly how they were back in 2004.",
    "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/03/halo-2-multiplayer-revived.jpg?q=50&fit=contain&w=943&h=&dpr=1.5"
    ),
  // Article can be founded at https://gamerant.com/paper-mario-thousand-year-door-luigis-mansion-2-file-sizes/
  new News(
    "n12",
    "GAME",
    "Paper Mario: The Thousand-Year Door and Luigi's Mansion 2 HD File Sizes Revealed",
    "March 17, 2024",
    "Trumann Tu",
    "GAME RANT",
    "Nintendo has confirmed the file sizes for the upcoming Paper Mario: The Thousand-Year Door and Luigi's Mansion 2 HD Switch remasters. Both of these games were first announced during the September 2023 Nintendo Direct, and instantly became highly anticipated releases. Paper Mario: The Thousand-Year Door is a long-awaited remaster of the GameCube original, with Luigi's game being a complete port, bringing the classic title from the Nintendo 3DS to the Switch. Both of these remasters will also add some new gameplay features and remastered graphics.",
    "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/03/paper-mario-thousand-year-door-luigi-mansion-2-hd.jpg?q=50&fit=contain&w=943&h=&dpr=1.5"

  ),
  // Article can be founded at https://www.gameinformer.com/2024/03/11/multiversus-is-back-in-action-this-may
  new News(
    "n13",
    "GAME",
    "MultiVersus Is Back In Action This May",
    "March, 11, 2024",
    "Marcus Stewart",
    "GAME INFORMER",
    "MultiVersus, the Warner Bros. free-to-play crossover platform fighter, makes its big comeback on May 28. The game has been rebuilt and returns almost a year after its open beta was taken offline." + 
    " Player First Games game director Tony Huynh explains in a developer diary that MultiVersus has been remade from the ground up in Unreal Engine 5, meaning it sports improved visuals and lighting. It also has a totally revamped netcode to provide what Huynh promises will be consistent online performance regardless of platform." + 
    " Every existing fighter sports new attacks and combat mechanics, and Huynh promises that new fighters are on the way. Additionally, new stages were teased with concept art depicting arenas based on The Powerpuff Girls' Townsville and Dexter's Laboratory." + 
    "Lastly, Huynh reveals a brand-new PvE mode is coming to the game. He doesn't go into detail, only teasing it will offer “additional ways of playing with unique rewards.”",
    "https://www.gameinformer.com/sites/default/files/styles/full/public/2024/03/11/8d9fffd2/multiversus_key_art_2024_1.jpg"
  ),
  // Article can be founded at https://www.gameinformer.com/2024/03/10/new-super-mario-bros-animated-movie-announced-for-2026-release
  new News(
    "n14",
    "GAME",
    "New Super Mario Bros. Animated Movie Announced For 2026 Release",
    "March, 10, 2024",
    "Brian Shea",
    "GAME INFORMER",
    "Coming off last year's overwhelming success of The Super Mario Bros. Movie, Nintendo and Illumination have announced that work has begun on a second movie set in the world of Super Mario Bros. The announcement, made by Nintendo's Shigeru Miyamoto and Illumination CEO Chris Meledandri, states that this film will arrive in theaters in the United States on April 3, 2026.",
    "https://www.cnet.com/a/img/resize/f231fa7c3d773a4c67c644fd361e71a73d8f2516/hub/2023/07/06/6a2396dc-f2d4-475f-9b0d-8a5aeb3a5b2c/supermario-movie-peacock.jpg?auto=webp&width=1200"
  ),
  // Article can be founded at https://www.engadget.com/the-steam-spring-sale-is-here-to-raid-your-wallet-175109711.html
  new News(
    "n15",
    "GAME",
    "The Steam spring sale is here to raid your wallet",
    "March 14, 2024",
    "Kris Holt",
    "ENGADGET",
    "It's that time of year once again. The Steam spring sale is now live. It's typically not as extensive as the summer and winter editions, and there's no Steam Deck discount this time, unfortunately, but there are still plenty of deals worth paying attention to.",
    "https://s.yimg.com/ny/api/res/1.2/aBEsU75H6ifk_tracn2FKA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTQ5OTtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2024-03/d6ca5ea0-e228-11ee-9b5f-460993b9f324"
    
  )
];
