// Class 22
// Prototipes

// Programacion orientada a objetos

// Clases - Modelo a seguir
// Objetos - Es una instancia de una clase
//  Atributos - Caracterista o propiedad del objeto - Variables dentro de un objeto
//  Metodos - Acciones que un objeto puede realizar

/*
const animal = {
  nombre: "Robin",
  sonar() {
    console.log("Hola");
  },
};

console.log(animal);
*/

// Funcion constructora

function Animal(nombre, genero) {
  // Atributos
  this.nombre = nombre;
  this.genero = genero;
}

// Metodos asignado a una function constructora, fuera de la misma
Animal.prototype.sonar = function () {
  console.log("Hola");
};

const robin = new Animal("Robin", "Hembra");
console.log(robin);

robin.sonar();
