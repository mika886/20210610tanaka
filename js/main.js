const array = [2, 4, 7, 5, 4, 3, 8];
const result = array.filter(function (value, index, array) {
  return array.indexOf(value) == index;
});
console.log(result);

function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return console.log(`${year}年は閏年です`);
  }
  else {
    return console.log(`${year}年は閏年ではありません`);
  }
};
leapYear(2020);
leapYear(2021);