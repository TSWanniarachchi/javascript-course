"use strict";

const books = [
  {
    title: "Algorithms",
    author: ["Robert Sedgewick", "Kevin Wayne"],
    publisher: "Addison-Wesley Professional",
    publicationDate: "2011-03-24",
    edition: 4,
    keywords: [
      "computer science",
      "programming",
      "algorithms",
      "data structures",
      "java",
      "math",
      "software",
      "engineering",
    ],
    pages: 976,
    format: "hardcover",
    ISBN: "9780321573513",
    language: "English",
    programmingLanguage: "Java",
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: "Structure and Interpretation of Computer Programs",
    author: [
      "Harold Abelson",
      "Gerald Jay Sussman",
      "Julie Sussman (Contributor)",
    ],
    publisher: "The MIT Press",
    publicationDate: "2022-04-12",
    edition: 2,
    keywords: [
      "computer science",
      "programming",
      "javascript",
      "software",
      "engineering",
    ],
    pages: 640,
    format: "paperback",
    ISBN: "9780262543231",
    language: "English",
    programmingLanguage: "JavaScript",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ["Randal E. Bryant", "David Richard O'Hallaron"],
    publisher: "Prentice Hall",
    publicationDate: "2002-01-01",
    edition: 1,
    keywords: [
      "computer science",
      "computer systems",
      "programming",
      "software",
      "C",
      "engineering",
    ],
    pages: 978,
    format: "hardcover",
    ISBN: "9780130340740",
    language: "English",
    programmingLanguage: "C",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: "Operating System Concepts",
    author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
    publisher: "John Wiley & Sons",
    publicationDate: "2004-12-14",
    edition: 10,
    keywords: [
      "computer science",
      "operating systems",
      "programming",
      "software",
      "C",
      "Java",
      "engineering",
    ],
    pages: 921,
    format: "hardcover",
    ISBN: "9780471694663",
    language: "English",
    programmingLanguage: "C, Java",
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: "Engineering Mathematics",
    author: ["K.A. Stroud", "Dexter J. Booth"],
    publisher: "Palgrave",
    publicationDate: "2007-01-01",
    edition: 14,
    keywords: ["mathematics", "engineering"],
    pages: 1288,
    format: "paperback",
    ISBN: "9781403942463",
    language: "English",
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: "The Personal MBA: Master the Art of Business",
    author: "Josh Kaufman",
    publisher: "Portfolio",
    publicationDate: "2010-12-30",
    keywords: ["business"],
    pages: 416,
    format: "hardcover",
    ISBN: "9781591843528",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: "Crafting Interpreters",
    author: "Robert Nystrom",
    publisher: "Genever Benning",
    publicationDate: "2021-07-28",
    keywords: [
      "computer science",
      "compilers",
      "engineering",
      "interpreters",
      "software",
      "engineering",
    ],
    pages: 865,
    format: "paperback",
    ISBN: "9780990582939",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    publisher: "Grand Central Publishing",
    publicationDate: "2016-01-05",
    edition: 1,
    keywords: ["work", "focus", "personal development", "business"],
    pages: 296,
    format: "hardcover",
    ISBN: "9781455586691",
    language: "English",
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

///////////////////////////////////////
// Destructuring Arrays

/*
// 1.
const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);

// 2.
const [, , thirdBook] = books;
console.log(thirdBook);

// 3.
const ratings = [
  ["rating", 4.19],
  ["ratingsCount", 144584],
];
const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

// 4.
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);
*/

///////////////////////////////////////
// Destructuring Objects

/*
// 1.
const { title, author, ISBN } = books[0];
console.log(title, author, ISBN);

// 2.
const { keywords: tags } = books[0];
console.log(tags);

// 3.
const { language, programmingLanguage = "unknown" } = books[6];
console.log(language, programmingLanguage);

// 4.
let bookTitle = "unknown";
let bookAuthor = "unknown";
({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookTitle, bookAuthor);

// 5.
const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
console.log(bookRating);

// 6.
const printBookInfo = function ({ title, author, year = "year unknown" }) {
  console.log(`${title} by ${author}, ${year}`);
};

printBookInfo({
  title: "Algorithms",
  author: "Robert Sedgewick",
  year: "2011",
});
printBookInfo({ title: "Algorithms", author: "Robert Sedgewick" });
*/

///////////////////////////////////////
// The Spread Operator (...)

/*
// 1.
const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

// 2.
const spellWord = function (word) {
  console.log(...word);
};

spellWord("JavaScript");
*/

///////////////////////////////////////
// Rest Pattern and Parameters

/*
// 1.
const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword, rest);

// 2.
const { publisher: bookPublisher, ...restOfTheBook } = books[1];
console.log(bookPublisher, restOfTheBook);

// 3.
const printBookAuthorsCount = function (title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`);
};

printBookAuthorsCount("Algorithms", "Robert Sedgewick", "Kevin Wayne");
*/

///////////////////////////////////////
// Short Circuiting (&& and ||)

/*
// 1.
const hasExamplesInJava = function (book) {
  return book.programmingLanguage === "Java" || "no data available";
};

console.log(hasExamplesInJava(books[0]));
console.log(hasExamplesInJava(books[1]));

// 2.
for (let book of books) {
  book.onlineContent && console.log(`"${book.title}" provides online content`);
}
*/

///////////////////////////////////////
// The Nullish Coalescing Operator (??)

/*
// 1.
for (let book of books) {
  book.onlineContent ??
    console.log(`"${book.title}" provides no data about its online content`);
}
*/

///////////////////////////////////////
// Logical Assignment Operators

/*
// 1.
for (let book of books) {
  book.edition ||= 1;
  // book.edition ??= 1;
  console.log(`"${book.title}", Edition: ${book.edition}`);
}

// 2.
for (let book of books) {
  book.highlighted ||= true;
  book.highlighted &&= !(book.thirdParty.goodreads.rating < 4.2);
  console.log(`${book.thirdParty.goodreads.rating}, = ${book.highlighted}`);
}
*/

///////////////////////////////////////
// The for-of Loop

/*
// 1.
let pageSum = 0;

for (const book of books) {
  pageSum += book.pages;
}
console.log(pageSum);

// 2.
const allAuthors = [];

for (const book of books) {
  typeof book.author === "object"
    ? allAuthors.push(...book.author)
    : allAuthors.push(book.author);
}
console.log(allAuthors);

// 3.
for (const [index, author] of allAuthors.entries()) {
  console.log(`${index + 1}. ${author}`);
}
*/

///////////////////////////////////////
// Enhanced Object Literals

/*
// 1.
const bookData = [
  ["title", "Computer Networking: A Top-Down Approach"],
  ["author", ["James F. Kurose", "Keith W. Ross"]],
  ["publisher", "Addison Wesley"],
];

const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};
console.log(newBook);

// 2.
const pages = 880;

const newBook2 = {
  title: "The C Programming Language",
  author: ["Brian W. Kernighan", "Dennis M. Ritchie"],
  pages,
};
console.log(newBook2);

///////////////////////////////////////
// Optional chaining (?.)

// 1.
const getFirstKeyword = function (book) {
  return book.keywords?.[0] ?? "Book keywords does not exist.";
};

console.log(getFirstKeyword(books[0]));
console.log(getFirstKeyword(newBook2));
*/

///////////////////////////////////////
// Looping Objects: Object Keys, Values, and Entries

/*
// 1.
const entries = [];

for (const key of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([key]);
}
// console.log(entries);

// 2.
for (const [index, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entries[index].push(value);
}
// console.log(entries);

// 3.
const entries2 = Object.entries(books[0].thirdParty.goodreads);
// console.log(entries2);

// 4.
console.log(entries);
console.log(entries2);
*/

///////////////////////////////////////
// Sets

/*
// 1.
const allKeywords = [];

for (const book of books) {
  allKeywords.push(...book.keywords);
}
console.log(allKeywords);

// 2.
const uniqueKeywords = new Set(allKeywords);
console.log(uniqueKeywords);

// 3.
uniqueKeywords.add("coding");
uniqueKeywords.add("science");
console.log(uniqueKeywords);

// 4.
uniqueKeywords.delete("business");
console.log(uniqueKeywords);

// 5.
const uniqueKeywordsArr = [...uniqueKeywords];
console.log(uniqueKeywordsArr);

// 6.
uniqueKeywords.clear();
console.log(uniqueKeywords);
*/

///////////////////////////////////////
// Maps: Fundamentals

// 1.
const bookMap = new Map([
  ["title", "Clean Code"],
  ["author", "Robert C. Martin"],
]);
console.log(bookMap);

// 2.
bookMap.set("pages", 464);
console.log(bookMap);

// 3.
console.log(`${bookMap.get("title")} by ${bookMap.get("author")}`);

// 4.
console.log(bookMap.size);

// 5.
if (bookMap.has("author")) console.log("The author of the book is known");
