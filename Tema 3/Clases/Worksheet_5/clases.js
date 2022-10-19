class Book {
  constructor(title, genre, author) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = false;
    this.reading = false;
    this.read_date = undefined;
  }

  markAsRead() {
    this.read = true;
    this.read_date = new Date(Date.now());
  }

  markAsReading() {
    this.reading = true;
  }
}

class BookList {
  constructor() {
    this.readed_books = [];
    this.not_readed_books = [];
    this.nextBook = undefined;
    this.currentBook = undefined;
    this.lastBook = undefined;
  }

  add(book) {
    if (book.read == true) {
      this.readed_books.push(book);
    } else {
      this.not_readed_books.push(book);
    }

    if (book.reading == true) {
      this.currentBook = book;
    }
  }

  finishCurrentBook() {
    this.currentBook.markAsRead();
    this.lastBook = this.currentBook;
    let index = this.not_readed_books.findIndex(
      (book) => book === this.currentBook
    );
    this.not_readed_books.splice(index, 1);
    this.readed_books.push(this.lastBook);
    this.nextBook = this.not_readed_books[0];
    this.currentBook = this.nextBook;
    this.nextBook = this.not_readed_books[1];
    this.currentBook.markAsReading();
  }
}

let libro_1 = new Book("Chainsaw Man", "Acción", "Tatsuki Fujimoto");

libro_1.markAsRead();

let libro_2 = new Book("Don Quijote", "Clásico", "Miguel de Cervantes");

libro_2.markAsRead();

let libro_3 = new Book("Marina", "Ficción", "Juan Luis Pérez");

let libro_4 = new Book("Romeo y Julieta", "Romance", "William Shakespear");

let libro_5 = new Book("Jujutsu Kaisen", "Acción", "Carlos Puerro");

libro_5.markAsReading();

let libreria = new BookList();

libreria.add(libro_1);
libreria.add(libro_2);
libreria.add(libro_3);
libreria.add(libro_4);
libreria.add(libro_5);
libreria.finishCurrentBook();

console.log("Libros leídos: ", libreria.readed_books);
console.log("Libros no leídos: ", libreria.not_readed_books);
console.log("Libro actual: ", libreria.currentBook);
console.log("Último libro: ", libreria.lastBook);
console.log("Próximo libro: ", libreria.nextBook);
