export default class Users {
	static async getUserById(id){
		try {
			const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			const data = await response.json()
			return data
		} catch (error) {
			console.error("Fetching user error: " + error.message)
		}
	}
}