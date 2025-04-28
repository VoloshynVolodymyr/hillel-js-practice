const car1 = {
	brand: 'Chevrolet',
	model: 'Cruze',
	year: 2013,
};

const car2 = {
	brand: 'Lexus',
	model: 'IS250',
	owner: 'John Snow',
};

const car3 = { ...car1, ...car2 };

console.log(car3);
