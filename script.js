function daysInMonth(month, year) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      if (year % 4 == 0) return 29;
      else return 28;
    default:
      return -1;
  }
}
console.log(`The number of days in a month is : ${daysInMonth(2, 2022)}`);


function determineGrade(finalMark) {
  switch (true) {
    case finalMark >= 90:
      return "A";
    case finalMark >= 80:
      return "B";
    case finalMark >= 70:
      return "C";
    case finalMark >= 60:
      return "D";
    default:
      return "F";
  }
}

console.log(`Grade is ${determineGrade(89)}`);
