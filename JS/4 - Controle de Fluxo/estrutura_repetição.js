// Estrutura de repetição
// FOR
// break - para a execução do loop
//continue - pule a execução do momento

for( let i = 10; i > 0; i--) {
  if(i === 5) {
    break;
    //continue
  }

  console.log(i)
}

//WHILE

let i = 0;
while (i < 10) {
  console.log(i)

  i++;
}

// FOR..OF
let name = 'Mayk'
let names = ['João', 'Paulo', 'Pedro']

for(let char of name) {
  console.log(char)
}

//FOR...IN

let person = {
  name: 'John',
  age: 30,
  wheight: 88.6
}

for(let property in person) {
  console.log(property)
  console.log(person.property)
}

