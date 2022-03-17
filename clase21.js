// Class 21
// Arrow functions

const saludo = () => console.log("Hola")
saludo()

const saludo1 = (nombre) => {console.log("Hola " + nombre)}
saludo1("Matias")

const sumar = function(a,b){
    return a + b + " Sin arrow function"
}
console.log(sumar(8,9))

const sumar2 = (a,b) => a+b
console.log(sumar2(8,9) + " Con arrow function")

const numeros = [1,2,3,4,5,6,7]
numeros.forEach((el, index) => console.log(`El numero ${el} esta en la posicion ${index}`))

const perro = {
    nombre: "Robin",
    ladrar: () => {
        console.log(this)
        console.log("La arrow function va al contexto general, no al especifico de la funcion")
    }
}

perro.ladrar()