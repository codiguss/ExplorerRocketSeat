alert("Insert two numbers for the folowing steps")

//-----------------------------

let NumberOne = prompt("First number: ")
let NumberTwo = prompt("Second number: ")

//-----------------------------

let Sum = (Number(NumberOne)) + (Number(NumberTwo))

let Sub = (Number(NumberOne)) - (Number(NumberTwo))

let Multi = (Number(NumberOne)) * (Number(NumberTwo))

let Split = (Number(NumberOne)) / (Number(NumberTwo))

let SplitRest = (Number(NumberOne)) % (Number(NumberTwo))

let Even = ("The sum of this two numbers results in a even number")

let Odd = ("The sum of this two numbers results in a odd number")

//------------------------------

alert(`Sum is equal ${Sum} \nSubtraction is equal ${Sub} \nMultiplication is equal ${Multi} \nDivision is equal ${Split} \nDivision rest is equal ${SplitRest}`)

//------------------------------

if (Sum % 2 !== 0) {
  alert(Even)
} else {
  alert(Odd)
}

//-------------------------------

if (NumberOne == NumberTwo) {
  alert("The two numbers are equal")
} else {
  alert("The two numbers aren't equal")
}