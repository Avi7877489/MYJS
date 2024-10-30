var a = 10

const b = 20
// b = 15
console.log(b)
function one(){
    console.log("one")
    one()

}
function Two(){
    console.log("two")

}

console.log(one())

function add(a,b){
    return a + b
}

console.log(add(5,4))