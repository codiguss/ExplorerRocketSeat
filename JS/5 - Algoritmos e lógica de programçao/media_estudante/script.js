/*
  Solicitar o nome do aluno e as 3 notas do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bismestre, dar os paraéns.

  Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação.

  Em ambos os casos,mostre uma mesagem com o nome do aluno e a nota
*/

let student = prompt("Qual o nome do aluno?")
let oat1 = prompt("Qual a nota da OAT1?")
let va1 = prompt("Qual a nota da VA1?")
let oat2 = prompt("Qual a nota da OAT2?")
let va2 = prompt("Qual a nota da VA2?")

let avg = (Number(oat1) + Number(va1) + Number(oat2) + Number(va2))

avg = avg.toFixed(2)

if(avg > 70) {
  alert ("Parabéns, " + student + "! Sua nota foi de: " + avg)
} else {
  alert(student + " estude para sua prova de recuperação! Sua média foi de: " + avg)}