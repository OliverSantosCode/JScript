// # Sum between two values

function sum(num1, num2) {
	return num1 + num2;
}

function sub(num1, num2) {
	return num1 - num2;
}

function mult(num1, num2) {
	return num1 * num2;
}

function div(num1, num2) {
	return num1 / num2;
}

function rest(num1, num2) {
	return num1 % num2;
}

function pair(num) {
	return num % 2;
}

console.log(`Result sum: ${sum(5, 5)},
 Result sub: ${sub(10, 3)}, 
 Result mult: ${mult(2,5)}, 
 Result div: ${div(10,5)},
 Result rest ${rest(3,2)},
 Result pair ${pair(4)}`);
