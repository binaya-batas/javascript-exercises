const getTheTitles = function(books) {
    let arrayOfBooks = [];

    books.map((book) => {
        arrayOfBooks.push(book.title);
    })

    return arrayOfBooks;

};

// Do not edit below this line
module.exports = getTheTitles;
