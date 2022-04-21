// # Drive
var age = (min, max) => Math.round(Math.random() * (max - min) + min);
var age = age(10, 20);

age >= 18
	? console.log(`${age} Qualifies for driving.`)
	: console.log(`${age} Does not qualify for driving.`);

// # Books
var books = ["maths", "programming", "economics", "history"];
var type = Math.floor(Math.random() * books.length);
var book = books[type];

console.log("________________________________");
book == "history"
	? console.log("History Book")
	: book == "maths"
	? console.log("Maths Book")
	: book == "economics"
	? console.log("Economics Book")
	: console.log("Unknown Book");

	module.exports = age;