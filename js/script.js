const revealDate = new Date(new Date("2019-02-13").toLocaleString("en-US", { timeZone: "Australia/Sydney" }));
const todayDate = new Date(new Date().toLocaleString("en-US", { timeZone: "Australia/Sydney" }));
revealDate.setHours(0, 0, 0, 0);
todayDate.setHours(0, 0, 0, 0);

const timelineWrapper = document.getElementById("timeline-wrapper");
const timeline = document.getElementById("timeline");
const currentDay = document.getElementById("current-day");
const daysSince = document.getElementById("days-since");
const newsStatus = document.getElementById("news-status");

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

const newsArray = [
  { date: "2019-02-13", info: "Silksong is revealed at the nintendo direct", type: "Yes", class: "" },
  { date: "2019-04-23", info: "Silksong is revealed at the nintendo direct", type: "Yes", class: "right" },
  { date: "2019-06-30", info: "Silksong is revealed at the nintendo direct", type: "Yes", class: "" },
  {
    date:
      todayDate.getFullYear() +
      "-" +
      String(todayDate.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(todayDate.getDate()).padStart(2, "0"),
    info: "Today",
    type: "IDK",
    class: "right",
  },
];
let newsDateArray = [];
let newsTypeArray = [];

let currentDate = new Date(new Date(revealDate).toLocaleString("en-US", { timeZone: "Australia/Sydney" }));
let currentDaysSince;
let news;

console.log("Reveal Date: " + revealDate);
console.log("Today Date: " + todayDate);

let utc1 = Date.UTC(revealDate.getFullYear(), revealDate.getMonth(), revealDate.getDate());
let utc2 = Date.UTC(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate());

// Calculate the time difference in milliseconds
let timeDiff = Math.abs(utc2 - utc1);

// Convert milliseconds to days
let daysSinceReveal = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

timelineWrapper.style.height = daysSinceReveal * 30 + "px";
timeline.style.height = daysSinceReveal * 30 + "px";

console.log("Days Since Reveal: " + daysSinceReveal);

newsArray.forEach(function (news, index) {
  let newsDate = new Date(new Date(news.date).toLocaleString("en-US", { timeZone: "Australia/Sydney" }));
  newsDate.setHours(0, 0, 0, 0);

  newsDateArray[index] = newsDate;
  newsTypeArray[index] = news.type;
  let utc1 = Date.UTC(revealDate.getFullYear(), revealDate.getMonth(), revealDate.getDate());
  let utc2 = Date.UTC(newsDate.getFullYear(), newsDate.getMonth(), newsDate.getDate());

  // Calculate the time difference in milliseconds
  let timeDiff = Math.abs(utc2 - utc1);

  // Convert milliseconds to days
  let daysSinceReveal = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  let top = daysSinceReveal * 30;

  $("#timeline-wrapper").append(
    $(
      '<div class="news ' +
        news.class +
        '" style="top: ' +
        top +
        'px;"><div class="news-info">' +
        news.info +
        '</div><div class="news-circle"></div><div class="news-date">' +
        ("0" + newsDate.getDate()).slice(-2) +
        " " +
        months[newsDate.getMonth()] +
        " " +
        newsDate.getFullYear() +
        "</div></div>"
    )
  );
});

console.log(newsDateArray);

window.onscroll = function (e) {
  let scroll = window.scrollY;
  console.log(scroll);
  if (scroll > 0) {
    currentDaysSince = Math.floor(scroll / 30);
    currentDate = new Date(revealDate);
    currentDate.setDate(revealDate.getDate() + currentDaysSince);
    currentDate.setHours(0, 0, 0, 0);
    if (currentDate >= todayDate) {
      currentDate = new Date(todayDate);
      currentDaysSince = daysSinceReveal;
    }
    news = "No";
    newsDateArray.forEach(function (date, index) {
      if (
        date.getDate() == currentDate.getDate() &&
        date.getMonth() == currentDate.getMonth() &&
        date.getFullYear() == currentDate.getFullYear()
      ) {
        news = newsTypeArray[index];
      }
    });
  } else {
    currentDaysSince = 0;
    currentDate = new Date(revealDate);
    news = "Yes";
  }
  console.log(currentDate);
  currentDay.innerHTML =
    ("0" + currentDate.getDate()).slice(-2) + " " + months[currentDate.getMonth()] + " " + currentDate.getFullYear();
  daysSince.innerHTML = currentDaysSince + " days since reveal";
  newsStatus.innerHTML = news;
};
