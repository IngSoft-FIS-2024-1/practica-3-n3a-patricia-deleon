import {describe, it, expect, beforeEach} from '@jest/globals';
import Book from '../book.js';

describe('Book', () => {
  let myBook;

  beforeEach(() => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350, 15000);
  });

  it('return the correct title', () => {
    expect(myBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the correct author', () => {
    expect(myBook.getAuthor()).toBe('Horacio Quiroga');
  });

  it('return the correct number of pages', () => {
    expect(myBook.getPages()).toBe(350);
  });

  it('check title is a string', () => {
    expect(() => myBook = new Book(451, 1, 350, 52)).toThrow();
  });

  it('check title is not empty', () => {
    expect(() => myBook = new Book('', 'Horacio Quiroga', 350, 5)).toThrow();
  });

  it('check author is a string', () => {
    // TODO
  });

  it('check page param is a number', () => {
    // TODO
  });

  it('check pages not < 1', () => {
    // TODO
  });
  it('toString()', () => {
    // TODO
  });

  describe('Book: wordsPerPage', () => {
    let myBook;
  
    it('should calculate words per page correctly', function () {
      myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 100, 50000);
      expect(myBook.wordsPerPage()).toBe(500);
    });
  
    it('should throw an error for zero pages', function () {
      expect(() => {
        myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 0, 50000).wordsPerPage();
      }).toThrow('Error: El número de páginas o palabras no puede ser menor o igual que cero.');
    });
  
    it('should throw an error for zero words', function () {
      expect(() => {
        new Book('Cuentos de la Selva', 'Horacio Quiroga', 100, 0).wordsPerPage();
      }).toThrow('Error: El número de páginas o palabras no puede ser menor o igual que cero.');
    });
  
    it('should throw an error for negative pages', function () {
      expect(() => {
        new Book('Cuentos de la Selva', 'Horacio Quiroga', -10, 50000).wordsPerPage();
      }).toThrow('Error: El número de páginas o palabras no puede ser menor o igual que cero.');
    });
  
    it('should throw an error for negative words', function () {
      expect(() => {
        new Book('Cuentos de la Selva', 'Horacio Quiroga', 100, -5).wordsPerPage();
      }).toThrow('Error: El número de páginas o palabras no puede ser menor o igual que cero.');
    });
  });

});
