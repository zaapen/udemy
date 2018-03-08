var age = Number(prompt('Enter your age'));

console.log(age);

if (age < 0) {
	console.log('Error. You have not been born yet!')
}
if (age === 21) {
	console.log('Happy 21th birthday!!')
}
if (age % 2 !== 0) {
	console.log('Your age is odd');
}
console.log(Math.sqrt(age));
if (age % Math.sqrt(age) === 0) {
	console.log('Your age is a perfect square')
}