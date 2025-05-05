function checkAge(age) {
	if (age < 0 || age > 130) return 'Invalid user age value';
	let result = age >= 18 ? true : false;
	return result;
}

console.log(checkAge(25));
console.log(checkAge(15));
console.log(checkAge(-1));
console.log(checkAge(131));
