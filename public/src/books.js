// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const allBooks = [
  books.filter((book) => (
    book.borrows[0].returned === false)),
  books.filter((book) => (
    book.borrows[0].returned === true))
  ]
  return allBooks;
}

function getBorrowersForBook(book, accounts) {
  const rentalHistory = accounts.filter((account) => 
  book.borrows.some((borrower) => borrower.id === account.id))
  rentalHistory.map((account) => 
    (account.returned = (book.borrows.find((borrower) => 
      borrower.id === account.id).returned)))

  //console.log(rentalHistory)
  return rentalHistory;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
