// Silksong reveal trailer date
const revealDate = new Date(Date.UTC(2019, 1, 13)); // Month starts from 0 in JS
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
    date: "2019-02-13",
    title: "Silksong is revealed at the Nintendo Direct",
    youtube: "https://www.youtube.com/watch?v=yQxwbZsL14Y",
    type: "Yes",
    number: "1",
  },
  {
    date: todayDate.toISOString().split("T")[0], // Gets YYYY-MM-DD
    title: "Tomorrow for sure!",
    type: "Maybe",
    number: "2",
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
    } else if (newsItem.type == "Kinda") {
      dayDiv.classList.add("yellow");
    }
    dayDiv.setAttribute("data-news", newsItem.type);
    dayDiv.setAttribute("data-newsCount", newsItem.number);

    let formattedDate =
      newsItem.date.split("-")[2] + " " + months[newsItem.date.split("-")[1] - 1] + " " + newsItem.date.split("-")[0];
    dayDiv.innerHTML = `<div class="news-circle"></div> <b> ${formattedDate} </b> - ${newsItem.title}
    `;
    if (newsItem.youtube) {
      /*
      const youtubeDiv = document.createElement("a");
      youtubeDiv.setAttribute("src", newsItem.youtube);
      dayDiv.appendChild(youtubeDiv);
      */
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
