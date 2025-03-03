/*   STEP 1   */
export const leagueID = "784458462775115776"; // your league ID
export const leagueName = "A Fantasy Football League of Ice and Fire"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
    <p> Welcome to the league page for A Fantasy Football League Of Ice And Fire, or AFFLOIAF for short.  Using the acronym is also for those that don't want to acknowledge we're still kinda sorta doing a Game of Thrones themed league after that disastrous final season.</p>
    <p> AFFLOIAF is a league focused on trying new things, because new and interesting decisions are what we consider to be fun.  Established in 2015, the league is constantly moving, adding keepers, trying new rules and platforms, and always on the lookout for more of those fun, new things in the fantasy football landscape.</p>
    <p> <b>League Podcast:</b></p>
    <iframe title="A Fantasy Football League of Ice and Fire" allowtransparency="true" height="315" width="100%" style="border: none; min-width: min(100%, 430px);" scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=qpgtk-4f310c-pbblog-playlist&share=1&download=1&rtl=0&fonts=Arial&skin=1b1b1b&font-color=auto&order=episodic&limit=10&filter=all&ss=a713390a017602015775e868a2cf26b0&btn-skin=8bbb4e&size=315" allowfullscreen=""></iframe>
    <p> <b>News:</b></p>
    <p> Draft pick trading 1 week pre-draft will be allowed before the 2022 draft.  This includes trading picks and players on last years' team, so last minute keeper upgrades are possible -- this is a big change!  Plan accordingly.</p>
    <p> Speaking of, if you want anything in your bio updated (and you probably do, considering the low effort shitposting currently in place) -- email/message your updated bio, favorite players, rivals, anything else of that nature to Matt (you should be able to find my email in your inbox).  Anyone that doesn't send updates will have their bio continually randomly edited by Matt.</p>
    <p> Sleeper's league history tool is here!  ...for commishes on iOS only.  Pester Fraser to get it added.  :)</p>
    `;

export const managers = [
  {
     "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Fraser",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Fort Collins",
     "bio": "I run the best league ever, but I can't win my own league.",
     "photo": "/managers/Fraser.jpg", // done
     "fantasyStart": 2014, // when did the manager start playing fantasy football
     "favoriteTeam": "den", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Elliot", // Can be anything (usually your rival's name)
       link: 11, // manager array number within this array, or null to link back to all managers page
       image: "/managers/Elliot.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 5927, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "RB", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
     "philosophy": "WHAT CAN BROWN DO FOR YOU???",
     "tradingScale": 10, // 1 - 10
     "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
   {
     "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Sam",
     "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Denver",
     "bio": "BEER",
     "photo": "/managers/Sam.jpg", // done
     "fantasyStart": 2015, // when did the manager start playing fantasy football
     "favoriteTeam": "den", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Brandon", // Can be anything (usually your rival's name)
       link: 6, // manager array number within this array, or null to link back to all managers page
       image: "/managers/Brandon.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 2320, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "RB", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Who needs depth?",
     "tradingScale": 8, // 1 - 10
     "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
   {
     "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Ryan",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "A Whale's Vagina",
     "bio": "Guys, I work for Apple.",
     "photo": "/managers/Ryan.jpg", // done
     "fantasyStart": 2010, // when did the manager start playing fantasy football
     "favoriteTeam": "den", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Dynasty", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Brandon", // Can be anything (usually your rival's name)
       link: 5, // manager array number within this array, or null to link back to all managers page
       image: "/managers/Brandon.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 1244, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "TE", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
     "philosophy": "WR1s on bad teams WOOOO",
     "tradingScale": 10, // 1 - 10
     "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
   {
     "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Matt",
     "tookOver": 2017, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Fort Collins",
     "bio": "I am known for ultra confident but extremely wrong takes.",
     "photo": "/managers/Matt.jpg", // done
     "fantasyStart": 2016, // when did the manager start playing fantasy football
     "favoriteTeam": "den", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Kyle", // Can be anything (usually your rival's name)
       link: 8, // manager array number within this array, or null to link back to all managers page
       image: "/managers/Kyle.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 1123, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
     "philosophy": "Conservative choices that lead to stagnation.",
     "tradingScale": 7, // 1 - 10
     "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
   {
     "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Brandon",
     "tookOver": 2018, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Colorado?",
     "bio": "I prefer to not talk in league chat much.  My impact is felt through...um...",
     "photo": "/managers/Brandon.jpg", // done
     "fantasyStart": 2015, // when did the manager start playing fantasy football
     "favoriteTeam": "den", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Rebuild", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Everyone", // Can be anything (usually your rival's name)
       link: null, // manager array number within this array, or null to link back to all managers page
       image: "/managers/everyone.png", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 4319, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "RB", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
     "philosophy": "Naming my team after players that were on it laast year.",
     "tradingScale": 2, // 1 - 10
     "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
   {
     "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Derek",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Florida",
     "bio": "FLORIDA MAN INJECTS SELF WITH SPRAY FOAM, DOES NOT HELP WITH FFL RESULTS",
     "photo": "/managers/Trey.jpg", // done
     "fantasyStart": 2012, // when did the manager start playing fantasy football
     "favoriteTeam": "den", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Rebuild", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Everyone", // Can be anything (usually your rival's name)
       link: null, // manager array number within this array, or null to link back to all managers page
       image: "/managers/everyone.png", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 3970, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "QB", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Montreal is not so good at the hockey",
     "tradingScale": 7, // 1 - 10
     "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
   {
     "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Erik",
     "tookOver": 2021, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Florida?",
     "bio": "???",
     "photo": "/managers/Erik.jpg", // done
     "fantasyStart": 2012, // when did the manager start playing fantasy football
     "favoriteTeam": "den", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Rebuild", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Everyone", // Can be anything (usually your rival's name)
       link: null, // manager array number within this array, or null to link back to all managers page
       image: "/managers/everyone.png", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 3970, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "QB", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Injured keepers are best keepers.",
     "tradingScale": 5, // 1 - 10
     "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
   {
     "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Kyle",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Vancouver",
     "bio": "Kyle: 'I'm an expert. Don't tell anyone.'",
     "photo": "/managers/Kyle.jpg", // done
     "fantasyStart": 2008, // when did the manager start playing fantasy football
     "favoriteTeam": "ne", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Matt", // Can be anything (usually your rival's name)
       link: 4, // manager array number within this array, or null to link back to all managers page
       image: "/managers/Matt.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 559, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "RB", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Kyle: 'Anyone but Matt'",
     "tradingScale": 6, // 1 - 10
     "preferredContact": "Carrier Pigeon", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
   {
     "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Ward",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Canuckistan",
     "bio": "I have giant hands.",
     "photo": "/managers/Ward.jpg", // done
     "fantasyStart": 1215, // when did the manager start playing fantasy football
     "favoriteTeam": "den", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Ward", // Can be anything (usually your rival's name)
       link: 9, // manager array number within this array, or null to link back to all managers page
       image: "/managers/Ward.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 6813, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "RB", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Rookies", // 'Rookies' or 'Vets'
     "philosophy": "Taking young players 2+ rounds early.",
     "tradingScale": 8, // 1 - 10
     "preferredContact": "Carrier Pigeon", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
   {
     "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Connor",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Fort Collins",
     "bio": "I freeze my pants instead of wash them.",
     "photo": "/managers/Connor.jpg", // done
     "fantasyStart": 1215, // when did the manager start playing fantasy football
     "favoriteTeam": "den", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Everyone", // Can be anything (usually your rival's name)
       link: 9, // manager array number within this array, or null to link back to all managers page
       image: "/managers/everyone.png", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 867, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "RB", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "Getting bailed out by Fraser and stealing Will Fuller.",
     "tradingScale": 10, // 1 - 10
     "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
   {
     "roster": 11,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Elliot",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Colorado?",
     "bio": "I am tired of being confused with Mark Zuckerberg.",
     "photo": "/managers/Elliot.jpg", // done
     "fantasyStart": 2010, // when did the manager start playing fantasy football
     "favoriteTeam": "den", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Fraser", // Can be anything (usually your rival's name)
       link: 1, // manager array number within this array, or null to link back to all managers page
       image: "/managers/Fraser.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 1749, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "I paid off the power rankings.",
     "tradingScale": 1, // 1 - 10
     "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
   {
     "roster": 12,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
     "name": "Foster",
     "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
     "location": "Colorado?",
     "bio": "I have never played Fortnite.",
     "photo": "/managers/Foster.jpg", // done
     "fantasyStart": 2010, // when did the manager start playing fantasy football
     "favoriteTeam": "den", // favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
     "mode": "Win Now", // 'Win Now' or 'Rebuild'
     "rival": {
       name: "Fraser", // Can be anything (usually your rival's name)
       link: 1, // manager array number within this array, or null to link back to all managers page
       image: "/managers/Fraser.jpg", // either a specific manager photo or 'everyone' or 'question'
     },
     "favoritePlayer": 4084, // this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
     "valuePosition": "WR", // Favorite position (QB, WR, RB, TE, etc.)
     "rookieOrVets": "Vets", // 'Rookies' or 'Vets'
     "philosophy": "I know it says Win Now but I mean Win Never.",
     "tradingScale": 3, // 1 - 10
     "preferredContact": "Sleeper", // 'Text', 'WhatsApp', and 'Carrier Pigeon' are currently supplied in the template
   },
]
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
