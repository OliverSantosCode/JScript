// #Books
var books = ["Maths", "Programming", "Economics", "History"];

books.push("TypeScript");
books.forEach((name, index) => {
	console.log(name, index);
});
console.log(`\nBooks: ${books.length}`);
