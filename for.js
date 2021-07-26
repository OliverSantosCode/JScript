// # Count
var num = (min,max) => Math.round(Math.random() * (max - min) + min)
var num = num(1,20)

console.log(`Starting Loop \n`)
for (let count = 0; count <= num; count++) {
    console.log(`Current Count: ${count} \n`)
}
console.log("Stopped Loop")
console.log("_____________________")

var obj = {
    Maths: "maths",
    Programming: "programming",
    Economics: "economics",
    History: "history"
}

for (books in obj) {
    let book = obj[books];
    console.log(`${books}: ${book}`)
}