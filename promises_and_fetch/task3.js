async function getTodoById(id) {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
		const data = await response.json();
		return data
	} catch (error) {
		console.error("Fetching todo error: " + error.message)
	}
}

async function getUserById(id) {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
		const data = await response.json()
		return data
	} catch (error) {
		console.error("Fetching user error: " + error.message)
	}
}

async function runPromises() {
	try {
		const result1 = await Promise.all([getTodoById(1), getUserById(1)])
		console.log("Result1 (ALL):", result1)

		const result2 = await Promise.race([getTodoById(1), getUserById(1)])
		console.log("Result2 (RACE):", result2)
	} catch (error) {
		console.error("Error in run:", error.message)
	}
}

runPromises()