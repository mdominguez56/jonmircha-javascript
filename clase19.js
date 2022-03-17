// Objects

let name = "Robin"
let age = 1

const dog = {
    name: name,
    age: age,
    ladrar: function() {
        console.log("Gauu Gauu")
    }
}

console.log(dog)
dog.ladrar()

const perro = {
    name,
    age,
}

console.log(perro)