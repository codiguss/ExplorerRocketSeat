// Variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnStart = document.querySelector("#btnStart");
const btnAgain = document.querySelector("#btnAgain");
const bilhete = document.querySelector("#bilhete");
const message = document.querySelector("#message");

// Mensagens e classes
const mensagens = [
  { text: "Você terá um dia maravilhoso!", class: "bilhete1" },
  { text: "Uma grande oportunidade está a caminho.", class: "bilhete2" },
  { text: "Você encontrará o que procura.", class: "bilhete3" }
];

// Função para alternar entre as telas
function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

// Função para mostrar uma mensagem aleatória
function showRandomMessage() {
  const randomIndex = Math.floor(Math.random() * mensagens.length);
  const { text, class: bilheteClass } = mensagens[randomIndex];
  
  // Remover todas as classes de bilhete
  bilhete.className = "bilhete";
  
  // Adicionar a classe específica
  bilhete.classList.add(bilheteClass);
  
  // Definir a mensagem
  message.textContent = text;
}

// Eventos
btnStart.addEventListener('click', () => {
  showRandomMessage();
  toggleScreen();
});

btnAgain.addEventListener('click', toggleScreen);
