// Class 15 - Loops

let contador = 0;

while(contador < 10){
    console.log(contador)
    contador++;
}

do {
    console.log("while " + contador)
    contador++;
} while(contador < 10)

for (let i = 0; i < 10; i++){
    console.log ("for " + i)
}

let numeros = [10,20,30,40,50,60]
for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}

let matias = {
    nombre: "Matias",
    apellido: "Dominguez",
    edad: 29

}
for (const propiedad in matias) {
    console.log(`Key: ${propiedad}, Value: ${matias[propiedad]}`)
}

for (const elemento of numeros) {
    console.log(elemento)
}