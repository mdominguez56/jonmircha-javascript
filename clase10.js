// Clase 10 - Functions

// Las funciones son un tipo de dato complejo, considerado objeto.

// Funciones declaradas
function funcionQueDevuelveValor(){
    return "La funcion ha retornado una cadena de texto"
}
let valorDeFuncion = funcionQueDevuelveValor()
console.log(valorDeFuncion)


// Valor por defecto de parametros de una funcion
function saludar(nombre = "desconocido",edad = 0){
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad}`)
}

saludar("Matias Dominguez Alonso", 29)
saludar()


// Funciones declaradas - Puedo invocarse antes de declarada
funcionDeclarada()

function funcionDeclarada(){
    console.log("Esto es una funcion declarada")
}

funcionDeclarada()

// Funcion anonima - Solo puede invocarse luego de su definicion

const funcionExpresada = function(){
    console.log("Esto es una funcion expresada")
}

funcionExpresada()
