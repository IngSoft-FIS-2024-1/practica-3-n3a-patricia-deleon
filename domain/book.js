class Book {

  #title;
  #author;
  #pages;
  #words;

  constructor(title, author, pages, words) {
    this.setTitle(title);
    this.setAuthor(author);
    this.setPages(pages);
    this.setWords(words);
  }

  getTitle() {
    return this.#title;
  }

  getAuthor() {
    return this.#author;
  }

  getPages() {
    return this.#pages;
  }

  getWords() {
    return this.#words;
  }

  setWords(words) {
    if (typeof(words) !== 'number' || isNaN(words)) {
      throw new Error('Error: El dato de cantidad de palabras debe ser numérico.');
    }
    this.#words = words;
  } 

  setTitle(title) {
    if (typeof (title) !== 'string') {
      throw new Error();
    }
    title = title.trim();
    if (title.length === 0) {
      throw new Error();
    }
    this.#title = title;
  }

  setAuthor(author) {
    if (typeof (author) !== 'string') {
      throw new Error();
    }
    author = author.trim();
    if (author.length === 0) {
      author = 'Anónimo';
    }
    this.#author = author;
  }

  setPages(pages) {
    if (typeof (pages) !== 'number' || isNaN(pages)) {
      throw new Error();
    }
    if (pages < 1) {
      throw new Error('Error: El número de páginas o palabras no puede ser menor o igual que cero.');
    }
    pages = Math.trunc(pages);
    this.#pages = pages;
  }

  wordsPerPage() {
    if (this.#pages <= 0 || this.#words <= 0) {
      throw new Error('Error: El número de páginas o palabras no puede ser menor o igual que cero.');
    }
    return this.#words / this.#pages;
  }

  toString() {
    return `Título: ${this.#title} Autor: ${this.#author} Páginas: ${this.#pages} Palabras: ${this.#words}`;
  }
}

export default Book;
