function isNumberEven(number){
	if (typeof number !== "number") return "Unacceptable attribute"
	if (Math.floor(number) !== number) {
		return false;
	  }
	return number % 2 === 0
}

console.log(isNumberEven("not number"))
console.log(isNumberEven(0.23))
console.log(isNumberEven(2))
console.log(isNumberEven(3))