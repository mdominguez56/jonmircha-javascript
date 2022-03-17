// Class 18 - Destructuring

const numbers = [0,1,2,3]

// Destructuring
const [zero,one,two,three] = numbers
console.log(zero,one)

let person = {
    name: "Matias",
    lastname: "Dominguez Alonso",
    age: 29
}

let {name, lastname, age} = person
console.log(name,lastname,age)
