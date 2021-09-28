
let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
}

console.log(personalMovieDB);
for ( let i = 0; i < numberOfFilms; i++) {
    let firstQuestion = prompt('Какой фильм вы посмотрели?', '');
    let secondQuestion = prompt('На сколько вы его оцените?', '');
    if((firstQuestion === null || secondQuestion === null) || (firstQuestion === "" || secondQuestion === "") || firstQuestion.length > 20) {
        --i
    }else {
        personalMovieDB.movies[firstQuestion] = secondQuestion;
    }
}
