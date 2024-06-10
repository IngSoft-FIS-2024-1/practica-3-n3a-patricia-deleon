import Book from './book.js';

class Library {

  #name;
  #inventory = [];
  #totalWords;
  #wordCount;

  constructor(name) {
    this.setName(name);
  }

  setName(name) {
    if (typeof (name) !== 'string') {
      throw new Error();
    }
    name = name.trim();
    if (name.length === 0) {
      throw new Error();
    }
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  addBook(title, author, pages, words) {
    const newBook = new Book(title, author, pages, words);
    this.#inventory.push(newBook);
    this.totalWords();
  }

  getInventory() {
    return this.#inventory;
  }

  totalBooks() {
    return this.#inventory.length;
  }

  totalWords() {
    let totalWords = 0;
    let wordCount = 0;

    for (const book of this.#inventory) {
      if (book.wordsPerPage() > 0) {
        totalWords += book.wordsPerPage() * book.pages;
        wordCount += book.words;
      }
    }

    this.#totalWords = totalWords;
    this.#wordCount = wordCount;
  }
}

export default Library;
