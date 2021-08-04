// # Drive
var age = (min, max) => Math.round(Math.random() * (max - min) + min);
var age = age(10, 20);

age >= 18
	? console.log(`${age} Qualifies for driving.`)
	: console.log(`${age} Does not qualify for driving.`);
