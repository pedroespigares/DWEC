class Book {
  constructor(tit, aut, gen) {
    this.title = tit;
    this.genre = gen;
    this.author = aut;
    this.read = false;
    this.readDate = null;
  }
}

class BookList {
  constructor() {
    this.books = [];

    // Por defecto el libro actual es el primero

    this.currentBook = 0;
  }

  add(book) {
    this.books.push(book);
  }

  finishCurrentBook() {
    if (this.currentBook < this.books.length) {
      // Marcar el libro actual como leído

      this.books[this.currentBook].read = true;

      // Guardar la fecha de lectura (actual)

      this.books[this.currentBook].readDate = new Date();
      this.currentBook++;
    }
  }

  get numberBooksRead() {
    // Devolver el número de libros leídos

    return this.books.filter((book) => book.read).length;
  }

  get numberBooksNotReadYet() {
    // Devolver el número de libros no leídos

    return this.books.length - this.numberBooksRead;
  }

  get totalBooks() {
    // Devolver el número total de libros

    return this.books.length;
  }
}