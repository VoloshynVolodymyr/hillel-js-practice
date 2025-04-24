function printWithDelay(text, delay){
	setTimeout(() => console.log(`${text} in ${delay} milliseconds`), delay)
}

printWithDelay(`This is promise with delay`, 2000)