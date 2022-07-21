function MonthOfTheYear(month){
  switch (month) {
    case 1:
      return console.log("January")
      break;
    case 2:
      return console.log("February")
      break;
    case 3:
      return console.log("March")
      break;
    case 4:
      return console.log("April")
      break;
    case 5:
      return console.log("May")
      break;
    case 6:
      return console.log("June")
      break;
    case 7:
      return console.log("July")
      break;
    case 8:
      return console.log("August")
      break;
    case 9:
      return console.log("September")
      break;
    case 10:
      return console.log("October")
      break;
    case 11:
      return console.log("November")
      break;
    case 12:
      return console.log("December")
      break;
    default:
     return console.log("Invalid data! Try numbers 1 to 12")
  }
}

MonthOfTheYear(1)
MonthOfTheYear(5)
MonthOfTheYear(12)
MonthOfTheYear(0)