/*
  ** Joga da adivinhação **

  Apresente a mensagem ao usuário:
  "Adivinhe o número que estou pensando? Está entre 0 e 10"

  Crie uma lógica para gerar um número aleatório e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, moatrar a mensagem: "Erro, tente novamnete: "

  Caso o usuário acerte o número, apresentar a mensagem: "Parabéns! Você adivinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas

*/

const result = prompt("Adivinhe o número de que estou pensando? Está entre 0 e 10")

const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 0;

while(Number(result) != randomNumber) {
  result = prompt("Erro, tente novamente:")
  xAttempts++
}

alert(`Parabéns! Você adivinhou o número em ${xAttempts} tentativas`)