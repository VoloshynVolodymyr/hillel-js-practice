export default class Todos {
	static async getTodoById(id){
		try {
			const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
			const data = await response.json();
			return data
		} catch (error) {
			console.error("Fetching todo error: " + error.message)
		}
	}
}