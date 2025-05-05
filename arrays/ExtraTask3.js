function getDifferenceBetweenLowestAndLargest(arr) {
	const sortedArray = [...arr].sort((a, b) => a - b);
	return sortedArray[sortedArray.length - 1] - sortedArray[0];
}

console.log(getDifferenceBetweenLowestAndLargest([23, 3, 19, 21, 16]));
console.log(getDifferenceBetweenLowestAndLargest([1, 434, 555, 34, 112]));
