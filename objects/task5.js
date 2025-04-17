const users = [
	{
		firstName: "John",
		lastName: "Snow",
		sex: "male",
	},
	{
		firstName: "Daenerys",
		lastName: "Targaryen",
		sex: "female",
	}
]

for (const {firstName, lastName, sex} of users) {
	console.log(firstName)
	console.log(lastName)
	console.log(sex)
	console.log("-----------");
}