// Silksong reveal trailer date
const revealDate = new Date(Date.UTC(2019, 1, 14)); // Month starts from 0 in JS
// Current date
const todayDate = new Date();

const silksongReleaseDate = new Date(Date.UTC(2025, 8, 4)); // 4 September 2025
const daysUntilRelease = Math.ceil((silksongReleaseDate - todayDate) / (1000 * 60 * 60 * 24));
silksongReleaseDate.setUTCHours(0, 0, 0, 0);

// Reset hours to avoid timezone issues
revealDate.setUTCHours(0, 0, 0, 0);
todayDate.setUTCHours(0, 0, 0, 0);

const tomorrowDate = new Date();
tomorrowDate.setUTCDate(todayDate.getUTCDate() + 1);
tomorrowDate.setUTCHours(0, 0, 0, 0);

const todayDateString = todayDate.toISOString().split("T")[0];
const tomorrowDateString = tomorrowDate.toISOString().split("T")[0];

// HTML elements
const timelineWrapper = document.getElementById("timeline-wrapper");
const currentDay = document.getElementById("current-day");
const daysSince = document.getElementById("days-since");
const newsStatus = document.getElementById("news-status");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const first = document.getElementById("first");
const last = document.getElementById("last");

// The news array
const newsArray = [
  {
    date: "2019-02-14",
    title: "Silksong is revealed!",
    images: [
      "https://preview.redd.it/everything-silksong-timeline-2019-2025-v0-qw4oh5vltnle1.png?width=643&format=png&auto=webp&s=13b79720c76e5177c4ee0416fdb54f6cd62b6574",
      "img/1/thumbnail.jpg",
    ],
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=yQxwbZsL14Y">Hollow Knight: Silksong - Announcement Trailer - Nintendo Switch</a></div>',
      '<div class="linkDiv"><img src="img/logos/kickstarter.png" class="linkLogo"><a href="https://www.kickstarter.com/projects/11662585/hollow-knight/posts/2416131">Silksong announcement on KickStarter</a></div>',
      '<div class="linkDiv"><img src="img/logos/teamcherry.png" class="linkLogo"><a href="https://hollowknightsilksong.com/">Hollow Knight: Silksong Website</a></div>',
      '<div class="linkDiv"><img src="img/logos/teamcherry.png" class="linkLogo"><a href="https://www.teamcherry.com.au/blog/hollow-knight-silksong-revealed">Hollow Knight: Silksong Blog Post</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Gv6CRPqkpuU&t=3s&pp=0gcJCb8Ag7Wk3p_U">Team Cherry Silksong QnA</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=96s">Daily Silksong News -702</a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2019-02-15",
    title: "Silksong steam page goes live",
    images: ["img/2/steam.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/steam.png" class="linkLogo"><a href="https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/">Silksong Steam page</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=137s">Daily Silksong News -701</a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2019-02-16",
    title: "Silksong sample music track removed",
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=155s">Daily Silksong News -700</a></div>',
    ],
    type: "Kinda",
  },
  {
    date: "2019-03-19",
    title: "Mini Silksong Update",
    images: ["img/4/blog.jpg"],
    imagetype: "big",
    links: [
      '<div class="linkDiv"><img src="img/logos/teamcherry.png" class="linkLogo"><a href="https://www.teamcherry.com.au/blog/hollow-knight-silksong-revealed">LATE ANNIVERSARY CELEBRATION! Blog Post</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=435s">Daily Silksong News -669</a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2019-04-26",
    title: 'Nintendo "claims" that Silksong will release within the next fiscal year',
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=756s">Daily Silksong News -631</a></div>',
    ],
    type: "Maybe",
  },
  {
    date: "2019-06-11",
    title: "Silksong appeared on the Nintendo Direct of the E3 2019",
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=1143s">Daily Silksong News -585</a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2019-06-12",
    title: "Silksong Demo playable in the Nintendo Switch section of E3 2019",
    images: [
      "https://preview.redd.it/everything-silksong-timeline-2019-2025-v0-i930yd1btnle1.png?width=642&format=png&auto=webp&s=a96797eaf6a33aac05a84441f2b760e4eead62b2",
    ],
    imagetype: "big",
    links: [
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/TeamCherryGames/status/1138668903893164033">Team Cherry tweet</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=1169s">Daily Silksong News -584</a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2019-06-13",
    title: "Silksong Demo uploaded on the official Nintendo youtube channel",
    images: ["img/8/youtube.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Y8lvHT_IQbM">Hollow Knight: Silksong Gameplay - Nintendo Treehouse: Live | E3 2019</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=1182s">Daily Silksong News -583</a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2019-06-25",
    title: "Team Cherry posts Post E3 Wrap ",
    images: ["img/9/blog.jpg"],
    imagetype: "big",
    links: [
      '<div class="linkDiv"><img src="img/logos/teamcherry.png" class="linkLogo"><a href="https://www.teamcherry.com.au/blog/post-e3-wrap-silksong-systems-update">POST E3 WRAP! Blog Post</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=1307s">Daily Silksong News -571</a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2019-09-18",
    title: "Steam page bug shows a june twelve 2020 release date",
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=1999s&pp=0gcJCTEAlc8ueATH">Daily Silksong News -485</a></div>',
    ],
    type: "Kinda",
  },
  {
    date: "2019-10-10",
    title: "Silksong Demo playable in Pax Australia announced",
    images: ["img/11/twitter.jpg"],
    imagetype: "big",
    links: [
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/TeamCherryGames/status/1182098459278467073">Team Cherry tweet</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=2159s">Daily Silksong News -464</a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2019-10-28",
    title: "Silksong Steam page updated with new assets",
    links: [
      '<div class="linkDiv"><img src="img/logos/steam.png" class="linkLogo"><a href="https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/">Silksong Steam page</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=2316s">Daily Silksong News -428</a></div>',
    ],
    type: "Kinda",
  },
  {
    date: "2019-12-13",
    title: "Team Cherry posts Holiday Sign off",
    images: ["img/13/blog.jpg"],
    imagetype: "big",
    links: [
      '<div class="linkDiv"><img src="img/logos/teamcherry.png" class="linkLogo"><a href="https://www.teamcherry.com.au/blog/post-e3-wrap-silksong-systems-update">TEAM CHERRY HOLIDAY SIGN OFF</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=2613s">Daily Silksong News -400</a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2020-01-20",
    title: 'Nintendo "claims" that Silksong will release within the next fiscal year (again)',
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=2924s">Daily Silksong News -356</a></div>',
    ],
    type: "Maybe",
  },
  {
    date: "2020-01-26",
    title: "u/big_boi878 'Seth' talks to Team Cherry as his wish",
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=2980s">Daily Silksong News -356 (again?)</a></div>',
    ],
    type: "Maybe",
  },
  {
    date: "2020-01-31",
    title: "u/big_boi878 'Seth' talks to Team Cherry again",
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=3040s">Daily Silksong News -351 </a></div>',
    ],
    type: "Maybe",
  },
  {
    date: "2020-02-04",
    title: "u/big_boi878 'Seth' is offered chance to create a character for Silksong",
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=3086s">Daily Silksong News -347 </a></div>',
    ],
    type: "Maybe",
  },
  {
    date: "2020-04-02",
    title: "u/big_boi878 'Seth' claims that his boss character is named Seth and he will be featured soon",
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=3510s&pp=0gcJCTEAlc8ueATH">Daily Silksong News -289 </a></div>',
    ],
    type: "Maybe",
  },
  {
    date: "2020-06-15",
    title: "Leth posts a zip file on the Hollow Knight discord with info about a new npc called 'Huntress'",
    images: ["img/19/riddle.webp"],
    links: [
      '<div class="linkDiv"><img src="img/logos/discord.png" class="linkLogo"><a href="https://discord.com/channels/283467363729408000/586931790208434203/722196291592912906">Discord Message</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=4016s">Daily Silksong News -214 </a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2020-06-22",
    title: "Leth posts a zip file on the Hollow Knight discord with info about a new npc called 'Grindle'",
    images: ["img/20/riddle.webp"],
    links: [
      '<div class="linkDiv"><img src="img/logos/discord.png" class="linkLogo"><a href="https://discord.com/channels/283467363729408000/586931790208434203/724730813887021158">Discord Message</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=4093s">Daily Silksong News -207 </a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2020-06-29",
    title: "Leth posts a zip file on the Hollow Knight discord with info about a new npc called 'The Caravan'",
    images: ["img/21/riddle.webp"],
    links: [
      '<div class="linkDiv"><img src="img/logos/discord.png" class="linkLogo"><a href="https://discord.com/channels/283467363729408000/586931790208434203/727297949201334282">Discord Message</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=4163s">Daily Silksong News -200 </a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2020-07-05",
    title: "Leth posts a zip file on the Hollow Knight discord with new info about 'Seth'",
    images: ["img/22/riddle.webp"],
    links: [
      '<div class="linkDiv"><img src="img/logos/discord.png" class="linkLogo"><a href="https://discord.com/channels/283467363729408000/586931790208434203/729804624638509164">Discord Message</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=4216s">Daily Silksong News -194 </a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2020-08-21",
    title: "Nintendo Indie World shared an infographic about indio games coming to the switch with the Silksong logo",
    images: ["https://pbs.twimg.com/media/Ef8xhkNWoAMlwqv?format=jpg&name=medium"],
    links: [
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/NintendoUK/status/1296809703230582785">Nintendo UK Tweet</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=4558s">Daily Silksong News -147 </a></div>',
    ],
    type: "Maybe",
  },
  {
    date: "2020-11-30",
    title: "Team Cherry replied to kickstarter about the lack of updates",
    images: ["img/24/comment.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/kickstarter.png" class="linkLogo"><a href="https://www.kickstarter.com/projects/11662585/hollow-knight/comments?comment=Q29tbWVudC0zMDgwMDAyMg%3D%3D">Kickstarter comment</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=5131s">Daily Silksong News -46 </a></div>',
    ],
    type: "Kinda",
  },
  {
    date: "2020-12-13",
    title: "Edge Magazine teases new issue with what appears to be Hornets head",
    images: ["img/25/tweet.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/edgeonline/status/1338072669527420928"> Edge Magazine tweet </a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=5251s">Daily Silksong News -33 </a></div>',
    ],
    type: "Maybe",
  },
  {
    date: "2020-12-24",
    title: "New issue of Edge Magazine is confirmed to have new information about Silksong",
    images: ["https://i.redd.it/puklju4x75761.jpg", "img/26/cover2.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=5330s">Daily Silksong News -22 </a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2020-12-31",
    title: "New issue of Edge Magazine is released",
    images: ["img/27/screenshot1.jpg", "img/27/screenshot2.jpg", "img/27/screenshot3.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/edgeonline/status/1344588834231693313"> Edge Magazine tweet </a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=5397s">Daily Silksong News -15 </a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2021-01-16",
    title: "Daily Silksong News YT channel is created",
    images: ["img/28/thumbnail.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=7SnMKTy_k1w">Daily Silksong News 1 </a></div>',
    ],
    type: "Other",
  },
  {
    date: "2021-09-14",
    title: "Nvidia leaks alleged release date of february fifteenth 2022 ",
    type: "Maybe",
  },
  {
    date: "2022-01-23",
    title: "A R/HollowKnight moderator states that there's no imminent release of Silksong",
    links: [
      '<div class="linkDiv"><img src="img/logos/reddit.png" class="linkLogo"><a href="https://www.reddit.com/r/HollowKnight/comments/sau9ii/rhollowknight_announcement_we_have_no_expectation/"> Reddit post </a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=weR-Fprw6dQ">Daily Silksong News 373 </a></div>',
    ],
    type: "No, but",
  },
  {
    date: "2022-02-12",
    title: "Team Cherry states that they're still working on the game",
    links: [
      '<div class="linkDiv"><img src="img/logos/pcgamer.jpg" class="linkLogo"><a href="https://www.pcgamer.com/hollow-knight-silksong-everything-we-know/"> PC Gamer article </a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Doib0u8KdjI">Daily Silksong News 393 </a></div>',
    ],
    type: "No, but",
  },
  {
    date: "2022-03-15",
    title: "Makoto Koji (Hornets voice actor) finished voicing Silksong",
    images: ["img/32/instagram.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/instagram.png" class="linkLogo"><a href="https://www.instagram.com/p/CbEZIEtrWu5/c/17951635072691639/r/17994866737434504/?img_index=1">Makoto Koji comment</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=XnGASjuTTQw">Daily Silksong News 424 </a></div>',
    ],
    type: "Kinda",
  },
  {
    date: "2022-04-30",
    title: "New quote from Team Cherry regarding Silksong win on the Unity Awards 2021",
    images: ["img/33/quote.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/unity.png" class="linkLogo"><a href="https://unity.com/awards/2021"> The Unity Awards 2021 </a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=a0RWCOVWM78">Daily Silksong News 470 </a></div>',
    ],
    type: "Kinda",
  },
  {
    date: "2022-06-12",
    title: "Silksong finally has a new trailer on the Xbox Games Showcase",
    images: ["img/34/thumbnail.jpg", "img/34/print.jpg", "img/34/print2.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=JSfuFlhsxZY">Hollow Knight: Silksong - Xbox Game Pass Reveal Trailer - Xbox & Bethesda Games Showcase 2022 </a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=4oRMNZ_i2tI">Daily Silksong News 513 </a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2022-06-13",
    title:
      "A new clip with Hornet fighting the Last Judge posted by Xbox on twitter and confirmation of an 12 month release window",
    images: ["img/35/tweet.jpg", "img/35/judge.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/Xbox/status/1536065644516483073">Xbox new footage tweet</a></div>',
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/Xbox/status/1536034468460261376">Xbox 12 month release tweet</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=h3OJro0ufxY">Daily Silksong News 514 </a></div>',
    ],
    type: "Kinda",
  },
  {
    date: "2022-06-14",
    title: "Couple new Silksong clips from the Xbox Games Showcase Extended",
    images: ["img/36/print1.jpg", "img/36/print2.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Rl3Z0-_Zblg">ID@Xbox - Announce Trailer - Xbox Games Showcase Extended 2022  </a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=oORVxMCLI28">Daily Silksong News 515 </a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2022-06-16",
    title: "More new seconds of Silksong footage by Xbox but the video is privated later",
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=rQYwf9acBrw">Daily Silksong News 517 </a></div>',
    ],
    type: "Kinda",
  },
  {
    date: "2022-09-16",
    title: "Silksong confirmed for PS4 and PS5",
    images: ["img/38/tweet.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/PlayStation/status/1570797280063627264">Playstation announcement tweet</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=lQU9AAU-MwE">Daily Silksong News 609 </a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2022-09-17",
    title: "New Silksong screenshots from the PlayStation Store",
    images: ["img/39/print.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/psstore.png" class="linkLogo"><a href="https://store.playstation.com/en-us/concept/10005908">Silksong PlayStation Store page</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Rodsb_gAVCU">Daily Silksong News 610 </a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2022-10-29",
    title: "Named Silksong screenshots found on the Xbox Wire Website",
    images: ["img/40/print.jpg"],
    imagetype: "big",
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=4yYBbbNlFxo">Daily Silksong News 652 </a></div>',
    ],
    type: "Kinda old",
  },
  {
    date: "2023-02-02",
    title: "Silksong eShop Metadata, Xbox Blogposts and New Trademarks",
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Iyq0GW9KtDc">Daily Silksong News 748 </a></div>',
    ],
    type: "Maybe",
  },
  {
    date: "2023-05-10",
    title: "Silksong delay confirmed by Leth on Twitter",
    images: [
      "https://preview.redd.it/everything-silksong-timeline-2019-2025-v0-g8j7xa7zdole1.png?width=644&format=png&auto=webp&s=74f256caac1b17ae0ca605575456e081fe4b545c",
    ],
    links: [
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/griffinmatta/status/1656106351184199680">Leths tweet </a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=dDacZ8u3Obk">Daily Silksong News 845 </a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2023-06-29",
    title: "Namedrop for Hornet familiar tool 'Cogfly'",
    images: ["img/43/nendoroid.webp"],
    links: [
      '<div class="linkDiv"><img src="img/logos/nenroid.png" class="linkLogo"><a href="https://www.goodsmile.info/en/product/14581/Nendoroid+Hornet.html">Good Smile Nendoroid Hornet</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=5D9i9fX9SGE">Daily Silksong News 895 </a></div>',
    ],
    type: "Kinda",
  },
  {
    date: "2023-07-22",
    title: "Ari Gibson answers some fan questions at AVCon",
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=D9m-oBgr-bQ">Daily Silksong News 918 </a></div>',
    ],
    type: "Kinda",
  },
  {
    date: "2023-09-22",
    title: "Silksong Steam page gets a minor update",
    links: [
      '<div class="linkDiv"><img src="img/logos/steam.png" class="linkLogo"><a href="https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/">Silksong Steam page</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=MXwgo-JHYPQ">Daily Silksong News 980 </a></div>',
    ],
    type: "Kinda",
  },
  {
    date: "2023-12-13",
    title: "Silksong trailer metadata extracted containing clip names",
    images: ["img/46/coralking.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=CduKctEyPKE">Daily Silksong News 1062 </a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2024-03-17",
    title: "Silksong is said to definitely release before Crowsworn ",
    images: ["img/47/print.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/reddit.png" class="linkLogo"><a href="https://www.reddit.com/r/Silksong/comments/1bhhpf4/i_was_at_day_of_the_devs_today_i_found_someone/">Reddit post </a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=ODnG4vjoOuE">Daily Silksong News 1158 </a></div>',
    ],
    type: "Kinda",
  },
  {
    date: "2024-04-02",
    title: "Silksong gets new Microsoft Store page",
    images: ["img/48/print.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/griffinmatta/status/1774895893520466278">Leths tweet </a></div>',
      '<div class="linkDiv"><img src="img/logos/xbox.png" class="linkLogo"><a href="https://www.xbox.com/en-US/games/hollow-knight-silksong">Silksong Xbox page</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=CbmtBrOSmlE">Daily Silksong News 1173 </a></div>',
    ],
    type: "Kinda",
  },
  {
    date: "2024-04-04",
    title: "Silksong gets several new age ratings",
    links: [
      '<div class="linkDiv"><img src="img/logos/reddit.png" class="linkLogo"><a href="https://www.reddit.com/r/Silksong/comments/1buhzj0/sorry_to_burst_your_bubbles_but_all_the/">Reddit post</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=SBzSijb7_y8">Daily Silksong News 1175 </a></div>',
    ],
    type: "Maybe",
  },
  {
    date: "2024-06-07",
    title: "Leaker hints at Silksong on SGF",
    images: ["img/50/tweet.jpg"],
    imagetype: "big",
    links: [
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/eXtas1stv/status/1798739884628439375">eXtas1s tweet</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=ARpy-EhHDCs">Daily Silksong News 1238 </a></div>',
    ],
    type: "Maybe",
  },
  {
    date: "2025-01-16",
    title: "William Pellen tweets something that some consider to be an ARG",
    images: ["img/51/tweet.jpg"],
    imagetype: "small",
    links: [
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/everydruidwaswr/status/1879751713621725206">William Pellens tweet</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=FA9H3snFrSQ">Daily Silksong News 1462 </a></div>',
    ],
    type: "Maybe",
  },
  {
    date: "2025-01-18",
    title: "Leth confirms that there is no ARG and it was just a coincidence",
    images: ["img/52/discord.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/discord.png" class="linkLogo"><a href="https://discord.com/channels/283467363729408000/586931790208434203/1330100156518891571">Leths message </a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=O9NnGdrNZQE">Daily Silksong News 1462 </a></div>',
    ],
    type: "Maybe",
  },
  {
    date: "2025-01-23",
    title:
      "Some user on Reddit claims to be a Team Cherry VA says that a 2025 release is likely (this was not regarded by many)",
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=EHJbRWBd3K4">Daily Silksong News 1469 </a></div>',
    ],
    type: "No, but",
  },
  {
    date: "2025-03-18",
    title: "Xbox hints about Silksong again in new ID@Xbox article",
    images: ["img/54/print.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/xbox.png" class="linkLogo"><a href="https://news.xbox.com/en-us/2025/03/18/idxbox-developers-finding-success-with-xbox/">Xbox article</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=R56ol_rp18I">Daily Silksong News 1523 </a></div>',
    ],
    type: "Maybe",
  },
  {
    date: "2025-03-24",
    title:
      "Biggest Silksong Steam page update in years including copyright update, new library images and NVIDIA GeForce Now entry",
    images: ["img/55/steamdb.jpg"],
    imagetype: "big",
    links: [
      '<div class="linkDiv"><img src="img/logos/steamdb.png" class="linkLogo"><a href="https://steamdb.info/app/1030300/history/">SteamDB page</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=i9LY67e14Oo">Daily Silksong News 1529 </a></div>',
    ],
    type: "Kinda",
  },
  {
    date: "2025-04-02",
    title:
      "Silksong 2025 release confirmed with new clips on the nintendo switch 2 direct, there was also a new press kit with new images about Silksong",
    images: ["img/56/banner.jpg", "img/56/tweet.png"],
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=VrTVeYm4iIM&t=2986s">Nintendo Switch 2 Direct </a></div>',
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/NintendoEurope/status/1907430913148944627">Nintendo Europes tweet</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=-3QECuK0_tE">Daily Silksong News 1538 </a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=J1M5rKEKN2Q">Daily Silksong News 1539 </a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2025-04-07",
    title: "New Silksong Screenshots from Nintendo Japan eShop",
    images: ["img/57/print1.jpg", "img/57/print2.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://fixupx.com/mossbag69/status/1909249997696086495">Mossbags tweet</a></div>',
      '<div class="linkDiv"><img src="img/logos/nintendoeshop.png" class="linkLogo"><a href="https://store-jp.nintendo.com/item/software/D70010000096731">eShop Japan Silksong page</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=ObCRErMU9e4">Daily Silksong News 1543 </a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2025-04-08",
    title: "Silksong confirmed in Switch 1 & 2, and Silksong hinted at on ACMI Game Worlds exhibition on september",
    images: ["img/58/tweet.jpg", "img/58/print.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/griffinmatta/status/1909395467945099502">Leths tweet</a></div>',
      '<div class="linkDiv"><img src="img/logos/acmi.png" class="linkLogo"><a href="https://www.acmi.net.au/whats-on/game-worlds/">ACMI Game Worlds post</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Sf1SgcVm6mk">Daily Silksong News 1544 </a></div>',
    ],
    type: "Kinda",
  },
  {
    date: "2025-04-09",
    title: "Team Cherry anwers Kickstarter backer about the Silksong keys",
    images: ["img/59/print.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/kickstarter.png" class="linkLogo"><a href="https://www.kickstarter.com/projects/11662585/hollow-knight/comments?comment=Q29tbWVudC00NDc1MTE2NQ%3D%3D&reply=Q29tbWVudC00NDc3Njk1Mg%3D%3D">Kickstarter comment</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=panptEMYr2k">Daily Silksong News 1545 </a></div>',
    ],
    type: "No, but",
  },
  {
    date: "2025-04-18",
    title: "The Silksong trailer is removed from the Steam page, it was later confirmed to be caused by a bug",
    images: ["img/60/print.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/steam.png" class="linkLogo"><a href="https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/">Silksong Steam page</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://youtu.be/O1NDP-qOKtA">Daily Silksong News 1554 </a></div>',
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/griffinmatta/status/1913667736099590533">Leths tweet</a></div>',
    ],
    type: "No, but",
  },
  {
    date: "2025-04-28",
    title: "Silksong confirmed again for 2025 on the Nintendo Magazine",
    images: ["img/61/print.jpg"],
    imagetype: "small",
    links: [
      '<div class="linkDiv"><img src="img/logos/nintendoeshop.png" class="linkLogo"><a href="https://www.nintendo.com/jp/games/feature/magazine_2025special/index.html?page=25&device=pc">Nintendo Magazine 2025 (Page 48)</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=UDQdwFY6UE8">Daily Silksong News 1565 </a></div>',
    ],
    type: "Kinda",
  },
  {
    date: "2025-04-29",
    title: "Silksong appears on ACMI Instagram, with an old screenshot and a spritesheet for Hornet",
    images: ["img/62/print1.jpg", "img/62/print2.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/instagram.png" class="linkLogo"><a href="https://www.instagram.com/p/DJAzZwNTynn/">ACMIs Instagram post </a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=UDQdwFY6UE8">Daily Silksong News 1565 </a></div>',
    ],
    type: "Kinda",
  },
  {
    date: "2025-04-30",
    title:
      "Nintendo sends out emails about new games on the Switch 2, confirming again Silksong coming out later this year.",
    images: [
      "https://preview.redd.it/nintendo-is-sending-out-emails-confirming-silksong-is-v0-mu3d7u96d1ye1.jpg?width=1080&crop=smart&auto=webp&s=bec9757c9517703cbc26bc034375c4ed43c92ee3",
      "https://preview.redd.it/nintendo-is-sending-out-emails-confirming-silksong-is-v0-tgwntu96d1ye1.jpg?width=1080&crop=smart&auto=webp&s=6ecc743a0ce54a5a2e8ad5bc3106c6d5634e4fe9",
      "https://preview.redd.it/nintendo-is-sending-out-emails-confirming-silksong-is-v0-ju6fu2b6d1ye1.jpg?width=1080&crop=smart&auto=webp&s=5fb810fcd9f506cad758ee3d4ab86969e98a59c8",
    ],
    links: [
      '<div class="linkDiv"><img src="img/logos/reddit.png" class="linkLogo"><a href="https://www.reddit.com/r/Silksong/comments/1kbr746/nintendo_is_sending_out_emails_confirming/">Reddit post </a></div>',
    ],
    type: "No, but",
  },
  {
    date: "2025-05-01",
    title: "Hornet's Partial Sprite Sheet Revealed on IGN blog post",
    images: ["img/64/print.jpg", "img/64/spritesheet.png"],
    links: [
      '<div class="linkDiv"><img src="img/logos/ign.png" class="linkLogo"><a href="https://www.ign.com/articles/hollow-knight-silksong-will-be-playable-in-september-2025-at-an-australian-museum">IGN blog post </a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=-ov5oaqoEr8">Daily Silksong News 1567 </a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2025-05-17",
    title: "Silksong confirmed to be releasing after June 6th",
    images: [
      "https://preview.redd.it/silksong-confirmed-to-be-releasing-after-june-6th-this-is-v0-5a70utj8h71f1.png?width=1080&crop=smart&auto=webp&s=b0ffd5a5aabd109206f73ce83443a4b7a1bf2a01",
      "https://preview.redd.it/silksong-confirmed-to-be-releasing-after-june-6th-this-is-v0-as113rj8h71f1.png?width=1080&crop=smart&auto=webp&s=390e025ab56db8891f7b48345269deb6b4a350c8",
    ],
    links: [
      '<div class="linkDiv"><img src="img/logos/nintendoeshop.png" class="linkLogo"><a href="https://store-jp.nintendo.com/feature/feature_switch2_soft_2504">Nintendo Switch 2 Software</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=C6jmX4LJuuQ">Daily Silksong News 1583 </a></div>',
    ],
    type: "Kinda",
  },
  {
    date: "2025-05-20",
    title: "New Silksong icon added to the Nintendo eShop",
    images: ["img/66/print.png"],
    links: [
      '<div class="linkDiv"><img src="img/logos/reddit.png" class="linkLogo"><a href="https://www.reddit.com/r/Silksong/comments/1kqyoz8/small_news_team_cherry_has_created_a_colorchanged/">Reddit post</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Xij94fN1pnk">Daily Silksong News 1586 </a></div>',
    ],
    type: "No, but",
  },
  {
    date: "2025-06-03",
    title: "A bunch of changes to the Silksong steam page on the background, including a new depot change",
    images: ["img/67/print1.png", "img/67/print2.png"],
    links: [
      '<div class="linkDiv"><img src="img/logos/steamdb.png" class="linkLogo"><a href="https://steamdb.info/app/1030300/history/">SteamDB page</a></div>',
      '<div class="linkDiv"><img src="img/logos/reddit.png" class="linkLogo"><a href="https://www.reddit.com/r/Silksong/comments/1l27d0p/steam_update_recap/">Reddit post</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=2RF1Xnfg4dw">Daily Silksong News 1600</a></div>',
    ],
    type: "Kinda big",
  },
  {
    date: "2025-06-06",
    title: "Silksong steam page updated on the background, now with suport for MacOS and Linux",
    images: ["img/68/print.png"],
    imagetype: "small",
    links: [
      '<div class="linkDiv"><img src="img/logos/steamdb.png" class="linkLogo"><a href="https://steamdb.info/app/1030300/history/">SteamDB page</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=1_BbaVd5fjk">Daily Silksong News 1603 </a></div>',
    ],
    type: "Kinda",
  },
  {
    date: "2025-06-08",
    title: "Silksong shown in the ROG Xbox Ally Reveal Trailer, Leth also confirms release before the holidays season",
    images: ["img/69/print1.png", "img/69/print2.png", "img/69/print3.png", "img/69/leth.png"],
    imagetype: "small",
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://youtu.be/FIVmyOIV1MQ">ROG Xbox Ally World Premiere Reveal Trailer</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=167tSGgDmW0">Daily Silksong News 1605 </a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2025-06-10",
    title: "PS4 and Nintendo Switch 2 added to the Silksong Website",
    images: ["img/70/print.png"],
    links: [
      '<div class="linkDiv"><img src="img/logos/teamcherry.png" class="linkLogo"><a href="https://hollowknightsilksong.com/">Silksong Website</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=-X3ZZ-x0IcI">Daily Silksong News 1607 </a></div>',
    ],
    type: "No, but",
  },
  {
    date: "2025-06-25",
    title: "Leth was added as a collaborator to the Silksong Kickstarter page, possibly preparing for the backers keys",
    images: ["img/71/print.png"],
    links: [
      '<div class="linkDiv"><img src="img/logos/kickstarter.png" class="linkLogo"><a href="https://www.kickstarter.com/projects/11662585/hollow-knight/creator">Kickstarter creator page</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=2wkwk-ORwdY">Daily Silksong News 1622 </a></div>',
    ],
    type: "No, but",
  },
  {
    date: "2025-06-30",
    title:
      "ACMI posts new Silksong images on their Instagram stories, including new Hornet sprite sheets and sketches, they also teased more info on the next thuesday",
    images: ["img/72/print1.png", "img/72/print2.png", "img/72/print3.png"],
    links: [
      '<div class="linkDiv"><img src="img/logos/reddit.png" class="linkLogo"><a href="https://www.reddit.com/r/Silksong/comments/1lnxb3k/new_things_from_acmi_instagram/#lightbox">Reddit post</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=VPJ5kUUbyVY">Daily Silksong News 1627 </a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2025-07-03",
    title:
      "ACMI posts a promo video for their Game Worlds exhibition pre-sale, on their website a new 'Silksong Stash' bundle is available for pre-order, which includes a 64 page magazine about Hollow Knight and Silksong, there was also a bunch of steamDB changes",
    images: ["img/73/print2.png", "img/73/print1.png", "img/73/print3.png"],
    links: [
      '<div class="linkDiv"><img src="img/logos/acmi.png" class="linkLogo"><a href="https://www.acmi.net.au/whats-on/game-worlds-presale/">ACMI Game Worlds pre-sale page</a></div>',
      '<div class="linkDiv"><img src="img/logos/instagram.png" class="linkLogo"><a href="https://www.instagram.com/acmionline/reel/DLoCDuhqbNc/">ACMI Instragram post</a></div>',
      '<div class="linkDiv"><img src="img/logos/steamdb.png" class="linkLogo"><a href="https://steamdb.info/app/1030300/history/">SteamDB page</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=z-XBjye-zsc">Daily Silksong News 1630 </a></div>',
    ],
    type: "Kinda",
  },
  {
    date: "2025-07-28",
    title: "Xbox confirms that a new Silksong demo will be playable at Gamescom 2025 for PC and ROG Xbox Ally",
    images: ["img/74/print1.png", "img/74/print2.png"],
    links: [
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/geoffkeighley/status/1949819502658523580">Geoff Keighleys tweet</a></div>',
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/Xbox/status/1949817444572471371">Xbox tweet</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=FLAbIf3Opf8">Daily Silksong News 1655 </a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2025-08-07",
    title:
      "Silksong demo confirmed on the Nintendo Switch booth at Gamescom, ROG Xbox Ally release date confirmed for October 16th",
    images: ["img/75/print1.png", "img/75/print2.jpeg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/reddit.png" class="linkLogo"><a href="https://www.reddit.com/r/Silksong/comments/1mk2gua/silksong_before_october_16th/">Reddit post</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=rQrgqCrwqKA">Daily Silksong News 1665 </a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2025-08-18",
    title:
      "New images of the Gamescom booths begin to appear, and Geoff Keighley makes an cryptic tweet hinting at the Gamescom Opening Live",
    images: ["img/76/print1.png", "img/76/print2.webp", "img/76/print3.webp"],
    links: [
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/geoffkeighley/status/1957492830374650018">Geoff Keighley tweet</a></div>',
      '<div class="linkDiv"><img src="img/logos/reddit.png" class="linkLogo"><a href="https://www.reddit.com/r/Silksong/comments/1mtmie2/another_shot_of_the_nintendo_booth_someones/">Reddit post about the Nintendo Booth</a></div>',
      '<div class="linkDiv"><img src="img/logos/reddit.png" class="linkLogo"><a href="https://www.reddit.com/r/Silksong/comments/1mthxlg/silksong_xbox_booth_at_ganescom/">Reddit post about the Xbox Booth</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=3MhUX6Jbv6U">Daily Silksong News 1676 </a></div>',
    ],
    type: "Kinda",
  },
  {
    date: "2025-08-19",
    title:
      "The  official Team Cherry account tweets about an special Silksong announcement, premiering on their YouTube channel in 48 hours, Silksong was also mentioned on the Gamescom opening night live, confirming a 2025 release again",
    images: [
      "https://pbs.twimg.com/media/GyuMbmZacAIEyM8?format=jpg&name=large",
      "img/78/print1.png",
      "img/78/print2.png",
    ],
    links: [
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/TeamCherryGames/status/1957812884773433667?t=2EnT6RjSlXMWyWFMXBnOsg&s=19">Team Cherry tweet</a></div>',
      '<div class="linkDiv"><img src="img/logos/teamcherry.png" class="linkLogo"><a href="https://www.teamcherry.com.au/blog/11xf7azcuebhybgossfhdc0mphiqbs-en88t">Team Cherry blog post</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=6XGeJwsUP9c">Silksong announcement premiere</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://youtu.be/imvNpWtuQbY">Emergency Silksong news</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://youtu.be/JkjebOOXbX4?si=m9VUJerpLFLhxVI-">Daily Silksong News 1677 </a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2025-08-20",
    title: "Silksong demo playable at the Xbox and Nintendo booths on Gamescom",
    images: ["img/79/print1.png", "img/79/print2.png"],
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://youtu.be/BVB-dL88bUU?si=Y869NRjJI6F71s0n">Daily Silksong News 1678 </a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2025-08-21",
    title:
      "The Silksong release date is revealed to be september 4 2025 at the Special Silksong announcement, some store pages have already updated",
    images: ["img/80/print1.jpg", "img/80/print2.png", "img/80/print3.png"],
    links: [
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/TeamCherryGames/status/1958539409789423741">Team Cherry tweet</a></div>',
      '<div class="linkDiv"><img src="img/logos/teamcherry.png" class="linkLogo"><a href="https://www.teamcherry.com.au/blog/11xf7azcuebhybgossfhdc0mphiqbs-en88t-53h3w">Team Cherry blog post</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=6XGeJwsUP9c">Hollow Knight: Silksong - Release Trailer</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://youtu.be/WZmGBEm8XdM?si=qvgGtqe8xXu_K-K0">Daily Silksong News 1679 </a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2025-08-22",
    title:
      "The Silksong Steam page is completely updated, new screenshots are available on the GOG Silksong page, and the trading cards and badges have been uploaded to Steam.",
    images: ["img/81/print1.png", "img/81/print2.png", "img/81/print3.png"],
    links: [
      '<div class="linkDiv"><img src="img/logos/steam.png" class="linkLogo"><a href="https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/">Silksong Steam page</a></div>',
      '<div class="linkDiv"><img src="img/logos/gog.jpeg" class="linkLogo"><a href="https://www.gog.com/en/game/hollow_knight_silksong">Silksong GOG page</a></div>',
      '<div class="linkDiv"><img src="img/logos/steamdb.png" class="linkLogo"><a href="https://steamdb.info/app/1030300/communityitems/">SteamDB page</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=u_h0ALfasmY">Daily Silksong News 1680 </a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2025-08-24",
    title: "Leth states that himself and the no eyes voice actress are back as VAs in Hollow Knight Silksong",
    images: ["img/82/print1.png"],
    imagetype: "small",
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=cs9QgQcBfh4">Daily Silksong News 1682 </a></div>',
    ],
    type: "No, but",
  },
  {
    date: "2025-08-25",
    title:
      "The PlayStation store has been updated with an alternate Silksong release trailer with no text and 3s of new footage, Team Cherry also began to send out the backer surveys",
    images: ["img/83/print4.png", "img/83/print1.png", "img/83/print2.png", "img/83/print3.png"],
    links: [
      '<div class="linkDiv"><img src="img/logos/psstore.png" class="linkLogo"><a href="https://store.playstation.com/en-us/concept/10005908">Silksong PlayStation Store page</a></div>',
      '<div class="linkDiv"><img src="img/logos/kickstarter.png" class="linkLogo"><a href="https://www.kickstarter.com/projects/11662585/hollow-knight/posts/4467168">Kickstarter update</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=DckeRj0VsiA">Daily Silksong News 1683 </a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2025-08-27",
    title:
      "Some Silksong image files have been updated on Steam, this includes a new desktop client icon, the Silksong website also updated with some of the new Steam screenshots",
    images: ["img/84/print1.png", "img/84/print2.png"],
    links: [
      '<div class="linkDiv"><img src="img/logos/teamcherry.png" class="linkLogo"><a href="https://hollowknightsilksong.com/">Silksong Website</a></div>',
      '<div class="linkDiv"><img src="img/logos/steamdb.png" class="linkLogo"><a href="https://steamdb.info/app/1030300/history/">SteamDB page</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=igUlq6LnNg4">Daily Silksong News 1685 </a></div>',
    ],
    type: "Kinda",
  },
  {
    date: "2025-08-28",
    title: "More Silksong screenshots uploaded to press kit with their file names",
    images: ["img/85/print1.png"],
    links: [
      '<div class="linkDiv"><img src="img/logos/googledrive.png" class="linkLogo"><a href="https://drive.google.com/drive/folders/12-80w1sEwXid1gYvJI4BAJC2PhM05Idf">Silksong Presskit</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://youtu.be/irlnfCeX2JQ?si=sMEGMijTWjLwnbSh&t=340">Daily Silksong News 1686 </a></div>',
    ],
    type: "Kinda",
  },
  {
    date: "2025-08-30",
    title:
      "Silksong price allegedly revealed by Gamestop, it was later said to be an expected price and subject to change",
    images: ["img/86/print1.png", "img/86/print2.png"],
    links: [
      '<div class="linkDiv"><img src="img/logos/gamestop.png" class="linkLogo"><a href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbk84SU83YU1jYzRDOHZtdUpaWnBtVkw1Y0hDQXxBQ3Jtc0ttdGRUVHRnMW82NG5yQU54dlBpbkVVUU1nS1A1RURPMDl1TnRYZ2F1ejZldlRsM3FPZTh2UHR4eG5tVUdyaTIzUDQ1dTJfNmhpZ2VIS3RSTmdFSDlZeDhGV0owUFcxcWFTV1pPY05RY19WS1pYSG43OA&q=https%3A%2F%2Fwww.gamestop.com%2Fvideo-games%2Fnintendo-switch%2Fproducts%2Fhollow-knight-silksong---nintendo-switch%2F432032.html&v=OXyJf-ZJbSo">Silksong Gamestop page</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=OXyJf-ZJbSo">Daily Silksong News 1688 </a></div>',
    ],
    type: "Maybe",
  },
  {
    date: "2025-08-31",
    title:
      "Silksong price confirmed to be $20 on a Team Cherry tweet, Leth also stated that there will be no pre-orders",
    images: ["img/87/print1.png", "img/87/print2.png"],
    links: [
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/TeamCherryGames/status/1962330350681735642">Team Cherry tweet</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=lMItT1p7u8w">Daily Silksong News 1690 </a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2025-09-02",
    title:
      "Silksong OST Price Revealed to be $12 on a Christopher Larkin tweet, there's also a new blog post on the Kickstarter",
    images: ["img/88/print1.png", "img/88/print2.png"],
    links: [
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/composerlarkin/status/1962724577538384231">Christopher Larkin tweet</a></div>',
      '<div class="linkDiv"><img src="img/logos/kickstarter.png" class="linkLogo"><a href="https://www.kickstarter.com/projects/11662585/hollow-knight/posts/4473863">Kickstarter update</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=K4spPWf_Fxs">Daily Silksong News 1691 </a></div>',
    ],
    type: "Yes",
  },
  {
    date: "2025-09-03",
    title: "Silksong confirmed to have Ultrawide support, OST confirmed to be 53 tracks long",
    images: ["img/89/print1.png", "img/89/print2.jpeg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/griffinmatta/status/1963104885722730672">Leth tweet</a></div>',
      '<div class="linkDiv"><img src="img/logos/reddit.png" class="linkLogo"><a href="https://www.reddit.com/r/Silksong/comments/1n78e99/53_track_ost_confirmed/">Reddit post</a></div>',
      //'<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="">Daily Silksong News 1692 </a></div>',
    ],
    type: "Yes",
  },
  {
    date: todayDateString, // Gets YYYY-MM-DD
    title: "Today (" + daysUntilRelease + " days until release)",
    // images: ["img/tomorrow/" + (Math.floor(Math.random() * 3) + 1) + ".png"],
    links: [
      '<div class="linkDiv"><img src="img/logos/silksong.ico" class="linkLogo"><a href="https://issilksongout.com/">Is Silksong Out?</a></div>',
    ],
    type: "Today",
  },
  {
    date: "2025-09-04",
    title: "Silksong is released on all platforms",
    images: ["img/90/print1.jpeg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/steam.png" class="linkLogo"><a href="https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/">Silksong Steam page</a></div>',
      '<div class="linkDiv"><img src="img/logos/gog.jpeg" class="linkLogo"><a href="https://www.gog.com/en/game/hollow_knight_silksong">Silksong GOG page</a></div>',
      '<div class="linkDiv"><img src="img/logos/humblebundle.png" class="linkLogo"><a href="https://www.humblebundle.com/store/hollow-knight-silksong">Silksong Humble Bundle page</a></div>',
      '<div class="linkDiv"><img src="img/logos/xbox.png" class="linkLogo"><a href="https://www.xbox.com/en-US/games/hollow-knight-silksong">Silksong Xbox page</a></div>',
      '<div class="linkDiv"><img src="img/logos/psstore.png" class="linkLogo"><a href="https://store.playstation.com/en-us/concept/10005908">Silksong PlayStation Store page</a></div>',
      '<div class="linkDiv"><img src="img/logos/nintendoeshop.png" class="linkLogo"><a href="https://www.nintendo.com/us/store/products/hollow-knight-silksong-switch/">Silksong Nintendo eShop page</a></div>',
    ],
    type: "Yes",
  },
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const lastDate = new Date(
  Math.max.apply(
    null,
    newsArray.map(function (e) {
      return new Date(e.date);
    })
  )
);

// Calculate days since reveal
const daysSinceReveal = Math.ceil((lastDate - revealDate) / (1000 * 60 * 60 * 24));

// Creating the timeline
for (let i = 0; i <= daysSinceReveal; i++) {
  let currentDate = new Date(revealDate);
  currentDate.setUTCDate(revealDate.getUTCDate() + i);

  const currentDateString = currentDate.toISOString().split("T")[0];
  const newsItem = newsArray.find((news) => news.date === currentDateString);

  if (currentDate.getUTCDate() === 1) {
    const currentMonth = currentDate.getUTCMonth();
    const currentYear = currentDate.getUTCFullYear();

    const newsThisMonth = newsArray.filter((news) => {
      const newsDate = new Date(news.date);
      const isCurrentMonthAndYear =
        newsDate.getUTCMonth() === currentMonth && newsDate.getUTCFullYear() === currentYear;

      const validTypes = ["Yes", "Kinda", "Maybe", "Kinda old", "Kinda big"];

      return isCurrentMonthAndYear && validTypes.includes(news.type);
    });
    const monthDiv = document.createElement("div");
    let newsMonthStatus;
    monthDiv.classList.add("month");
    monthDiv.setAttribute("data-date", currentDateString);
    let newsThisMonthAmount = newsThisMonth.length;

    if (currentMonth == todayDate.getUTCMonth()) {
      newsThisMonthAmount = newsThisMonthAmount - 1;
    }

    if (newsThisMonthAmount == 0) {
      newsMonthStatus = "No News";
    } else {
      newsMonthStatus = newsThisMonthAmount + " News";
    }
    monthDiv.innerHTML = `<b>${months[currentMonth]} ${currentYear} - ${newsMonthStatus}</b> <div class="hr"></div>`;

    timelineWrapper.appendChild(monthDiv);
  }

  const dayDiv = document.createElement("div");
  dayDiv.classList.add("day");
  dayDiv.setAttribute("data-date", currentDateString);

  if (currentDate > silksongReleaseDate) {
    const daysSinceRelease = Math.ceil((currentDate - silksongReleaseDate) / (1000 * 60 * 60 * 24));
    dayDiv.setAttribute("data-sinceRelease", daysSinceRelease);
  } else {
    dayDiv.setAttribute("data-sinceReveal", i);
  }

  dayDiv.setAttribute("data-news", "No");

  if (newsItem) {
    dayDiv.classList.add("news");

    if (newsItem.type == "Yes") {
      dayDiv.classList.add("green");
    } else if (
      newsItem.type == "Kinda" ||
      newsItem.type == "Maybe" ||
      newsItem.type == "Kinda old" ||
      newsItem.type == "Kinda big" ||
      newsItem.type == "Tomorrow" ||
      newsItem.type == "Today"
    ) {
      dayDiv.classList.add("yellow");
    } else if (newsItem.type == "Other") {
      dayDiv.classList.add("blue");
    }

    dayDiv.setAttribute("data-news", newsItem.type);

    const newsNumber = newsArray.findIndex((news) => news.date === currentDateString) + 1;
    dayDiv.setAttribute("data-newsCount", newsNumber);

    let formattedDate = formatStringDate(newsItem.date);

    if (newsItem.date === tomorrowDateString && newsItem.type !== "Tomorrow") {
      dayDiv.innerHTML = `<div class="news-circle"></div> <b> ${formattedDate} </b> - ${newsItem.title} (Tomorrow)`;
    }
    if (newsItem.date === todayDateString && newsItem.type !== "Today") {
      dayDiv.innerHTML = `<div class="news-circle"></div> <b> ${formattedDate} </b> - ${newsItem.title} (Today)`;
    } else {
      dayDiv.innerHTML = `<div class="news-circle"></div> <b> ${formattedDate} </b> - ${newsItem.title}`;
    }

    if (newsItem.images) {
      const imagesDiv = document.createElement("div");
      imagesDiv.classList.add("newsImages");
      if (newsItem.imagetype === "small") {
        imagesDiv.classList.add("smallimg");
      } else if (newsItem.imagetype === "big") {
        imagesDiv.classList.add("bigimg");
      }

      newsItem.images.forEach((imgSrc) => {
        const imgObject = document.createElement("img");
        imgObject.setAttribute("src", imgSrc);
        imgObject.classList.add("newsImg");
        imagesDiv.appendChild(imgObject);
      });
      dayDiv.appendChild(imagesDiv);
    }

    if (newsItem.links) {
      const linksDiv = document.createElement("div");
      linksDiv.classList.add("newsLinks");
      newsItem.links.forEach((linkHTML) => {
        const temp = document.createElement("div");
        temp.innerHTML = linkHTML;
        linksDiv.appendChild(temp.firstChild);
      });
      if (newsItem.date === todayDateString && newsItem.type !== "Today") {
        const temp = document.createElement("div");
        temp.innerHTML =
          '<div class="linkDiv"><img src="img/logos/silksong.ico" class="linkLogo"><a href="https://issilksongout.com/">Is Silksong Out?</a></div>';
        linksDiv.appendChild(temp.firstChild);
      }
      dayDiv.appendChild(linksDiv);
    }
  }

  timelineWrapper.appendChild(dayDiv);
}

let currentNews = 1;

window.addEventListener("scroll", () => {
  const days = document.querySelectorAll(".day");

  let closestDay = null;
  let minDistance = Infinity;
  const referenceOffset = 11 * 16; // 11rem to pixels

  days.forEach((day) => {
    const rect = day.getBoundingClientRect();
    const distance = Math.abs(rect.top - referenceOffset);

    if (distance < minDistance) {
      minDistance = distance;
      closestDay = day;
    }
  });

  if (closestDay) {
    // Get date from atribute
    const activeDate = closestDay.getAttribute("data-date");
    if (closestDay.getAttribute("data-sinceRelease")) {
      daysSince.textContent = closestDay.getAttribute("data-sinceRelease") + " days since release";
    } else {
      daysSince.textContent = closestDay.getAttribute("data-sinceReveal") + " days since reveal";
    }
    newsStatus.textContent = closestDay.getAttribute("data-news");
    // Updates the display
    currentDay.textContent = formatStringDate(activeDate);

    if (closestDay.getAttribute("data-newsCount")) {
      currentNews = parseInt(closestDay.getAttribute("data-newsCount"));
    }
  }
});

const newsDaysCount = [...document.querySelectorAll(".day.news")].length;

previous.addEventListener("click", () => {
  if (currentNews - 1 != 0) {
    currentNews = currentNews - 1;
  }
  $('[data-newsCount="' + currentNews + '"]')
    .get(0)
    .scrollIntoView({ behavior: "smooth" });
  console.log(currentNews);
});

next.addEventListener("click", () => {
  if (currentNews != newsDaysCount) {
    currentNews = currentNews + 1;
  }
  $('[data-newsCount="' + currentNews + '"]')
    .get(0)
    .scrollIntoView({ behavior: "smooth" });
  console.log(currentNews);
});

first.addEventListener("click", () => {
  currentNews = 1;
  $('[data-newsCount="1"]').get(0).scrollIntoView({ behavior: "smooth" });
});

last.addEventListener("click", () => {
  currentNews = newsDaysCount - 1;
  $('[data-newsCount="' + (newsDaysCount - 1) + '"]')
    .get(0)
    .scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", function () {
  const daysSinceRevealRelease = Math.ceil((silksongReleaseDate - revealDate) / (1000 * 60 * 60 * 24));

  const actualNewsCount = newsDaysCount - 12;
  const avgDaysBetweenNews = Math.floor(daysSinceRevealRelease / actualNewsCount);
  const newsChance = ((actualNewsCount / daysSinceRevealRelease) * 100).toFixed(2);
  const lastNews = newsArray[newsDaysCount - 3];
  const nextNewsDate = new Date(lastNews.date);
  nextNewsDate.setDate(nextNewsDate.getDate() + avgDaysBetweenNews);

  const hollowknightRevealDate = new Date(Date.UTC(2014, 10, 15));
  hollowknightRevealDate.setUTCHours(0, 0, 0, 0);
  const hollowknightReleaseDate = new Date(Date.UTC(2017, 1, 24));
  hollowknightReleaseDate.setUTCHours(0, 0, 0, 0);
  const daysHollowKnightTook = Math.ceil((hollowknightReleaseDate - hollowknightRevealDate) / (1000 * 60 * 60 * 24));
  const hollowKnightSilksongRatio = ((daysSinceRevealRelease / daysHollowKnightTook) * 100).toFixed(2);

  const silksongReleaseWindowDate = new Date(Date.UTC(2022, 5, 13));
  silksongReleaseWindowDate.setUTCHours(0, 0, 0, 0);

  const typeCount = {};

  const newsByMonth = {};
  newsArray.forEach((news) => {
    const month = new Date(news.date).toISOString().slice(5, 7); // "YYYY-MM"
    newsByMonth[month] = (newsByMonth[month] || 0) + 1;
  });

  const mostActiveMonth = Object.entries(newsByMonth).reduce((max, current) => (current[1] > max[1] ? current : max));

  newsArray.forEach((news) => {
    typeCount[news.type] = (typeCount[news.type] || 0) + 1;
  });

  document.getElementById("stats").innerHTML = `
      <h1>Silksong Stats</h1>

      <h3>Release Date</h3>
      <p id="release-countdown"></p>

      <h3>News Stats</h3>
      <p>Silksong was revealed <b>${daysSinceRevealRelease} days </b> before its release.</p>
      <p>There has been news <b>${actualNewsCount} times</b>.</p>
      <p>The most active month for news is <b>${months[mostActiveMonth[0] - 1]}</b> with <b>${
    mostActiveMonth[1]
  } </b> news events.</p>
      <p>On average, we have had news every <b>${avgDaysBetweenNews} days.</b></p>
      <p>Any given day had a <b>${newsChance}%</b> chance of having news.</p>

      <h3>Comparisons</h3>
      <p>Hollow Knight took <b>${daysHollowKnightTook} days</b> to release after its reveal</p>
      <p>Silksong took roughly <b>${hollowKnightSilksongRatio}%</b> as long as Hollow Knight did.</p>
      
      <h3>News Types</h3>
      <p><b class="green">Yes</b> -> ${typeCount.Yes} times</p>
      <p><b class="yellow">Kinda</b> -> ${typeCount.Kinda} times</p>
      <p><b class="yellow">Maybe</b> -> ${typeCount.Maybe} times</p>
      <p><b class="red">No, but</b> -> ${typeCount["No, but"]} times</p>
      <p><b class="yellow">Kinda big</b> -> ${typeCount["Kinda big"]} time</p>
      <p><b class="yellow">Kinda old</b> -> ${typeCount["Kinda old"]} time</p>
      <p><b class="blue">Other</b> -> ${typeCount.Other} time</p>
  `;

  const releaseDate = new Date("2025-09-04T07:00:00-07:00");

  function updateCountdown() {
    const now = new Date();
    const diff = releaseDate - now;

    if (diff <= 0) {
      document.getElementById("release-countdown").innerHTML = "<b>Silksong has released!</b>";
      clearInterval(timer);
      return;
    }

    const daysUntilRelease = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hoursUntilRelease = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutesUntilRelease = Math.floor((diff / (1000 * 60)) % 60);
    const secondsUntilRelease = Math.floor((diff / 1000) % 60);

    document.getElementById("release-countdown").innerHTML = `
      There's <b>${daysUntilRelease}</b> days, <b>${hoursUntilRelease}</b> hours, <b>${minutesUntilRelease}</b> minutes, and <b>${secondsUntilRelease}</b> seconds until Silksong releases. (4 September 2025, 07:00 AM PT)
    `;
  }

  const timer = setInterval(updateCountdown, 1000);
  updateCountdown();
});

function formatStringDate(dateString) {
  return dateString.split("-")[2] + " " + months[dateString.split("-")[1] - 1] + " " + dateString.split("-")[0];
}
