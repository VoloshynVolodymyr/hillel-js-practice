function handleNum(num, handleEvenCb, handleOddCb){
	if (typeof num !== 'number') {
		console.log('Invalid input');
		return;
	}
	num % 2 === 0 ? handleEvenCb() : handleOddCb()
}

function handleEven(num){
	console.log('number is even')
}

function handleOdd(){
	console.log('number is odd')
}

handleNum('Hello')
handleNum(4, handleEven, handleOdd)
handleNum(5, handleEven, handleOdd)