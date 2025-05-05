function checkOrder(available, ordered) {
	if (available < 0 || ordered < 0) return 'Error. Incorrect quantity of product in stock or ordered';
	if (available < ordered) return 'Your order is too large, we don’t have enough goods.';
	if (ordered === 0) return 'Your order is empty';
	if (available >= ordered) return 'Your order is accepted';
}

console.log(checkOrder(-5, 3));
console.log(checkOrder(5, -3));
console.log(checkOrder(3, 5));
console.log(checkOrder(5, 0));
console.log(checkOrder(7, 5));
