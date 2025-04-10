function divide(numerator, denominator){
	if(denominator === 0 || typeof numerator !== 'number' || typeof denominator !== 'number')
		throw new Error('Unapproptiate value of arguments')
	return numerator / denominator
}

try {
	const result = divide(10, 5)
	console.log('Результат:', result)
} catch (error) {
	console.log('Помилка:', error.message)
} finally {
	console.log('Робота завершена')
	console.log('----------------')
}

try {
	const result = divide(10, 0);
	console.log('Результат:', result)
} catch (error) {
	console.log('Помилка:', error.message)
} finally {
	console.log('Робота завершена')
	console.log('----------------')
}

try {
	const result = divide('Ooops!', 5)
	console.log('Результат:', result)
} catch (error) {
	console.log('Помилка:', error.message)
} finally {
	console.log('Робота завершена')
	console.log('----------------')
}