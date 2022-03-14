// Class 14 - Conditionals structures

// if - else structure 

let age = 17

if (age >= 18 ){
    console.log("Eres mayor de edad")
}else {
    console.log("Eres menor de edad")
}


// if - else if structure 

let hour = 20

if(hour >= 0 && hour <= 5){
    console.log("Dejame dormir")
} else if(hour >= 6 && hour <= 11){
    console.log("Buenos dias")
} else if(hour >= 12 && hour <= 19){
    console.log("Buenas tardes")
} else {
    console.log("Buenas noches")
}

// Operador ternario
console.log("Operador ternario")
let mayor = "Eres mayor de edad"
let menor = "Eres menor de edad"
let eresMayor = (age >= 18) ? mayor : menor
console.log(eresMayor)

// Switch - case
let day = 4

switch(day){
    case 0:
        console.log("Domingo")
    break;
    case 1:
        console.log("Lunes")
    break
    case 2:
        console.log("Martes")
    break
    case 3:
        console.log("Miercoles")
    break
    case 4:
        console.log("Jueves")
    break
    case 5:
        console.log("Viernes")
    break
    case 6:
        console.log("Sabado")
    break
    default:
        console.log("El dia no existe")
    break
}