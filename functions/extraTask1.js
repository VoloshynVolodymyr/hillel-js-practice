function compareStrings(str1, str2) {
	if (str1.length == str2.length) return 'The strings cannot be the same length.';
	if (str1.length > str2.length) return str2 + str1 + str2;
	return str1 + str2 + str1;
}

console.log(compareStrings('1', '22'));
console.log(compareStrings('22', '1'));
console.log(compareStrings('22', '22'));
