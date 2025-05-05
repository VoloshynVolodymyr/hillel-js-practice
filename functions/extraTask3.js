function countDiscount(days) {
	if (days <= 0) return 'Unacceptable value';
	const oneDayPrice = 40;
	if (days >= 7) return oneDayPrice * days - 50;
	if (days >= 3) return oneDayPrice * days - 20;
	return oneDayPrice * days;
}

console.log(countDiscount(0));
console.log(countDiscount(10));
console.log(countDiscount(5));
console.log(countDiscount(2));
