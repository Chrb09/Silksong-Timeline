// Silksong reveal trailer date
const revealDate = new Date(Date.UTC(2019, 1, 14)); // Month starts from 0 in JS
// Current date
const todayDate = new Date();

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
    date: todayDate.toISOString().split("T")[0], // Gets YYYY-MM-DD
    title: "Tomorrow for sure!",
    // images: ["img/tomorrow/" + (Math.floor(Math.random() * 3) + 1) + ".png"],
    links: [
      '<div class="linkDiv"><img src="img/logos/silksong.ico" class="linkLogo"><a href="https://issilksongout.com/">Is Silksong Out?</a></div>',
    ],
    type: "Maybe",
    number: "13",
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
    } else if (newsItem.type == "Kinda" || newsItem.type == "Maybe") {
      dayDiv.classList.add("yellow");
    }
    dayDiv.setAttribute("data-news", newsItem.type);
    dayDiv.setAttribute("data-newsCount", newsItem.number);

    let formattedDate =
      newsItem.date.split("-")[2] + " " + months[newsItem.date.split("-")[1] - 1] + " " + newsItem.date.split("-")[0];
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
    currentDay.textContent =
      activeDate.split("-")[2] + " " + months[activeDate.split("-")[1] - 1] + " " + activeDate.split("-")[0];

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
