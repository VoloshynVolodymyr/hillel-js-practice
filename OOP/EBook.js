import Book from './Book.js';

export default class EBook extends Book {
	#format;

	constructor(title, author, year, format) {
		super(title, author, year);
		this.format = format;
	}

	get format() {
		return this.#format;
	}
	set format(value) {
		if (typeof value !== 'string') {
			throw new Error('Format must be a string!');
		}
		this.#format = value;
	}

	static createInstanceFromBook(book, format) {
		return new EBook(book.title, book.author, book.year, format);
	}
	printInfo() {
		super.printInfo();
		console.log(`Format : ${this.format}`);
	}
}
