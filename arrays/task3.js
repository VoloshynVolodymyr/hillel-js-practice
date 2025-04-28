const numbers = [10, 20, 30, 40, 50];

const sumOfNumbers = numbers.reduce((acc, elem) => acc + elem, 0);

console.log(`Сума елементів масиву : ${sumOfNumbers}`);
