let sumNumbersOfArray = function (arr) {
	let maxNumberIndex = arr.indexOf(Math.max(...arr));
	let minNumberIndex = arr.indexOf(Math.min(...arr));
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (i === maxNumberIndex || i === minNumberIndex) continue;
		else sum += arr[i];
	}
	return sum;
};

console.log(sumNumbersOfArray([6, 2, 1, 8, 10]));
console.log(sumNumbersOfArray([1, 1, 11, 2, 3]));
