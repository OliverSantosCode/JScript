// # Drive
var ages = (min,max) => Math.round(Math.random() * (max - min) + min)
var ages = ages(10,70)

if(ages >= 18) {
    // console.log(`Ages ${ages}: Qualify for driving`)
}

if(ages < 18) {
    // console.log(`Ages ${ages}: Does not qualify for driving`)
}

console.log("____________________________")

if(ages >= 18) {
    // console.log(`Ages ${ages}: Qualify for driving`)
} else {
    // console.log(`Ages ${ages}: Does not qualify for driving`)
}

// console.log("____________________________")

// # Books
var books = ["maths", "programming", "economics", "history"]
var type = Math.floor(Math.random() * books.length)
var book = books[type]

if(book == "history") {
    // console.log("History Book")
} else if(books == "maths") {
    // console.log("Maths Book")
} else if(books == "economics") {
    // console.log("Economics Books")
} else {
    // console.log("Unknown Book")
}

// console.log("____________________________")

module.exports = ages;