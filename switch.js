// # Books
var books = ["Java", "HTML", "CSS3", "Javascript"]
var type = Math.round(Math.random() * books.length);
var book = books[type];

switch (book) {
    case "HTML":
        console.log(`\t${book} Book`);
        break;
    case "CSS3":
        console.log(`\t${book} Book`);
        break;
    case "Javascript":
        console.log(`\t${book} Book`);
        break;
    default:
        console.log(`\tUnknown Book`);
        break;
}