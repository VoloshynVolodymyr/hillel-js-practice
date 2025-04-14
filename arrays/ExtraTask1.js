function getAverageOfArray(arr) {
  if (arr.length === 0) return 0
  const average = [...arr].reduce((acc, elem) => acc + elem, 0)
  return average / arr.length
}

console.log(getAverageOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(getAverageOfArray([]))
