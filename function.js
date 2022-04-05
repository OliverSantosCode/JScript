// # Sum between two values

function addition(sum1, sum2) {
	return sum1 + sum2;
}

// # Sub between two values

function subtraction(sub1, sub2) {
	return sub1 - sub2;
}

// # Multi between two values

function multiplication(mul1, mul2) {
	return mul1 * mul2;
}

// # Div between two values

function div(num1, num2) {
	return num1 / num2;
}

// # Rest between two values

function rest(num1, num2) {
	return num1 % num2;
}

// # Pair one value

function pair(num) {
	return num % 2;
}

// # Odd one value

function odd(num) {
	return num % 2;
}

module.exports = { addition, subtraction, multiplication };

/**
 * console.log(`Result sum: ${sum(5, 5)},
 * Result sub: ${sub(10, 3)},
 * Result mult: ${mult(2,5)}, 
 * Result div: ${div(10,5)},
 * Result rest ${rest(3,2)},
 * Result pair ${pair(4)},
 * Result odd ${odd(7)}`);
 */
