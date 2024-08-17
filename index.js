// Task 1
/**
 * The function `getDateDetails` takes a Date object and returns an object with some details about the date.
 *
 * date - A Date object.
 *
 * Returns an object containing the following properties:
 *  year - the year,
 *  month - the month,
 *  day - the day of the month.
 */
function getDateDetails(date) {
  if (!(typeof date.getTime === 'function')) {
    return "Error: the input value must be a Date object";
  }
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
  };
}

console.log("Task: 1 ==============================");
const now = new Date("2023-12-25T00:00:00Z");
console.log(getDateDetails(new Date("2023-12-25T00:00:00Z")));
// Outputs: { year: 2023, month: 11, day: 25 }

// Task 2
/**
 * The function `setDateDetails` takes a Date object and an ISO date string and sets the date from the ISO string in the Date object.
 *
 * date - A Date object where the date needs to be set.
 * isoString - A date string in ISO format.
 *
 * Returns a Date object with the set date if the input data is valid. If not, it outputs an error message.
 */
function setDateDetails(date, isoString) {
  if (!(typeof date.getTime === 'function')) {
    return "Error: the input value must be a Date object";
  }
  if (isNaN(Date.parse(isoString))) {
    console.log("Error: invalid ISO string");
    return null;
  }
  date.setTime(Date.parse(isoString));
  return date;
}

console.log("Task: 2 ==============================");
const date = new Date();
console.log(setDateDetails(date, "2023-12-25T00:00:00Z"));
// Outputs: 2023-12-25T00:00:00.000Z

// Task 3
/**
 * The function `dateToUTC` takes a Date object and returns a string representing the date in UTC format.
 *
 * date - A Date object.
 *
 * Returns a string with the date in UTC format if the input value is a valid Date object. If not, it outputs an error message.
 */
function dateToUTC(date) {
  if (!(typeof date.getTime === 'function')) {
    return "Error: the input value must be a Date object";
  }
  return date.toUTCString();
}

console.log("Task: 3 ==============================");
console.log(dateToUTC(new Date()));
// Outputs something like: Tue, 27 Jun 2023 07:15:47 GMT

// Task 4
/**
 * The function `setSpecificTime` takes a Date object and sets a specific time.
 *
 * date - A Date object.
 * hours - The number of hours.
 * minutes - The number of minutes.
 * seconds - The number of seconds.
 * milliseconds - The number of milliseconds.
 *
 * Returns a Date object with the set time if the input data is valid. If not, it outputs an error message.
 */
function setSpecificTime(date, hours, minutes, seconds, milliseconds) {
  if (!(typeof date.getTime === 'function')) {
    return "Error: the input value must be a Date object";
  }
  date.setHours(hours, minutes, seconds, milliseconds);
  return date;
}

console.log("Task: 4 ==============================");
console.log(
  setSpecificTime(new Date("2023-12-25T00:00:00.000Z"), 12, 30, 0, 0)
);
// Outputs: 2023-12-25T09:30:00.000Z

// Task 5
/**
 * The function `nextNewYear` takes a Date object and returns the time until the next New Year.
 *
 * Returns an object with information about the time until the next New Year:
 * {
 *   days: // The number of days until the New Year.
 *   hours: // The number of hours until the New Year, not including full days.
 *   minutes: // The number of minutes until the New Year, not including full hours.
 *   seconds: // The number of seconds until the New Year, not including full minutes.
 *   milliseconds: // The number of milliseconds until the New Year, not including full seconds.
 * }
 */
function nextNewYear() {
  let date = new Date();
  let currentYear = date.getFullYear();
  let newDate = new Date(currentYear + 1, 0, 1);
  let diff = newDate.getTime() - date.getTime();
  const days = diff / (1000 * 60 * 60 * 24);
  const hours = (diff / (1000 * 60 * 60)) % 24;
  const minutes = (diff / (1000 * 60)) % 60;
  const seconds = (diff / 1000) % 60;
  const milliseconds = diff % 1000;

  return { days, hours, minutes, seconds, milliseconds };
}

console.log("Task: 5 ==============================");

console.log(nextNewYear());
// Outputs the remaining time until the New Year

// Task 6
/**
 * The function `isLeapYear` checks whether a year is a leap year.
 *
 * year - The year to check.
 *
 * Returns an object:
 * {
 *   year: // The year that was checked.
 *   isLeap: // Whether the year is a leap year.
 * }
 */
function isLeapYear(year) {
  if (typeof year !== "number") {
    return "Error: the input value must be a number";
  }
  let isLeap = year % 4 === 0;
  return { year, isLeap };
}

console.log("Task: 6 ==============================");

console.log(isLeapYear(2020));
// Outputs: { year: 2020, isLeap: true }

// Task 7
/**
 * The function `addDays` adds a specified number of days to the given date.
 *
 * date - A Date object.
 * days - The number of days to add.
 *
 * Returns an object:
 * {
 *   inputDate: // The initial date in 'yyyy-mm-dd' format.
 *   addedDays: // The number of added days.
 *   resultDate: // The resulting date in 'yyyy-mm-dd' format.
 * }
 */
function addDays(date, days) {
  if (!(typeof date.getTime === 'function')) {
    return "Error: the input value must be a Date object";
  }
  if (!(typeof days === 'number')) {
    console.log('Error: the number of days must be a number');
    return undefined;
  }
  let inputDate = date.toISOString();
  date.setDate(date.getDate() + days);
  let resultDate = date.toISOString();

  return {
    inputDate,
    addedDays: days,
    resultDate,
  };
}

console.log("Task: 7 ==============================");

console.log(addDays(new Date("2023-01-01"), 7));
// Outputs:
// {
//   inputDate: '2023-01-01T00:00:00.000Z',
//   addedDays: 7,
//   resultDate: '2023-01-08T00:00:00.000Z'
// }

// Task 8
/**
 * The function `getDayOfWeek` returns the day of the week for a given date in Polish.
 *
 * date - A Date object.
 *
 * Returns an object:
 * {
 *   inputDate: // The initial date in 'yyyy-mm-dd' format.
 *   dayOfWeek: // The day of the week in Polish.
 * }
 */
let daysOfWeek = [
  "Niedziela",
  "Poniedziałek",
  "Wtorek",
  "Środa",
  "Czwartek",
  "Piątek",
  "Sobota",
];

function getDayOfWeek(date) {
  if (!(typeof date.getTime === 'function')) {
    return "Error: the input value must be a Date object";
  }
  let inputDate = date.toISOString();
  let numberOfDay = date.getDay();
  let dayOfWeek = daysOfWeek[numberOfDay];
  return { inputDate, dayOfWeek };
}

console.log("Task: 8 ==============================");

console.log(getDayOfWeek(new Date("2023-01-01")));
// Outputs: { inputDate: '2023-01-01T00:00:00.000Z', dayOfWeek: 'Niedziela' }

// Task 9
/**
 * The function `getDaysInMonth` returns the number of days in the month of the given date.
 *
 * date - A Date object.
 *
 * Returns an object:
 * {
 *   inputDate: // The initial date in 'yyyy-mm-dd' format.
 *   daysInMonth: // The number of days in the month.
 * }
 */
function getDaysInMonth(date) {
  if (!(typeof date.getTime === 'function')) {
    return `Error: the input value must be a Date object`;
  }
  let inputDate = date.toISOString();
  let currentMonth = date.getMonth();
  let currentYear = date.getFullYear();
  let nextMonth = new Date(currentYear, currentMonth + 1, 1);
  nextMonth.setDate(nextMonth.getDate() - 1);
  let daysInMonth = nextMonth.getDate();
  return { inputDate, daysInMonth };
}

console.log("Task: 9 ==============================");

console.log(getDaysInMonth(new Date("2023-02-01")));
// Outputs: { inputDate: '2023-02-01T00:00:00.000Z', daysInMonth: 28 }


// Task 10
/**
 * The function `getFormattedTime` returns the time in the format 'hh:mm:ss'.
 *
 * date - A Date object.
 *
 * Returns an object:
 * {
 *   inputDate: // The initial date in the format 'yyyy-mm-dd'.
 *   formattedTime: // The time in the format 'hh:mm:ss'.
 * }
 */
function getFormattedTime(date) {
  if (!(typeof date.getTime === 'function')) {
    return `Error: the input value must be a Date object`;
  }
  let inputDate = date.toISOString();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  return { inputDate, formattedTime };
}

console.log("Task: 10 ==============================");
console.log(getFormattedTime(new Date("2023-12-25T09:30:00.000Z")));
// Output: { inputDate: '2023-12-25T09:30:00.000Z', formattedTime: '09:30:00' }

// Task 11
/**
 * The function `getAge` calculates the age based on the given birth date.
 *
 * birthDate - A Date object representing the birth date.
 *
 * Returns an object:
 * {
 *   birthDate: // The birth date in the format 'yyyy-mm-dd'.
 *   age: // The calculated age.
 * }
 */
function getAge(birthDate) {
  if (!(typeof birthDate.getTime === 'function')) {
    return `Error: the input value must be a Date object`;
  }
  let currentDate = new Date();
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  let birthDateISO = birthDate.toISOString();
  return { birthDate: birthDateISO, age };
}

console.log("Task: 11 ==============================");
console.log(getAge(new Date("1990-09-15")));
// Output: { birthDate: '1990-09-15T00:00:00.000Z', age: 33 or 34 }

// Task 12
/**
 * The function `compareDates` compares two dates and returns the result of the comparison.
 *
 * date1 - A Date object.
 * date2 - A Date object.
 *
 * Returns an object:
 * {
 *   date1: // The first date in the format 'yyyy-mm-dd'.
 *   date2: // The second date in the format 'yyyy-mm-dd'.
 *   comparison: // The result of the comparison: -1 if date1 < date2, 0 if date1 === date2, 1 if date1 > date2.
 * }
 */
function compareDates(date1, date2) {
  if (
    !(typeof date1.getTime === 'function') ||
    !(typeof date2.getTime === 'function')
  ) {
    return "Error: the input value must be a Date object";
  }
  let comparison = date1 < date2 ? -1 : date1 > date2 ? 1 : 0;
  let formattedDate1 = date1.toISOString();
  let formattedDate2 = date2.toISOString();
  return { date1: formattedDate1, date2: formattedDate2, comparison };
}

console.log("Task: 12 ==============================");
console.log(compareDates(new Date("2023-01-01"), new Date("2022-12-31")));
// Output:
// {
//   date1: '2023-01-01T00:00:00.000Z',
//   date2: '2022-12-31T00:00:00.000Z',
//   comparison: 1
// }

// Task 13
/**
 * The function `getDaysDifference` calculates the difference in days between two dates.
 *
 * startDate - The start date.
 * endDate - The end date.
 *
 * Returns an object:
 * {
 *   startDate: // The start date in the format 'yyyy-mm-dd'.
 *   endDate: // The end date in the format 'yyyy-mm-dd'.
 *   daysDifference: // The difference in days between the two dates.
 * }
 */
function getDaysDifference(startDate, endDate) {
  if (
    !(typeof startDate.getTime === 'function') ||
    !(typeof endDate.getTime === 'function')
  ) {
    return "Error: the input value must be a Date object";
  }
  let startTime = startDate.getTime();
  let endTime = endDate.getTime();
  let timeDifference = endTime - startTime;
  let daysDifference = timeDifference / (1000 * 60 * 60 * 24);
  let formattedStartDate = startDate.toISOString();
  let formattedEndDate = endDate.toISOString();
  return {
    startDate: formattedStartDate,
    endDate: formattedEndDate,
    daysDifference,
  };
}

console.log("Task: 13 ==============================");
console.log(getDaysDifference(new Date("2023-01-01"), new Date("2023-01-10")));
// Output:
// {
//   startDate: '2023-01-01T00:00:00.000Z',
//   endDate: '2023-01-10T00:00:00.000Z',
//   daysDifference: 9
// }
