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

const books = getBook(1);

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
 NOTE: Notice na wala na yong nested array natin dahil si spread operator ang ginawwa neto is tinatangal nya
 yong value natin sa loob ng array natin.
 */
//NOTE: this is the Example using the spread Operator
const newGenres_SpreadOperator = ["epic fantasy", ...genres];
newGenres_SpreadOperator;

//IDEA: Using the Spread Operator In Object
/*
  NOTE:
    so using the spread operator we able to create a new copy  of the current books and able to add new keys and value from it
    which is moviePublicationDate  //!Remember yong ...books is newly copy so hindi ma aapektuhan yong mismong orginal one kung mag decided  tayo na bahuin yong value ng books here
  */

books; // NOTE this is the original books value

const UpdatedBook = {
    ...books,
    // NOTE: -> adding new Properties
    moviePublicationDate: "2001-12-19",
    //NOTE: -> OverWriting existing properties
    pages: 1,
};
UpdatedBook;

//IDEA: Here The example notice that hindi aapektuhan yong original copy ng book natin dahil ginamit natin ang spread operator para makagawa ng bagong refererence id
// ma allow natin ma manipulate yong value ng updated book without  affecting the original one so

/*
 NOTE: so how we can use the spread operator to merge two objects together
 NOTE: we can also overWrite the value of the original book keys without effecting the original one so example natin jan ginawa natin page  1 nalang yong page
 */
UpdatedBook.author = "John Carlo Espina";
UpdatedBook;

//REVIEW: Template Literals
const EveryGenreBook = `this is every book in the ${books.genres} genre`;
const summary = `${title}, a ${pages}-page long book, was  written by ${author} and published in ${publicationDate}`;
/* IDEA: what is template literals? 
        template literals is a modern style of concatination kung saan powede ka mag lagay ng code sa loob ng ${}
        powede ka gumawa ng ternary expression sa loob ng template literals at powede kadin  mag display ng value 
        gamit  na mang gagaling sa object  basta tatandaan ninyo na this ternary is  is very powerful.
        kasi madami kapang powede gawin jan bukod sa idea na naka sulat dito!
     */
// NOTE: this will display every genree that available in books
EveryGenreBook;
summary; // NOTE: this will display the summary of the book

//REVIEW: Ternaries instead  of if else Literals
/*
        IDEA: why we should use the Ternaries  operator instead of if else?
               because may mga scenario na we cannt use the if else code thats why we have to know how to use and when to use 
               the ternary operator.
*/
//Basic Example
function getFee(isMember) {
    return isMember ? "$2.00" : "$10.00";
}
console.log(getFee(true));
// Expected output: "$2.00"

console.log(getFee(false));
// Expected output: "$10.00"

console.log(getFee(null));
// Expected output: "$10.00"

//NOTE: another example
const pageRange = pages > 1000 ? "Over a thousand" : "Less than 1000";
// so here this is the  another example   the result of this console.log will determine based on how many pages nung books natin!
console.log(`the book have ${pageRange}`);

// REVIEW: short-Circutting and Logical Operators && || ??
/*
    NOTE:  sa short circuting  powede natin sila gamitin inaway na way na parang conditional statemang lang din
    for example sa &&  AND natin kugn gusto natin gumawa ng dalwang multiple condition then powede nati ngamitin yong &&
    pero kung gusto natin may optional lang yong sagot like poweding 1 or 2 gagamit tayo ng OR ||.
     !- pero ang problema kasi kay ||  meron tayong tina tawag na falsy and truty so 
       pag ang goal natin is kahit 0  yong sagot natin i coconsider sya ni or as flasy value 
       so dapat mo lang tandaan na alm mo lang yong mga flasy value  kay OR || for example  empty string '' , 0 undfined null
       yan yong mga tinatwag na falsy value  na i coconsider agad na mali ni OR || kaya may na entroduced si ja
   } */

//NOTE: EXAMPLE CODE for &&
console.log(true && false); //->  false
console.log(true && "Some String"); // -> Some String  NOTE: once na nag true yong condition natin laging i rereturn  sa AND operator is yong last value ntin kaya some string ni return dito
console.log(false && "Some String"); // -> this is false because dapat parehas silang truety
console.log(hasMovieAdaptation && "This book has a movie"); // -> return  this book has a movie -> since yong pasok sa condition natin na yong hasMovieADaptation is True don sa object nya
// ! REMEMBER the way na nag wowork is && operator is  dapat parehas na True yong bawat condition nya.

// EXAMPLE FOR OR ||
console.log(true || "Some thing"); // -> TRUE NOTE: kaya sya true kasi si or as soon as na  hindi True yong unang condition or yong optional nya is i  rereturn nya na yon
console.log(false || "this is tring"); // ->NOTE: as you can see kahit na may false tayo sa condition nya basta may true tayo yon yung i rereturn nya
console.log(false || false); // ->  FALSE NOTE:  since walang true sa or natin ang output natin is false!
// example object

console.log(books.translations.spanish); // this will display  spanish  if not this will be undefined but
console.log(books.translations.tagalog || "No  Translation"); // -> the output will be NO TRANSLATION!
/* 
  ! Remember kahit na ganu kadami yong false donsa mismong OR natin sa condition as long as may mag TRue jan i rereturn nya na agad yong TRUE VALUE NA YON
  NOTE: unlike kay and na a as soon as may nakita syang false i rereturn na agad nya yong false value na yon.

   so again pag yong value na unang niyang checneck sa OR operator is false chcheck nya yong second pag true namn na yon na yong irereturn nya
   at hindi na nya i chcheck kung yong sunod na value is true!
   ! REMEMBER AGAIN THE || or value is very sensitive
    what do you mean sensitive?   any value na pasok sa falsy  value natin like -> '', 0 , undefined , null 
    i coconsider ni OR || na false ,  which is delicado kung may data tayo na ang value is 0 talga so i rereturn nya yon 
    as a falsesy value!
 */
// for example
console.log(books.reviews.librarything); // this will return the value of reviews
// NOTE: you have to change the ID to see the output of this example
const countWrong = books.reviews.librarything.reviewsCount || "No data";
countWrong; // if you are using the ID - 2 answer is 452 but using the ID - 1 Ang i rereturn nya is 'no data'\ kahit na may value na 0
// Why? it's because si 0 nakikita nya yon as falsy value kaya hindi nya ni rereturn yong value na 0 kaya no data yong ibibgay nya

// NOTE: kaya binuo ni javascript community and tinatwag na ??

// IDEA: What is the best solution here ??
// NOTE: the Best solution is by using the  use the nullish coalescing operator
/*
       so lahat  lahat ng falsy value execept sa undefined i ignore nya
       that the power for example sa countWrong natin pag yong data natin don is 0 hindi nya i rereturn yong no data
       but still i rereturn nya yong value na 0 dahil i coconsider nya yong as truethy value
       kahit empty string  or 0 basta hindi undefined and null
*/
//     NOTE: tatandaan mo na it works similary katuald ng OR operator ang pinag kaiba lang is yong
const count = books.reviews.librarything.ratingsCount ?? "no data";
count; // in id 2 output will be : 47166 , But in ID 1 the output will be  0;
/*
!
 */
