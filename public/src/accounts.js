// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a,b) => a.name.last < b.name.last? -1: 1);
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc,book) => {
    if(book.borrows.some(borrower => borrower.id === account.id)){
      acc += 1
    }
    return acc;
  },0)
}

function getBooksPossessedByAccount(account, books, authors) {
  const filteredBooks = books.filter((book) => (
    book.borrows.some((borrower) => borrower.id === account.id 
    && borrower.returned === false)))
  filteredBooks.map((book) => book['author'] = 
    authors.find(author => book.authorId === author.id));
  return filteredBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
