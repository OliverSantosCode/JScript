// # Count
var num = (min,max) => Math.round(Math.random() * (max - min) + min)
var num = num(1,20)

var count = 0
console.log("Starting Loop")

while (count < num) {
    console.log(`Current Count: ${count} \n`)
    count++
}
console.log("Stopped Loop")
console.log("_________________")

var count = 0
console.log("Starting Loop")

do {
    console.log(`Current Count: ${count} \n`)
    count++
} while (count < num)
console.log("Stopped Loop")

