const data = [
    {
        id: 1,
        title: "The Lord of the Rings",
        publicationDate: "1954-07-29",
        author: "J. R. R. Tolkien",
        genres: ["fantasy", "high-fantasy", "adventure", "fiction", "novels", "literature"],
        hasMovieAdaptation: true,
        pages: 1216,
        translations: {
            spanish: "El señor de los anillos",
            chinese: "魔戒",
            french: "Le Seigneur des anneaux",
        },
        reviews: {
            goodreads: {
                rating: 4.52,
                ratingsCount: 630994,
                reviewsCount: 13417,
            },
            librarything: {
                rating: 4.53,
                ratingsCount: 47166,
                reviewsCount: 452,
            },
        },
    },
    {
        id: 2,
        title: "The Cyberiad",
        publicationDate: "1965-01-01",
        author: "Stanislaw Lem",
        genres: ["science fiction", "humor", "speculative fiction", "short stories", "fantasy"],
        hasMovieAdaptation: false,
        pages: 295,
        translations: {},
        reviews: {
            goodreads: {
                rating: 4.16,
                ratingsCount: 11663,
                reviewsCount: 812,
            },
            librarything: {
                rating: 4.13,
                ratingsCount: 2434,
                reviewsCount: 0,
            },
        },
    },
    {
        id: 3,
        title: "Dune",
        publicationDate: "1965-01-01",
        author: "Frank Herbert",
        genres: ["science fiction", "novel", "adventure"],
        hasMovieAdaptation: true,
        pages: 658,
        translations: {
            spanish: "",
        },
        reviews: {
            goodreads: {
                rating: 4.25,
                ratingsCount: 1142893,
                reviewsCount: 49701,
            },
        },
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: "1997-06-26",
        author: "J. K. Rowling",
        genres: ["fantasy", "adventure"],
        hasMovieAdaptation: true,
        pages: 223,
        translations: {
            spanish: "Harry Potter y la piedra filosofal",
            korean: "해리 포터와 마법사의 돌",
            bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
            portuguese: "Harry Potter e a Pedra Filosofal",
        },
        reviews: {
            goodreads: {
                rating: 4.47,
                ratingsCount: 8910059,
                reviewsCount: 140625,
            },
            librarything: {
                rating: 4.29,
                ratingsCount: 120941,
                reviewsCount: 1960,
            },
        },
    },
    {
        id: 5,
        title: "A Game of Thrones",
        publicationDate: "1996-08-01",
        author: "George R. R. Martin",
        genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
        hasMovieAdaptation: true,
        pages: 835,
        translations: {
            korean: "왕좌의 게임",
            polish: "Gra o tron",
            portuguese: "A Guerra dos Tronos",
            spanish: "Juego de tronos",
        },
        reviews: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 2295233,
                reviewsCount: 59058,
            },
            librarything: {
                rating: 4.36,
                ratingsCount: 38358,
                reviewsCount: 1095,
            },
        },
    },
];

function getBooks() {
    return data;
}

function getBook(id) {
    return data.find((d) => d.id === id);
}

const books = getBook(2);

/*  
  QUOKKA extention tool -> this allow us to see data object value without using console.log
 with a help of exteion quokka  hindi nnatin kaylangan pa mag console.log para lang ma displa y yong output sa mismong 
 console to be able to see the output in the quokka need mo muna sya i start sa command palltet natin control shift p then
 type mo lang yong quokka then hanapinn mo lang yong start current file then mag oopen na sya sa baba ng terminal 
 */

//* without using destructuring
// const title = books.title;
// const author = books.author;

//! REMEMBER
//note: using destructuring we can get data without creating multiple data type like what we did in the above code
//idea: destructuring is a way to unpack values from arrays or objects into distinct variables you must accrurte type the name of the variable
// to be able to get the data from the object
const { title, author, pages, publicationDate, genres, hasMovieAdaptation, translations, reviews } = books;

// without using Destructuring Array

console.log(author, title, genres);

const primaryGenre = genres[0];
const secondaryGenre = genres[1];
console.log(primaryGenre, secondaryGenre);

// using destructuring in array
/*
 So Same Scenerio using the array destrcutruing we will able to get the data without create another data types
 advantage of this is easier to get the data and also easier to read the code

 */
const [primaryGenre_Des, secondaryGenre_Des] = genres;

// another example
const arr = [1, 2, 3];
const [a, b] = arr;
// a = 1, b = 2, c = 3
console.log(a, b); // you can aslo do this just get the data of 2 index array

//REVIEW: The Rest and Spread Operator
/*
  if we want to create a copy or get all the value of object or array we can use the 
  spread operator  
 */
// Example of Rest Pattern
const [primaryGenre_Des_Spread, secondaryGenre_Des_Spread, ...othersGenres] = genres;
/*
  IDEA: notice what happend as soon as we use the rest  operator and then we console.log
  yong value na nilagay natin ng Spread  it has  [] own array sa loob ng array natin 
  the reason why it has its own array is because we use the rest operator basically ang ginagwa kasi nong rest pattern
  gumagawa sya ng panibagong copy nung value na yon without effecting the original array natin.

  !REMEMBER -> We can only place our rest pattern to the last so hindi sya powede sa git or sa unahan lagi syang last!
 */
console.log(primaryGenre_Des_Spread, secondaryGenre_Des_Spread, othersGenres);

/*
  NOTE: you can actually add another value to the existing array by doign this example code below
  but the problem is that it create a nested array in our example code!


  IDEA: so how we can fix that? 
          by using the spread Operator   tatandaan na yong SPREAD OPERATOR IS LEFT ... side while the REST PATTERN is RIGHT is right side

 */
//NOTE: this is the example without using the spread operator
const newGenres = [genres, "epic fantasy"];
newGenres;

/*
 REVIEW: Notice na wala na yong nested array natin dahil si spread operator ang ginawwa neto is tinatangal nya
 yong value natin sa loob ng array natin.
 */
//NOTE: this is the Example using the spread Operator
const newGenres_SpreadOperator = ["epic fantasy", ...genres];
newGenres_SpreadOperator;

//IDEA: Using the Spread Operator In Object
