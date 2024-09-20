/*
  Function() constructor

  * expressão new
  * criar um novo obejto
  * this keyword
*/

function Person(name) {
  this.name = name
  this.walk = function() {
    return this.mame + "está andando"
  }
}

const mayk = new Person("Mayk")
const joao = new Person("João")
console.log(mayk())
console.log(joao())