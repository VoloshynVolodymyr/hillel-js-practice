//Function declaration
function getArea1(width, height) {
	return width * height;
}

//Function expression
const getArea2 = function (width, height) {
	return width * height;
};

//Arrow function expression
const getArea3 = (width, height) => width * height;

console.log(getArea1(5, 10));
console.log(getArea2(10, 20));
console.log(getArea3(100, 200));
