import Todos from './Todos.js'
import Users from './Users.js'

async function runPromises() {
	try {
		const result1 = await Promise.all([Todos.getTodoById(1), Users.getUserById(1)])
		console.log("Result1 (ALL):", result1)

		const result2 = await Promise.race([Todos.getTodoById(1), Users.getUserById(1)])
		console.log("Result2 (RACE):", result2)
	} catch (error) {
		console.error("Error in run:", error.message)
	}
}

runPromises()