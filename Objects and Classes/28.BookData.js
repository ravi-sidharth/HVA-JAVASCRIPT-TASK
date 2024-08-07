class Book {
	constructor(title,author,publisher,year,genre) {
	this.title=title
	this.author=author
	this.publisher=publisher
	this.year=year
	this.genre=genre
	
	}
	
	describe() {
		console.log(`${this.title}-${this.author} ${this.year}`)
		}
	displayGenre() {
		console.log(`Genre:${this.genre}`)
		}
	
	
}


const classicBook = new Book ("Pride and Prejudice","Jane Austen","T.Egerton",1813,"Classic")
const sciFiBook = new Book ("Dune","Frank Herbert","Chilton Books",1965,"Science Fiction")

classicBook.describe()
classicBook.displayGenre()

sciFiBook.describe()
sciFiBook.displayGenre()
