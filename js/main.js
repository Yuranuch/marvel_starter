
let numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
}

let firstQuestion = prompt('Какой фильм вы посмотрели?', '');
let secondQuestion = prompt('На сколько вы его оцените?', '');

personalMovieDB.movies[firstQuestion] = secondQuestion;
console.log(personalMovieDB);