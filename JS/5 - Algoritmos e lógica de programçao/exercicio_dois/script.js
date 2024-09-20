let StudentOneName = prompt("Type the name of student number one: ")
let firstTestOne = prompt("Type student's one first grade")
let secondTestOne = prompt("Type student's one second grade")

let AvgOne = ((Number(firstTestOne)) + (Number(secondTestOne))) / 2
//---------------------------------------------------

let StundentTwoName = prompt("Type the name of student number two: ")
let firstTestTwo = prompt("Type student's two first grade")
let secondTestTwo = prompt("Type student's two second grade")

let AvgTwo = ((Number(firstTestTwo)) + (Number(secondTestTwo))) / 2
//---------------------------------------------------

alert(`STUDENTS TABLE \n\n${StudentOneName}: \nGrades: ${firstTestOne} | ${secondTestOne} | AVG: ${AvgOne} \n\n${StundentTwoName}: \nGrades: ${firstTestTwo} | ${secondTestTwo} | AVG: ${AvgTwo}`)
//---------------------------------------------------

if (AvgOne < 7 ) {
  alert(`${StudentOneName} failed the exam`)
} else {
  alert(`${StudentOneName} succeeded the exam`)
}

if (AvgTwo < 7) {
  alert(`${StundentTwoName} failed the exam`)
} else {
  alert(`${StundentTwoName} succeeded the exam`)
}




