function recursiveNumbers(num){
	if (typeof num !== 'number') {
		console.log('Invalid input')
		return;
	}
	console.log(num);
	if (num > 0) {
		recursiveNumbers(--num)
	}
}

recursiveNumbers(5)