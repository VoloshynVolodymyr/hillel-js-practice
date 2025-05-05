export default class Book {
	_title;
	_author;
	_year;

	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}

	static sortBooksByYear(arr) {
		const sortedBooks = arr.sort((a, b) => a.year - b.year);
		return sortedBooks[0].printInfo();
	}

	get title() {
		return this._title;
	}
	set title(value) {
		if (typeof value !== 'string') {
			throw new Error('The title must be a string!');
		}
		this._title = value;
	}

	get author() {
		return this._author;
	}
	set author(value) {
		if (typeof value !== 'string') {
			throw new Error('The author must be a string!');
		}
		this._author = value;
	}

	get year() {
		return this._year;
	}
	set year(value) {
		if (typeof value !== 'number') {
			throw new Error('The year must be a number!');
		}
		this._year = value;
	}

	printInfo() {
		console.log(`Book : ${this.title}, author : ${this.author}, year : ${this.year}`);
	}
}
