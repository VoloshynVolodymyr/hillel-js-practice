let array = [34.5, 56.2, 11, 13];
let resultArray = [];

console.log("Вихідний масив - ", array);

for (let i = 0; i < array.length; i++) {
  const remainder = array[i] % 5;
  if (remainder < 2.5) {
    resultArray.push(array[i] - remainder);
  } else {
    resultArray.push(array[i] + 5 - remainder);
  }
}
console.log("Результат 1 - ", resultArray);

//або

resultArray = array.map((element) => Math.round(element / 5) * 5);
console.log("Результат 2 - ", resultArray);
