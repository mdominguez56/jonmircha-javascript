// Class 11 - Array

const a = []
console.log(a)

const b = [1,true,"Hello",["a","b","c"]]
console.log(b)

const c = Array.of("X","Y","Z",9,8,7)
console.log(c)

const d = Array(10).fill(false)
console.log(d)

const e = new Array(1,2,3)
console.log(e)

const colors = ["Red","Black","Blue"]
colors.push("Yellow") // Add element to the end of the Array
colors.pop() // Delete the last element of the Array
colors.forEach(function(e,index){
    console.log(`<li id="${index}">${e}</li>`)
})




