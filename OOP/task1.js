import Book from './Book.js'
import EBook from './EBook.js'

// Task 1.1

const book1 = new Book("The Three-Body Problem", "Liu Cixin", 2006)
const book2 = new Book("The Dark Forest", "Liu Cixin", 2008)
const book3 = new Book("Death's End", "Liu Cixin", 2010)

console.log("Task 1.1")
book1.printInfo()
book2.printInfo()
book3.printInfo()

// Task 1.2
console.log("\n" + "Task 1.2")
const eBook = new EBook("Sea of Dreams", "Liu Cixin", 2002, "pdf")
eBook.printInfo()

// Task 1.3
console.log("\n" + "Task 1.3")
book1.year = 2025
book1.printInfo()

try {
	book1.author = 42
} catch (error) {
	console.log("Error : " + error.message);
}

// Task 1.4
console.log("\n" + "Task 1.4")
Book.sortBooksByYear([book2, book3])
Book.sortBooksByYear([book2, book3, eBook])

//Task 1.5
console.log("\n" + "Task 1.5")
const instanceFromBook = EBook.createInstanceFromBook(book3, "doc")
instanceFromBook.printInfo()

try {
	const instanceFromBookWithError = EBook.createInstanceFromBook(book3, 44)
	instanceFromBookWithError.printInfo()
} catch (err) {
	console.error("Error in instanceFromBookWithError:", err.message)
}