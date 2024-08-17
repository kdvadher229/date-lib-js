import moment from "moment";

console.log(moment.utc());
// Moment<2024-08-17T11:43:57Z>

console.log(moment.utc().startOf("D").toDate());
console.log(moment.utc().startOf("hours").toDate());
/**
 * Start of
 * D Day
 * M Month
 * Q Quatre
 * W Week
 * hour hour
 */
let isDate = moment.utc();
console.log(moment.isDate(isDate));
// false
let x = moment.utc().toDate();
console.log(moment.isDate(x));
// True

console.log(isDate.add(1, "d"));

console.log(moment().calendar());
console.log(moment().utc().format("LL"));
console.log(moment().utc().format("llll"));
console.log(moment().format("llll"));

// moment().format("LLLL"); // Saturday, August 17, 2024 5:27 PM
console.log(moment().subtract(6, "days").calendar()); // Last Sunday at 5:29 PM
console.log(moment().subtract(16, "days").calendar()); //08/01/2024 -> MM/DD/YYYY

console.log(moment().subtract(16, "days").format("MMM Do YY")); //Aug 1st 24

const now = moment();

// Use Intl.DateTimeFormat to format the date
const formattedDate = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
}).format(now.toDate());

console.log(formattedDate); // e.g., "Saturday, August 17, 2024"
