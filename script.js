const now = new Date();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "November",
  "December",
];

let hour = now.getHours();

let ampm = "";

if (hour === 0) {
  hour = 12;
  ampm = "AM";
} else if (hour === 12) {
  ampm = "PM";
} else if (hour > 12) {
  hour = hour - 12;
  ampm = "PM";
} else {
  ampm = "AM";
}

// 1. Wed 24-Apr 7:45 PM

let formate1 = "";
formate1 += `${days[now.getDay()].slice(0, 3)}`;
formate1 += ` ${now.getDate()}`;
formate1 += `-${months[now.getMonth()].slice(0, 3)}`;
formate1 += ` ${hour}`;
formate1 += `:${String(now.getMinutes()).padStart(2, 0)}`;
formate1 += ` ${ampm}`;

document.querySelector("#dates").innerHTML += formate1;
console.log(formate1);
