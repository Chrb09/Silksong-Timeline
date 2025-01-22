const revealDate = new Date(new Date("2019-02-13").toLocaleString("en-US", { timeZone: "Australia/Sydney" }));
const todayDate = new Date(new Date().toLocaleString("en-US", { timeZone: "Australia/Sydney" }));

const timelineWrapper = document.getElementById("timeline-wrapper");
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

let currentDate = new Date(revealDate);
let currentDaysSince;

console.log("Reveal Date: " + revealDate);
console.log("Today Date: " + todayDate);

let utc1 = Date.UTC(revealDate.getFullYear(), revealDate.getMonth(), revealDate.getDate());
let utc2 = Date.UTC(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate());

// Calculate the time difference in milliseconds
let timeDiff = Math.abs(utc2 - utc1);

// Convert milliseconds to days
let daysSinceReveal = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

timelineWrapper.style.height = daysSinceReveal * 30 + "px";

console.log("Days Since Reveal: " + daysSinceReveal);

window.onscroll = function (e) {
  let scroll = window.scrollY - 31;
  console.log(scroll); // Value of scroll Y in px
  if (scroll > 0) {
    currentDaysSince = Math.floor(scroll / 30);
    currentDate = new Date(revealDate);
    currentDate.setDate(revealDate.getDate() + currentDaysSince);
  } else {
    currentDaysSince = 0;
    currentDate = new Date(revealDate);
  }
  console.log(currentDate);
  currentDay.innerHTML =
    ("0" + currentDate.getDate()).slice(-2) + " " + months[currentDate.getMonth()] + " " + currentDate.getFullYear();
  daysSince.innerHTML = currentDaysSince + " days since reveal";
};
