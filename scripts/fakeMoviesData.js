const genre = [
  { id: "0A", name: "Action" },
  { id: "1B", name: "Drama" },
  { id: "2C", name: "Fantasy" },
  { id: "3D", name: "Animation" },
  { id: "4E", name: "Comedy" },
  { id: "5F", name: "Romancy" },
  { id: "6G", name: "Sci-Fi" },
];
let movies = [];


































































































































//const movies = [
//  {
//    id: 0,
//    movieName: "Spider Man",
//    movieGenre: ["Action", "Sci-Fi"],
//    stock: 926,
//    rate: 7.25,
//    releaseDate: 20061023,
//    movieLength: 156,
//    creators: { director: "mahdi ghaffari", author: "alireza mirzaei" },
//    images: [
//      "./data/images/movies/spiderman/01.jpg",
//      "./data/images/movies/spiderman/02.jpg",
//      "./data/images/movies/spiderman/03.jpg",
//      "./data/images/movies/spiderman/04.jpg",
//      "./data/images/movies/spiderman/05.jpg",
//    ],
//    price: 30,
//    likes: 154786,
//    discribe: "spiderman discribtion",
//  },
//  {
//    id: 1,
//    movieName: "Aladdin",
//    movieGenre: ["Fantasy", "Commedy", "Romancy"],
//    stock: 352,
//    rate: 5.12,
//    releaseDate: 20160125,
//    movieLength: 205,
//    creators: { director: "mahdi ghaffari", author: "alireza mirzaei" },
//    images: [
//      "./data/images/movies/Aladdin/01.jpg",
//      "./data/images/movies/Aladdin/02.jpg",
//      "./data/images/movies/Aladdin/03.jpg",
//      "./data/images/movies/Aladdin/04.jpg",
//      "./data/images/movies/Aladdin/05.jpg",
//    ],
//    price: 23,
//    likes: 11578,
//    discribe: "Aladdin discribtion",
//  },
//  {
//    id: 2,
//    movieName: "Aquaman",
//    movieGenre: ["Action", "Fantasy", "Sci-Fi"],
//    stock: 503,
//    rate: 2.5,
//    releaseDate: 20211013,
//    movieLength: 156,
//    creators: { director: "mahdi ghaffari", author: "alireza mirzaei" },
//    images: [
//      "./data/images/movies/aquaman/01.jpg",
//      "./data/images/movies/aquaman/02.jpg",
//      "./data/images/movies/aquaman/03.jpg",
//      "./data/images/movies/aquaman/04.jpg",
//      "./data/images/movies/aquaman/05.jpg",
//    ],
//    price: 87,
//    likes: 15546,
//    discribe: "Aquaman discribtion",
//  },
//  {
//    id: 3,
//    movieName: "Barbei",
//    movieGenre: ["Fantasy", "Commedy"],
//    stock: 0,
//    rate: 0.5,
//    releaseDate: 20110523,
//    movieLength: 96,
//    creators: { director: "mahdi ghaffari", author: "alireza mirzaei" },
//    images: [
//      "./data/images/movies/barbie/01.jpg",
//      "./data/images/movies/barbie/02.jpg",
//      "./data/images/movies/barbie/03.jpg",
//      "./data/images/movies/barbie/04.jpg",
//      "./data/images/movies/barbie/05.jpg",
//    ],
//    price: 51,
//    likes: 100786,
//    discribe: "Barbie discribtion",
//  },
//  {
//    id: 4,
//    movieName: "Charli Chaplin",
//    movieGenre: ["Commedy"],
//    stock: 0,
//    rate: 9.5,
//    releaseDate: 20050318,
//    movieLength: 253,
//    creators: { director: "vida azadi", author: "mohsen esfandiyari" },
//    images: [
//      "./data/images/movies/charlychplin/01.jpg",
//      "./data/images/movies/charlychplin/02.jpg",
//      "./data/images/movies/charlychplin/03.jpg",
//      "./data/images/movies/charlychplin/04.jpg",
//      "./data/images/movies/charlychplin/05.jpg",
//    ],
//    price: 100,
//    likes: 1547790,
//    discribe: "Charli Chaplin discribtion",
//  },
//  {
//    id: 5,
//    movieName: "Chicken Run Dawn of the Nugget",
//    movieGenre: ["Animation", "Commedy"],
//    stock: 693,
//    rate: 8.3,
//    releaseDate: 19990901,
//    movieLength: 106,
//    creators: { director: "mahdi ghaffari", author: "alireza mirzaei" },
//    images: [
//      "./data/images/movies/Chicken/01.jpg",
//      "./data/images/movies/Chicken/02.jpg",
//      "./data/images/movies/Chicken/03.jpg",
//      "./data/images/movies/Chicken/04.jpg",
//      "./data/images/movies/Chicken/05.jpg",
//    ],
//    price: 95,
//    likes: 1540,
//    discribe: "Chicken Run Dawn of the Nugget discribtion",
//  },
//  {
//    id: 6,
//    movieName: "Detachment Man",
//    movieGenre: ["Drama"],
//    stock: 439,
//    rate: 6.9,
//    releaseDate: 20131023,
//    movieLength: 176,
//    creators: { director: "mahdi ghaffari", author: "alireza mirzaei" },
//    images: [
//      "./data/images/movies/Detachment/01.jpg",
//      "./data/images/movies/Detachment/02.jpg",
//      "./data/images/movies/Detachment/03.jpg",
//      "./data/images/movies/Detachment/04.jpg",
//      "./data/images/movies/Detachment/05.jpg",
//    ],
//    price: 63,
//    likes: 1586,
//    discribe: "Detachment discribtion",
//  },
//  {
//    id: 7,
//    movieName: "equalizer",
//    movieGenre: ["Action"],
//    stock: 0,
//    rate: 3.4,
//    releaseDate: 20230414,
//    movieLength: 136,
//    creators: { director: "mahdi ghaffari", author: "alireza mirzaei" },
//    images: [
//      "./data/images/movies/equalizer1/01.jpg",
//      "./data/images/movies/equalizer1/02.jpg",
//      "./data/images/movies/equalizer1/03.jpg",
//      "./data/images/movies/equalizer1/04.jpg",
//      "./data/images/movies/equalizer1/05.jpg",
//    ],
//    price: 100,
//    likes: 154111,
//    discribe: "equalizer discribtion",
//  },
//  {
//    id: 8,
//    movieName: "fastandfurious",
//    movieGenre: ["Action"],
//    stock: 26,
//    rate: 9.5,
//    releaseDate: 20010817,
//    movieLength: 151,
//    creators: { director: "mahdi ghaffari", author: "alireza mirzaei" },
//    images: [
//      "./data/images/movies/fastandfurious/01.jpg",
//      "./data/images/movies/fastandfurious/02.jpg",
//      "./data/images/movies/fastandfurious/03.jpg",
//      "./data/images/movies/fastandfurious/04.jpg",
//      "./data/images/movies/fastandfurious/05.jpg",
//    ],
//    price: 23,
//    likes: 186,
//    discribe: "fastandfurious discribtion",
//  },
//  {
//    id: 9,
//    movieName: "home alone",
//    movieGenre: ["Fantasy", "Commedy"],
//    stock: 790,
//    rate: 7.9,
//    releaseDate: 20160510,
//    movieLength: 93,
//    creators: { director: "mahdi ghaffari", author: "alireza mirzaei" },
//    images: [
//      "./data/images/movies/homeAlone/01.jpg",
//      "./data/images/movies/homeAlone/02.jpg",
//      "./data/images/movies/homeAlone/03.jpg",
//      "./data/images/movies/homeAlone/04.jpg",
//      "./data/images/movies/homeAlone/05.jpg",
//    ],
//    price: 10,
//    likes: 154786,
//    discribe: "home alone discribtion",
//  },
//  {
//    id: 10,
//    movieName: "Ice Of Age",
//    movieGenre: ["Fantasy", "Animation", "Commedy"],
//    stock: 0,
//    rate: 9.8,
//    releaseDate: 20010631,
//    movieLength: 112,
//    creators: { director: "mahdi ghaffari", author: "alireza mirzaei" },
//    images: [
//      "./data/images/movies/iceofage1/01.jpg",
//      "./data/images/movies/iceofage1/02.jpg",
//      "./data/images/movies/iceofage1/03.jpg",
//      "./data/images/movies/iceofage1/04.jpg",
//      "./data/images/movies/iceofage1/05.jpg",
//    ],
//    price: 70,
//    likes: 15479,
//    discribe: "Ice Of Age  discribtion",
//  },
//  {
//    id: 11,
//    movieName: "I Lost My Body",
//    movieGenre: ["Drama", "Fantasy", "Animation", "Romancy"],
//    stock: 862,
//    rate: 5.1,
//    releaseDate: 20170409,
//    movieLength: 136,
//    creators: { director: "mahdi ghaffari", author: "alireza mirzaei" },
//    images: [
//      "./data/images/movies/ilostmybody/01.jpg",
//      "./data/images/movies/ilostmybody/02.jpg",
//      "./data/images/movies/ilostmybody/03.jpg",
//      "./data/images/movies/ilostmybody/04.jpg",
//      "./data/images/movies/ilostmybody/05.jpg",
//    ],
//    price: 42,
//    likes: 954786,
//    discribe: "I Lost My Body discribtion",
//  },
//  {
//    id: 12,
//    movieName: "John Wick",
//    movieGenre: ["Action", "Fantasy"],
//    stock: 926,
//    rate: 9.3,
//    releaseDate: 20230127,
//    movieLength: 184,
//    creators: { director: "mahdi ghaffari", author: "alireza mirzaei" },
//    images: [
//      "./data/images/movies/John.Wick/01.jpg",
//      "./data/images/movies/John.Wick/02.jpg",
//      "./data/images/movies/John.Wick/03.jpg",
//      "./data/images/movies/John.Wick/04.jpg",
//      "./data/images/movies/John.Wick/05.jpg",
//    ],
//    price: 6,
//    likes: 654786,
//    discribe: "John Wick discribtion",
//  },
//  {
//    id: 13,
//    movieName: "Pianist",
//    movieGenre: ["Drama"],
//    stock: 301,
//    rate: 4.8,
//    releaseDate: 20010505,
//    movieLength: 100,
//    creators: { director: "mahdi ghaffari", author: "alireza mirzaei" },
//    images: [
//      "./data/images/movies/pianist/01.jpg",
//      "./data/images/movies/pianist/01.jpg",
//      "./data/images/movies/pianist/01.jpg",
//      "./data/images/movies/pianist/01.jpg",
//      "./data/images/movies/pianist/01.jpg",
//    ],
//    price: 87,
//    likes: 784786,
//    discribe: "Pianist discribtion",
//  },
//  {
//    id: 14,
//    movieName: "Shrek 1 ",
//    movieGenre: ["Fantasy", "Animation", "Commedy"],
//    stock: 0,
//    rate: 10,
//    releaseDate: 20020415,
//    movieLength: 98,
//    creators: { director: "mahdi ghaffari", author: "alireza mirzaei" },
//    images: [
//      "./data/images/movies/shrek1/01.jpg",
//      "./data/images/movies/shrek1/02.jpg",
//      "./data/images/movies/shrek1/03.jpg",
//      "./data/images/movies/shrek1/04.jpg",
//      "./data/images/movies/shrek1/05.jpg",
//    ],
//    price: 14,
//    likes: 1154786,
//    discribe: "Shrek 1  discribtion",
//  },
//  {
//    id: 15,
//    movieName: "Super Man",
//    movieGenre: ["Action", "Fantasy", "Sci-Fi"],
//    stock: 50,
//    rate: 3.5,
//    releaseDate: 20171023,
//    movieLength: 163,
//    creators: { director: "mahdi ghaffari", author: "alireza mirzaei" },
//    images: [
//      "./data/images/movies/superman/01.jpg",
//      "./data/images/movies/superman/01.jpg",
//      "./data/images/movies/superman/01.jpg",
//      "./data/images/movies/superman/01.jpg",
//      "./data/images/movies/superman/01.jpg",
//    ],
//    price: 92,
//    likes: 154786,
//    discribe: "Super Man discribtion",
//  },
//  {
//    id: 16,
//    movieName: "Terminator",
//    movieGenre: ["Action", "Fantasy", "Sci-Fi"],
//    stock: 269,
//    rate: 6.8,
//    releaseDate: 20040105,
//    movieLength: 119,
//    creators: { director: "mahdi ghaffari", author: "alireza mirzaei" },
//    images: [
//      "./data/images/movies/terminator/01.jpg",
//      "./data/images/movies/terminator/02.jpg",
//      "./data/images/movies/terminator/03.jpg",
//      "./data/images/movies/terminator/04.jpg",
//      "./data/images/movies/terminator/05.jpg",
//    ],
//    price: 16,
//    likes: 4454786,
//    discribe: "Terminator discribtion",
//  },
//  {
//    id: 17,
//    movieName: "The Curious Case of Benjamin Button",
//    movieGenre: ["Drama", "Fantasy", "Romancy", "Sci-Fi"],
//    stock: 333,
//    rate: 8.1,
//    releaseDate: 20080923,
//    movieLength: 202,
//    creators: { director: "mahdi ghaffari", author: "alireza mirzaei" },
//    images: [
//      "./data/images/movies/TheCuriousCaseOfBenjaminButton/01.jpg",
//      "./data/images/movies/TheCuriousCaseOfBenjaminButton/01.jpg",
//      "./data/images/movies/TheCuriousCaseOfBenjaminButton/01.jpg",
//      "./data/images/movies/TheCuriousCaseOfBenjaminButton/01.jpg",
//      "./data/images/movies/TheCuriousCaseOfBenjaminButton/01.jpg",
//    ],
//    price: 45,
//    likes: 154786,
//    discribe: "The Curious Case of Benjamin Button",
//  },
//  {
//    id: 18,
//    movieName: "The Shawshank",
//    movieGenre: ["Drama", "Fantasy"],
//    stock: 10,
//    rate: 9.9,
//    releaseDate: 20111207,
//    movieLength: 137,
//    creators: { director: "mahdi ghaffari", author: "alireza mirzaei" },
//    images: [
//      "./data/images/movies/TheShawshank/01.jpg",
//      "./data/images/movies/TheShawshank/02.jpg",
//      "./data/images/movies/TheShawshank/03.jpg",
//      "./data/images/movies/TheShawshank/04.jpg",
//      "./data/images/movies/TheShawshank/05.jpg",
//    ],
//    price: 58,
//    likes: 324786,
//    discribe: "The Shawshank discribtion",
//  },
//  {
//    id: 19,
//    movieName: "Titanic",
//    movieGenre: ["Drama", "Fantasy", "Romancy"],
//    stock: 500,
//    rate: 7.24,
//    releaseDate: 20121123,
//    movieLength: 236,
//    creators: { director: "mahdi ghaffari", author: "alireza mirzaei" },
//    images: [
//      "./data/images/movies/titanic/01.jpg",
//      "./data/images/movies/titanic/01.jpg",
//      "./data/images/movies/titanic/01.jpg",
//      "./data/images/movies/titanic/01.jpg",
//      "./data/images/movies/titanic/01.jpg",
//    ],
//    price: 68,
//    likes: 224786,
//    discribe: "",
//  },
//];
