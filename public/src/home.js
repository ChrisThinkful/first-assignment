// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter((book) => (
    book.borrows.some((borrowers) => borrowers.returned === false))
    ).length;
}

function topFive(array) {
  return array.sort((a,b) => a.count < b.count ? 1: -1).slice(0,5)
}

function someMatch(inputs,target) {
  return inputs.some(({name}) => name === target)
}

function findMatch(inputs,target) {
  return inputs.find(({name}) => name === target)
}

function getMostCommonGenres(books) {
  const topGenres = books.reduce((acc, {genre}) => {
    if (findMatch(acc,genre)) {
      findMatch(acc,genre).count += 1
    } else {
      acc.push({
        name: genre,
        count: 1
      })  
    }
    return acc
  },[])
  return topFive(topGenres)
}

function getMostPopularBooks(books) {
  return topFive(topBooks = books.map(book => {
    return {
      name: book.title,
      count: book.borrows.length}
  }))
}

function getMostPopularAuthors(books, authors) {
  const topAuthors = authors.map(author => {
    return {
      name: `${author.name.first} ${author.name.last}`,
      count: books.reduce((acc,book) => {
        if (book.authorId === author.id) {
          acc += book.borrows.length
        }
        return acc;
    },0)
  }})
  return topFive(topAuthors)
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
