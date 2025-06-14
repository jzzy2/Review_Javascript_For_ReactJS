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

const book = getBook(3);

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
! Just Remember ang tangin i coocnsider nya lang isa yong  empty string '' or 0  not null or undefined
 */

// NOTE: REVIEW optional chaining

function getTotalReviewCount(book) {
    const goodread = books.reviews.goodreads.reviewsCount;
    /*
        if our ratingCount is null it will return NaN , but since weare yong nullish coalescing operator 
         yong magiging value nya is 0  so ang rereturn  na nya yong tamamang computation!
     */
    const librarything = book.reviews.librarything?.ratingsCount ?? 0; // since we dont have any library rating in our id 3 this will become undefined

    return goodread + librarything; // so magiging value dito is NaN , but since we are using the nullish coalescing operator this value wil become 0
    // kaya  ni return yonng zero sa mata ni nullish coalishing  yong 0 is truety value!
}

// this is the example of OPTUIONAL CHANING
console.log(getTotalReviewCount(book)); //->  the output 60583;
const adventurer = {
    name: "Alice",
    cat: {
        name: "Dinah",
    },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined
// if the output is undefied since we don't have a dogName

// undefined since in adventure we dont have existing method
console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined

/*
  IDEA: how is this work?
    NOTE: the purpose of this code is to avoid an error don sa code natin if you know that there still possible to check some value 
    don sa mismong object natin we can use this optional chaning para maiwasan natin masira yong code based natin 
    katulad sa example natin sa dogName as soon as na walang dogName sa object antin 
    yong dogName natin will transform into undefined so yong value na is undefined
    no if we have a guard clause that check if the value is undefined that code will execute since hind pasok don sa condition natin

    so REMEMBER ang purpose ng code nato is to avoid crash or returning unncessary error satin
 */

//REVIEW: Another Example
function printMagicIndex(arr) {
    console.log(arr?.[42]);
}
printMagicIndex([0, 1, 2, 3, 4, 5]); // undefined
printMagicIndex(); // undefined; if not using ?., this would throw an error: "Cannot read properties of undefined (reading '42')"

console.log(adventurer?.name); // This will return ALICE since may value yong  adventure name natin

// REVIEW: THE ARRAY METHODS
// IDEA: ARRAY METHOD MAP

/*
      NOTE: One thing na dapat mo ma laman about this MAP method is nag rereturn sya ng New array based don sa pinag iterate natin
      so mahalga ito malaman kasi isa to sa mga magagandang way para mamipulate mo yong data ng hindi na gagalaw yong original. 
      
      IDEA: how does map works? 
            mag loloop sya then lahat ng value na nasa loob non based don sa logic mo isa ma gagalaw and then mag rereturn sya
            ng new array, so sa way na to we will able to manipulate the data ng hindi na gagalaw yong pinaka original
     */
// NOTE: EXAMPLE
const Arraybooks = getBooks();
const newBooks = Arraybooks.map((el) => {
    return el;
});

//NOTE: this  will be a new copy of our getBooks and we can now manipulate this data without effecting the entier
//Orginal Arraybooks
newBooks;

// NOTE: another Example
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x); //NOTE: [2,4,6, 8 , 10]

// Another Example using our example object
const bookTitles = Arraybooks.map((book) => book.title);
bookTitles; // NOTE: this will return every book of title in our  object
//
const esssentialData = Arraybooks.map((book) => ({
    title: book.title,
    author: book.author,
    reviewsCount: getTotalReviewCount(book),
}));
esssentialData; // this will return the essential data based don sa sinulata mo  sa loob ng data

// IDEA: The FILTER METHOD
/*
      NOTE: what is a filter method? so basically filter method is a method na nakabased sa condition mo at kung ano yong logic mo don at
      yong value na yon is true yon lang yong i store nya  so sa madaling salita ang istore na value nya lang don sa mismong value na yon 
      is yong TRUE value so panu namn false yong value so hindi nya i sasama yon kaya sya tinawag na filter Method
     */
const longBooks = Arraybooks.filter((el) => el.pages < 500).filter((el) => el.hasMovieAdaptation);
longBooks; // NOTE: here the example this will  store the only object that less than 500 pages  so its id 2 and 4 , and remember again this will store in a new array!
// so sa madaling salita na filter out natin yong mga  object na hindi pasok sa conditions natin.
// NOTE:  since we use anotherr filter to the existing on and then we check if hasMovvie adatation yong nag iisang page less than 500 lang ang merong  moving adaptation

// Combining the Map and filter

const adventures = Arraybooks.filter((books) => books.genres.includes("adventure")).map((book) => book.title);
adventures; //NOTE: this will only return the books that have genres  na may adventure and then using the map we can iterate and return the title of the books

//IDEA: REDUCE METHOD
/*
      NOTE: if I remember reduce is one of the most powerful and  this code is design lagi sa dulo ang  ginagawa neto 
      you can perform math here to calclulate evqery page of the book and return the value only and then by using join you can 
      convert it into string 

      IDEA: why is called reduce value? 
                    NOTE: because the idea is to reduce the value into 1 value 
     */

const pagesAllBooks = Arraybooks.reduce((AcomulatorB, book) => AcomulatorB + book.pages, 0);
pagesAllBooks; // NOTE: the value will return is the 3227

/*
     NOTE: another Example
 */
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 1;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial);
// Expected output: 11
/*
  NOTE:  How Reduce  works?
  why its 11? dahil yong iniital value ng accumator natin nag start sa 1 at then we add 1 + 2 + 3 + 4 so 11
   so sa madalling salita yong accumalator nakabased don sa inital value natin usually pag mag add ka dapat 0 yan
   how this work?   1 + 0 = 1 ,  1 + 1 = 2 , 2 + 2 = 4,  4 + 3  = 7 , 7 + 4 = 11
   ganyan sya gumana yong 1 + 0 natin yong 1 don is si accumalator while yong 0 natin yong current value natin yon , then yong initial namn
   hindi nman mandatory na ilgay sa variable powede direct number 0 na jan mag babase yong value ni accumalator natin or yong starting value nya
 */

// REVIEW: LEARN SORT

const arrSort = [3, 7, 1, 9, 6];
const sorted = arrSort.sort((a, b) => a - b); // this will sort the value if we use - , if we use + this will  rever so  bigger to lower
sorted;
// if we switch ihe  a - b into b - a  the orignal array will get sorted too
arrSort; // if b - a = [9,7,6,3,1] yong magiging kalabasan.
//NOTE: why?? // !REMEMBER unlike the map filter methods yong sort natin is not actually a function method!
/*
  so yong sort natin is actually  a method that mutates the original arrSort 
  so we dont need to store it in different  variable. 

  but usually sa real world scenario we dont want to touch the original array 
  lalo na pag dating sa react isa kasi sa dapat mong malaman na si react is functional programming 
  approach sya kaya mutating the original value is not allowed!
 */
// anoth Example

const sortedByPages = Arraybooks.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;
// another example her

//REVIEW working With Immutable arrays
/*
        IDEA: SO here we will learn how to manipulate the array without mutating the original arrays
 */

const newBookHarryPotter = {
    id: 6,
    title: "Harry potter and the Chamber of Secrets",
    author: "J. K. Rowling",
};

//NOTE: so here we create another book  and then we add it  to our array object books
const bookAfterAdding = [...Arraybooks, newBookHarryPotter];
// 2) delete the book object from array

//NOTE: so here we able to delete the book without affecting the original one only we manipulate the copy
const bookAfterDelete = bookAfterAdding.filter((book) => book.id !== 3);
bookAfterDelete;

// update the book object in the array map is the best choice if we want to update the value inside the array
const bookAfterUpdate = bookAfterDelete.map((book) => (book.id === 1 ? {} : book));
bookAfterUpdate; // NOTE: here  imagine this how to update the value inside of it assume that we want to update the object book 1
// so since may id tayo na 1 this will update the book and return new array object na ang laman na ng id: 1 natin is empty object
// so again we manipualte or update the value of data without effecting the original, //! Remember mo lang na if you want to update or add something always use the MAP

const bookAfterUpdate_2 = bookAfterDelete.map((book) => (book.id === 1 ? { ...book, page: 1200 } : book));
bookAfterUpdate_2;
