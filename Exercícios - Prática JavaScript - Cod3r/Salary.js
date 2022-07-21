function Salary(hoursWorked, valuePerHour){
  const phrase = "This month's salary will be: "
  let salary = hoursWorked * valuePerHour
  return console.log(phrase + salary)
}

Salary(132, 10.08)