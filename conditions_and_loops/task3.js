const number = 7;

console.log('Цикл з використанням for');
for (let i = 1; i <= 10; i++) {
	let result = number * i;
	console.log(`${number} x ${i} = ${result}`);
}

console.log('-------------');

console.log('Цикл з використанням while');
let counter = 1;
while (counter <= 10) {
	let result = number * counter;
	console.log(`${number} x ${counter} = ${result}`);
	counter++;
}
