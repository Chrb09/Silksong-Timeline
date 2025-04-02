// Silksong reveal trailer date
const revealDate = new Date(Date.UTC(2019, 1, 14)); // Month starts from 0 in JS
// Current date
const todayDate = new Date();
const todayDateString = todayDate.toISOString().split("T")[0];

// Reset hours to avoid timezone issues
revealDate.setUTCHours(0, 0, 0, 0);
todayDate.setUTCHours(0, 0, 0, 0);

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
      '<div class="linkDiv"><img src="img/logos/teamcherry.png" class="linkLogo"><a href="https://hollowknightsilksong.com/">Hollow Knight: Silksong Website</a></div>',
      '<div class="linkDiv"><img src="img/logos/teamcherry.png" class="linkLogo"><a href="https://www.teamcherry.com.au/blog/hollow-knight-silksong-revealed">Hollow Knight: Silksong Blog Post</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Gv6CRPqkpuU&t=3s&pp=0gcJCb8Ag7Wk3p_U">Team Cherry Silksong QnA</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=96s">Daily Silksong News -702</a></div>',
    ],
    type: "Yes",
    number: "1",
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
    number: "2",
  },
  {
    date: "2019-02-16",
    title: "Silksong sample music track removed",
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=155s">Daily Silksong News -700</a></div>',
    ],
    type: "Kinda",
    number: "3",
  },
  {
    date: "2019-03-19",
    title: "Mini Silksong Update",
    images: ["img/4/blog.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/teamcherry.png" class="linkLogo"><a href="https://www.teamcherry.com.au/blog/hollow-knight-silksong-revealed">LATE ANNIVERSARY CELEBRATION! Blog Post</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=435s">Daily Silksong News -669</a></div>',
    ],
    type: "Yes",
    number: "4",
  },
  {
    date: "2019-04-26",
    title: 'Nintendo "claims" that Silksong will release within the next fiscal year',
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=756s">Daily Silksong News -631</a></div>',
    ],
    type: "Maybe",
    number: "5",
  },
  {
    date: "2019-06-11",
    title: "Silksong appeared on the Nintendo Direct of the E3 2019",
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=1143s">Daily Silksong News -585</a></div>',
    ],
    type: "Yes",
    number: "6",
  },
  {
    date: "2019-06-12",
    title: "Silksong Demo playable in the Nintendo Switch section of E3 2019",
    images: [
      "https://preview.redd.it/everything-silksong-timeline-2019-2025-v0-i930yd1btnle1.png?width=642&format=png&auto=webp&s=a96797eaf6a33aac05a84441f2b760e4eead62b2",
    ],
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=1169s">Daily Silksong News -584</a></div>',
    ],
    type: "Yes",
    number: "7",
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
    number: "8",
  },
  {
    date: "2019-06-25",
    title: "Team Cherry posts Post E3 Wrap ",
    images: ["img/9/blog.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/teamcherry.png" class="linkLogo"><a href="https://www.teamcherry.com.au/blog/post-e3-wrap-silksong-systems-update">POST E3 WRAP! Blog Post</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=1307s">Daily Silksong News -571</a></div>',
    ],
    type: "Yes",
    number: "9",
  },
  {
    date: "2019-09-18",
    title: "Steam page bug shows a june twelve 2020 release date",
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=1999s&pp=0gcJCTEAlc8ueATH">Daily Silksong News -485</a></div>',
    ],
    type: "Kinda",
    number: "10",
  },
  {
    date: "2019-10-10",
    title: "Silksong Demo playable in Pax Australia announced",
    images: ["img/11/twitter.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=2159s">Daily Silksong News -464</a></div>',
    ],
    type: "Yes",
    number: "11",
  },
  {
    date: "2019-10-28",
    title: "Silksong Steam page updated with new assets",
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=2316s">Daily Silksong News -428</a></div>',
    ],
    type: "Kinda",
    number: "12",
  },
  {
    date: "2019-12-13",
    title: "Team Cherry posts Holiday Sign off",
    images: ["img/13/blog.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/teamcherry.png" class="linkLogo"><a href="https://www.teamcherry.com.au/blog/post-e3-wrap-silksong-systems-update">TEAM CHERRY HOLIDAY SIGN OFF</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=2613s">Daily Silksong News -400</a></div>',
    ],
    type: "Yes",
    number: "13",
  },
  {
    date: "2020-01-20",
    title: 'Nintendo "claims" that Silksong will release within the next fiscal year (again)',
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=2924s">Daily Silksong News -356</a></div>',
    ],
    type: "Maybe",
    number: "14",
  },
  {
    date: "2020-01-26",
    title: "u/big_boi878 'Seth' talks to Team Cherry as his wish",
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=2980s">Daily Silksong News -356 (again?)</a></div>',
    ],
    type: "Maybe",
    number: "15",
  },
  {
    date: "2020-01-31",
    title: "u/big_boi878 'Seth' talks to Team Cherry again",
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=3040s">Daily Silksong News -351 </a></div>',
    ],
    type: "Maybe",
    number: "16",
  },
  {
    date: "2020-02-04",
    title: "u/big_boi878 'Seth' is offered chance to create a character for Silksong",
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=3086s">Daily Silksong News -347 </a></div>',
    ],
    type: "Maybe",
    number: "17",
  },
  {
    date: "2020-04-02",
    title: "u/big_boi878 'Seth' claims that his boss character is named Seth and he will be featured soon",
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=3510s&pp=0gcJCTEAlc8ueATH">Daily Silksong News -289 </a></div>',
    ],
    type: "Maybe",
    number: "18",
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
    number: "19",
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
    number: "20",
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
    number: "21",
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
    number: "22",
  },
  {
    date: "2020-08-21",
    title: "Nintendo Indie World shared an infographic about indio games coming to the switch with the Silksong logo",
    images: ["https://pbs.twimg.com/media/Ef8xhkNWoAMlwqv?format=jpg&name=medium"],
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=4558s">Daily Silksong News -147 </a></div>',
    ],
    type: "Maybe",
    number: "23",
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
    number: "24",
  },
  {
    date: "2020-12-13",
    title: "Edge Magazine teases new issue with what appears to be Hornets head",
    images: ["img/25/tweet.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/edgeonline/status/1338072669527420928"> @edgeonline tweet </a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=5251s">Daily Silksong News -33 </a></div>',
    ],
    type: "Maybe",
    number: "25",
  },
  {
    date: "2020-12-24",
    title: "New issue of Edge Magazine is confirmed to have new information about Silksong",
    images: ["https://i.redd.it/puklju4x75761.jpg", "img/26/cover2.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=5330s">Daily Silksong News -22 </a></div>',
    ],
    type: "Yes",
    number: "26",
  },
  {
    date: "2020-12-31",
    title: "New issue of Edge Magazine is released",
    images: ["img/27/screenshot1.jpg", "img/27/screenshot2.jpg", "img/27/screenshot3.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/edgeonline/status/1344588834231693313"> @edgeonline tweet </a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Fi9I4Ve71Js&t=5397s">Daily Silksong News -15 </a></div>',
    ],
    type: "Yes",
    number: "27",
  },
  {
    date: "2021-01-16",
    title: "Daily Silksong News YT channel is created",
    images: ["img/28/thumbnail.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=7SnMKTy_k1w">Daily Silksong News 1 </a></div>',
    ],
    type: "Other",
    number: "28",
  },
  {
    date: "2021-09-14",
    title: "Nvidia leaks alleged release date of february fifteenth 2022 ",
    type: "Maybe",
    number: "29",
  },
  {
    date: "2022-01-23",
    title: "A R/HollowKnight moderator states that there's no imminent release of Silksong",
    links: [
      '<div class="linkDiv"><img src="img/logos/reddit.png" class="linkLogo"><a href="https://www.reddit.com/r/HollowKnight/comments/sau9ii/rhollowknight_announcement_we_have_no_expectation/"> Reddit post </a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=weR-Fprw6dQ">Daily Silksong News 373 </a></div>',
    ],
    type: "No, but",
    number: "30",
  },
  {
    date: "2022-02-12",
    title: "Team Cherry states that they're still working on the game",
    links: [
      '<div class="linkDiv"><img src="img/logos/pcgamer.jpg" class="linkLogo"><a href="https://www.pcgamer.com/hollow-knight-silksong-everything-we-know/"> PC Gamer article </a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Doib0u8KdjI">Daily Silksong News 393 </a></div>',
    ],
    type: "No, but",
    number: "31",
  },
  {
    date: "2022-03-15",
    title: "Makoto Koji (Hornets voice actor) finished voicing Silksong",
    images: ["img/32/instagram.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=XnGASjuTTQw">Daily Silksong News 424 </a></div>',
    ],
    type: "Kinda",
    number: "32",
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
    number: "33",
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
    number: "34",
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
    number: "35",
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
    number: "36",
  },
  {
    date: "2022-06-16",
    title: "More new seconds of Silksong footage by Xbox but the video is privated later",
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=rQYwf9acBrw">Daily Silksong News 517 </a></div>',
    ],
    type: "Kinda",
    number: "37",
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
    number: "38",
  },
  {
    date: "2022-09-17",
    title: "New Silksong screenshots from the PlayStation Store",
    images: ["img/39/print.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Rodsb_gAVCU">Daily Silksong News 610 </a></div>',
    ],
    type: "Yes",
    number: "39",
  },
  {
    date: "2022-10-29",
    title: "Named Silksong screenshots found on the Xbox Wire Website",
    images: ["img/40/print.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=4yYBbbNlFxo">Daily Silksong News 652 </a></div>',
    ],
    type: "Kinda old",
    number: "40",
  },
  {
    date: "2023-02-02",
    title: "Silksong eShop Metadata, Xbox Blogposts and New Trademarks",
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=Iyq0GW9KtDc">Daily Silksong News 748 </a></div>',
    ],
    type: "Maybe",
    number: "41",
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
    number: "42",
  },
  {
    date: "2023-06-29",
    title: "Namedrop for Hornet familiar tool 'Cogfly'",
    images: ["img/43/nendoroid.webp"],
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=5D9i9fX9SGE">Daily Silksong News 895 </a></div>',
    ],
    type: "Kinda",
    number: "43",
  },
  {
    date: "2023-07-22",
    title: "Ari Gibson answers some fan questions at AVCon",
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=D9m-oBgr-bQ">Daily Silksong News 918 </a></div>',
    ],
    type: "Kinda",
    number: "44",
  },
  {
    date: "2023-09-22",
    title: "Silksong Steam page gets a minor update",
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=MXwgo-JHYPQ">Daily Silksong News 980 </a></div>',
    ],
    type: "Kinda",
    number: "45",
  },
  {
    date: "2023-12-13",
    title: "Silksong trailer metadata extracted containing clip names",
    images: ["img/46/coralking.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=CduKctEyPKE">Daily Silksong News 1062 </a></div>',
    ],
    type: "Yes",
    number: "46",
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
    number: "47",
  },
  {
    date: "2024-04-02",
    title: "Silksong gets new Microsoft Store page",
    images: ["img/48/print.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/griffinmatta/status/1774895893520466278">Leths tweet </a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=CbmtBrOSmlE">Daily Silksong News 1173 </a></div>',
    ],
    type: "Kinda",
    number: "48",
  },
  {
    date: "2024-04-04",
    title: "Silksong gets several new age ratings",
    links: [
      '<div class="linkDiv"><img src="img/logos/reddit.png" class="linkLogo"><a href="https://www.reddit.com/r/Silksong/comments/1buhzj0/sorry_to_burst_your_bubbles_but_all_the/">Reddit post explaining the situation </a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=SBzSijb7_y8">Daily Silksong News 1175 </a></div>',
    ],
    type: "Maybe",
    number: "49",
  },
  {
    date: "2024-06-07",
    title: "Silksong Hints for event appearance",
    images: ["img/50/tweet.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/eXtas1stv/status/1798739884628439375">eXtas1s tweet</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=ARpy-EhHDCs">Daily Silksong News 1238 </a></div>',
    ],
    type: "Maybe",
    number: "50",
  },
  {
    date: "2025-01-16",
    title: "William Pellen tweets something that some consider to be an ARG",
    images: ["img/51/tweet.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/twitter.png" class="linkLogo"><a href="https://x.com/everydruidwaswr/status/1879751713621725206">William Pellen tweet</a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=FA9H3snFrSQ">Daily Silksong News 1462 </a></div>',
    ],
    type: "Maybe",
    number: "51",
  },
  {
    date: "2025-01-18",
    title: "Leth confirms that there is no ARG and it was just a coincidence",
    images: ["img/52/discord.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/discord.png" class="linkLogo"><a href="https://discord.com/channels/283467363729408000/586931790208434203/1330100156518891571">Leth message </a></div>',
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=O9NnGdrNZQE">Daily Silksong News 1462 </a></div>',
    ],
    type: "Maybe",
    number: "52",
  },
  {
    date: "2025-01-23",
    title:
      "Some user on Reddit claims to be a Team Cherry VA says that a 2025 release is likely (this was not regarded by many)",
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=EHJbRWBd3K4">Daily Silksong News 1469 </a></div>',
    ],
    type: "No",
    number: "53",
  },
  {
    date: "2025-03-18",
    title: "Xbox hints about Silksong again in new ID@Xbox article",
    images: ["img/54/print.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=R56ol_rp18I">Daily Silksong News 1523 </a></div>',
    ],
    type: "Maybe",
    number: "54",
  },
  {
    date: "2025-03-24",
    title:
      "Biggest Silksong Steam page update in years including copyright update, new library images and NVIDIA GeForce Now entry",
    images: ["img/55/steamdb.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=i9LY67e14Oo">Daily Silksong News 1529 </a></div>',
    ],
    type: "Kinda",
    number: "55",
  },
  {
    date: "2025-04-02",
    title: "Silksong is shown with new clips on the nintendo switch 2 direct",
    images: ["img/56/nintendo.jpg"],
    links: [
      '<div class="linkDiv"><img src="img/logos/youtube.png" class="linkLogo"><a href="https://www.youtube.com/watch?v=DXUmjX7DsP8">Nintendo Switch 2 Direct </a></div>',
    ],
    type: "Yes",
    number: "56",
  },
  {
    date: todayDateString, // Gets YYYY-MM-DD
    title: "Today",
    // images: ["img/tomorrow/" + (Math.floor(Math.random() * 3) + 1) + ".png"],
    links: [
      '<div class="linkDiv"><img src="img/logos/silksong.ico" class="linkLogo"><a href="https://issilksongout.com/">Is Silksong Out?</a></div>',
    ],
    type: "No",
    number: "57",
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

// Calculate days since reveal
const daysSinceReveal = Math.ceil((todayDate - revealDate) / (1000 * 60 * 60 * 24));

// Creating the timeline
for (let i = 0; i <= daysSinceReveal; i++) {
  let currentDate = new Date(revealDate);
  currentDate.setUTCDate(revealDate.getUTCDate() + i);

  const currentDateString = currentDate.toISOString().split("T")[0];

  const newsItem = newsArray.find((news) => news.date === currentDateString);

  // Create elements using `document.createElement`
  const dayDiv = document.createElement("div");
  dayDiv.classList.add("day");
  dayDiv.setAttribute("data-date", currentDateString);
  dayDiv.setAttribute("data-sinceReveal", i);
  dayDiv.setAttribute("data-news", "No");

  if (newsItem) {
    dayDiv.classList.add("news");
    if (newsItem.type == "Yes") {
      dayDiv.classList.add("green");
    } else if (newsItem.type == "Kinda" || newsItem.type == "Maybe" || newsItem.type == "Kinda old") {
      dayDiv.classList.add("yellow");
    } else if (newsItem.type == "Other") {
      dayDiv.classList.add("blue");
    }
    dayDiv.setAttribute("data-news", newsItem.type);
    dayDiv.setAttribute("data-newsCount", newsItem.number);

    let formattedDate = formatStringDate(newsItem.date);
    dayDiv.innerHTML = `<div class="news-circle"></div> <b> ${formattedDate} </b> - ${newsItem.title}
    `;
    if (newsItem.images) {
      const imagesDiv = document.createElement("div");
      imagesDiv.classList.add("newsImages");
      for (let index = 0; index < newsItem.images.length; index++) {
        let imgObject = document.createElement("img");
        imgObject.setAttribute("src", newsItem.images[index]);
        imgObject.classList.add("newsImg");
        imagesDiv.appendChild(imgObject);
      }
      dayDiv.appendChild(imagesDiv);
    }
    if (newsItem.links) {
      const linksDiv = document.createElement("div");
      linksDiv.classList.add("newsLinks");
      for (let index = 0; index < newsItem.links.length; index++) {
        let temp = document.createElement("div");
        temp.innerHTML = newsItem.links[index];
        let linkObject = temp.firstChild;
        linksDiv.appendChild(linkObject);
      }

      dayDiv.appendChild(linksDiv);
    }
  } else if (currentDate.getDate() == "01") {
    dayDiv.classList.add("month");
    dayDiv.innerHTML =
      "<b>" + months[currentDate.getMonth()] + " " + currentDate.getFullYear() + '</b> <div class="hr"></div>';
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
    daysSince.textContent = closestDay.getAttribute("data-sinceReveal") + " days since reveal";
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
  currentNews = newsDaysCount;
  $('[data-newsCount="' + newsDaysCount + '"]')
    .get(0)
    .scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", function () {
  const actualNewsCount = newsDaysCount - 5;
  const formattedTodayDate = formatStringDate(todayDateString);
  const avgDaysBetweenNews = Math.floor(daysSinceReveal / actualNewsCount);
  const newsChance = ((actualNewsCount / daysSinceReveal) * 100).toFixed(2);
  const lastNews = newsArray[newsDaysCount - 2];
  const nextNewsDate = new Date(lastNews.date);
  nextNewsDate.setDate(nextNewsDate.getDate() + avgDaysBetweenNews);
  const daysUntilNextNews = Math.ceil((nextNewsDate - todayDate) / (1000 * 60 * 60 * 24));

  const hollowknightRevealDate = new Date(Date.UTC(2014, 10, 15));
  hollowknightRevealDate.setUTCHours(0, 0, 0, 0);
  const hollowknightReleaseDate = new Date(Date.UTC(2017, 1, 24));
  hollowknightReleaseDate.setUTCHours(0, 0, 0, 0);
  const daysHollowKnightTook = Math.ceil((hollowknightReleaseDate - hollowknightRevealDate) / (1000 * 60 * 60 * 24));
  const hollowKnightSilksongRatio = ((daysSinceReveal / daysHollowKnightTook) * 100).toFixed(2);

  const silksongReleaseWindowDate = new Date(Date.UTC(2022, 5, 13));
  silksongReleaseWindowDate.setUTCHours(0, 0, 0, 0);
  const daysSinceSilksongReleaseWindow = Math.ceil((todayDate - silksongReleaseWindowDate) / (1000 * 60 * 60 * 24));
  const silksongReleaseWindowRatio = ((daysSinceSilksongReleaseWindow / 365) * 100).toFixed(2);

  const typeCount = {};

  newsArray.forEach((news) => {
    typeCount[news.type] = (typeCount[news.type] || 0) + 1;
  });

  console.log(typeCount);
  // Display results
  document.getElementById("stats").innerHTML = `
      <h1>Stats - ${formattedTodayDate}</h1>
      <h3>News Predictions</h3>
      <p>Silksong was revealed <b>${daysSinceReveal} days ago</b>.</p>
      <p>Out of the <b>${daysSinceReveal} days</b>, there has been news <b>${actualNewsCount} times.</b></p>
      <p>On average, we have had news every <b>${avgDaysBetweenNews} days.</b></p>
      <p>Any given day has a <b>${newsChance}%</b> chance of having news.</p>
      <p>Last time we got news was on <b>${formatStringDate(lastNews.date)}</b>, "${lastNews.title}"</p>
      <p>We were or will be due for news on <b>${formatStringDate(
        nextNewsDate.toISOString().split("T")[0]
      )}, ${daysUntilNextNews} days</b> from now.</p>

      <h3>Comparisons</h3>
      <p>Hollow Knight took <b>${daysHollowKnightTook} days</b> to release after its reveal</p>
      <p>Silksong has taken roughly <b>${hollowKnightSilksongRatio}%</b> as long as Hollow Knight did.</p>
      <p>The one year Silksong release window started <b>${daysSinceSilksongReleaseWindow} days ago</b>.</p>
      <p><b>${silksongReleaseWindowRatio}%</b> of the release window has passed.</p>
      
      <h3>News Types</h3>
      <p><b class="green">Yes</b> -> ${typeCount.Yes} times</p>
      <p><b class="yellow">Maybe</b> -> ${typeCount.Maybe} times</p>
      <p><b class="yellow">Kinda</b> -> ${typeCount.Kinda} times</p>
      <p><b class="red">No, but</b> -> ${typeCount["No, but"]} times</p>
      <p><b class="red">No</b> -> ${typeCount.No} times</p>
      <p><b class="yellow">Kinda old</b> -> ${typeCount["Kinda old"]} time</p>
      <p><b class="blue">Other</b> -> ${typeCount.Other} time</p>
  `;
});

function formatStringDate(dateString) {
  return dateString.split("-")[2] + " " + months[dateString.split("-")[1] - 1] + " " + dateString.split("-")[0];
}
