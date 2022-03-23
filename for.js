// # Count
var num = (min,max) => Math.round(Math.random() * (max - min) + min)
var num = num(1,20)

console.log(`Starting Loop \n`)
for (let count = 0; count <= num; count++) {
    console.log(`Current Count: ${count} \n`)
}
console.log("Stopped Loop")
console.log("_____________________\n")

var obj = {
    Maths: "maths",
    Programming: "programming",
    Economics: "economics",
    History: "history"
}

var Books = [
    {
    Maths: "maths",
    Programming: "programming",
    Economics: "economics",
    History: "history"
}]

for (books in obj) {
    let book = obj[books];
    console.log(`${books}: ${book}\n`)
}

Books.forEach(element => {
    console.log('Element: ', element,'\n');
    
    for(obj in element) {
        console.log('Book: ', obj);
    }
    console.log('-------------------\n')
});