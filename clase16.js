// Class 16 - Error handle in Javascript

try{
    console.log("En el try se agrega el codigo a evaluar")
    noExiste
} catch(error){
    console.log("Catch captura cualquier error que surga en el try")
    console.log(error)
} finally{
    console.log("Finaly se ejecutara siempre al final de un bloque try-catch")
}

try{
    let numero = "l"
    if(isNaN(numero)){
        throw new Error("El caracter introducido no es un numero")
    }
    console.log(numero * numero)
} catch(error){
    console.log(`Se produjo el siguiente error: ${error}`)
}