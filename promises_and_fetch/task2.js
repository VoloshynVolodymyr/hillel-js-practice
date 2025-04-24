function getTodoById(id) {
	return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
		.then(response => response.json())
		.catch(error => {
			console.error("Fetching todo error: " + error.message)
		})
}

function getUserById(id) {
	return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
		.then(response => response.json())
		.catch(error => {
			console.error("Fetching user error: " + error.message)
		})
}

const result1 = Promise.all([getTodoById(1), getUserById(1)])
	.then((values) => values)

const result2 = Promise.race([getTodoById(1), getUserById(1)])
	.then((value) => value)


result1.then(res => console.log("Result1 (ALL):", res))
result2.then(res => console.log("Result2 (RACE):", res))
