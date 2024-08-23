let months = document.getElementById("getmonth");
const now = new Date();
const monthNames = [
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
console.log();
const month = now.getMonth();
console.log(month);
var year = now.getFullYear();
months.innerText = monthNames[month] + ` ` + year;
