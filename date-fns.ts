import {
  addDays,
  addWeeks,
  compareAsc,
  format,
  isWeekend,
  nextSaturday,
  startOfYear,
} from "date-fns";
import { formatDistance, subDays } from "date-fns";
import moment from "moment";

format(new Date(2014, 1, 11), "yyyy-MM-dd");

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
];
dates.sort(compareAsc);

console.log(dates);

console.log(
  formatDistance(subDays(moment.utc().toDate(), 3), moment.utc().toDate(), {
    addSuffix: true,
  })
);

const x = addWeeks(moment.utc().toDate(), 3);
console.log(x);
console.log(moment.utc().toDate());
console.log(isWeekend(moment.utc().toDate()));

const firstDayOfYear = startOfYear(new Date(2029, 0, 1)); // January 1, 2029

// Step 2: Find the first Saturday after or on the first day of the year
const firstSaturday = nextSaturday(firstDayOfYear);

// Step 3: Get the following day, which is Sunday
const firstSunday = addDays(firstSaturday, 1);

console.log(firstSaturday); // Output: 2029-01-06T00:00:00.000Z (Saturday)
console.log(firstSunday); // Output: 2029-01-07T00:00:00.000Z (Sunday)
