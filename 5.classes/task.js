class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }

fix() {
    this.state = this.state * 1.5;
}

set state(stateCount) {
    this._state = stateCount;
    if (stateCount < 0) {
        this._state = 0;
    }
    if (stateCount > 100) {
        this._state = 100;
    }
}

get state() {
    return this._state
}
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state = 100, type = "magazine") {
    super (name, releaseDate, pagesCount, state, type)
}
}

class Book extends PrintEditionItem {  
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "book") {
    super (name, releaseDate, pagesCount, state, type);
    this.author = author;
}
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type = "novel") {
        super (author, name, releaseDate, pagesCount, state, type);
}
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type = "fantastic") {
        super (author, name, releaseDate, pagesCount, state, type);
}
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type = "detective") {
        super (author, name, releaseDate, pagesCount, state, type);
}
}

class Library {
    constructor(name = "", books = []){
    this.name = name;
    this.books = books;
    }
    
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    
    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
    }

    giveBookByName(bookName) {
       const book = this.findBookBy('name', bookName);
       if(book) {
        this.books.splice(this.books.indexOf(book), 1);
       }
       return book;
    }
}
