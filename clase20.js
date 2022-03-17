// Class 19
// Rest && Spread operator

function sumar (a,b,...c){
    let resultado = a + b;

    c.forEach(function(n){
        resultado += n
    })

    return resultado
}

console.log(sumar(1,2,3,3))

const arr1 = [1,2,3,4,5],
    arr2 = [6,7,8,9,0]

const arr3 = [...arr1,...arr2]
console.log(arr3)

