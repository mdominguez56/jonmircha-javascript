// Class 12 - Objects

const b = {}
console.log(b)

const c = new Object()
console.log(c)

const matias = {
    name: "Matias",
    lastname: "Dominguez Alonso",
    age: 29,
    hobbies: ["Run","Crossfit"],
    married: true,
    contact: {
        email: "matias@gmail.com",
        mobile: 123456789
    },
    fun: function(){
        console.log("Hello")
    },
    myName: function(){
        console.log(`My name is ${this.name} ${this.lastname}`)
    }
}

console.log(matias["name"]) // Impresion de un solo valor dentro del objeto
console.log(matias.age) //
matias.myName();
console.log(Object.keys(matias)) // Listar keys de un object