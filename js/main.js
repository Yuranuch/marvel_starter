//
// let numberOfFilms;
// function start () {
//     numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
//     while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms) ){
//         numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
//     }
//
// }
// start()
//
// let personalMovieDB = {
//     count: numberOfFilms,
//     status: null,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// }
//
// function rememberMyFilms () {
//     for ( let i = 0; i < numberOfFilms; i++) {
//         let firstQuestion = prompt('Какой фильм вы посмотрели?', '');
//         let secondQuestion = prompt('На сколько вы его оцените?', '');
//         if((firstQuestion === null || secondQuestion === null) || (firstQuestion === "" || secondQuestion === "") || firstQuestion.length > 20) {
//             --i
//         }else {
//             personalMovieDB.movies[firstQuestion] = secondQuestion;
//         }
//     }
// }
// rememberMyFilms();
//
// function confirmLevel () {
//     if(numberOfFilms <= 3) {
//         personalMovieDB.status = 'beginer'
//     }
//     else if (numberOfFilms >= 4 && numberOfFilms <= 7 ){
//         personalMovieDB.status = 'middle'
//     }
//     else {
//         personalMovieDB.status = 'veteran'
//     }
// }
// confirmLevel();
// function writeYourGenres () {
//     for (let i = 1; i <= 3; i++){
//         let ganresQuestion = prompt(`Ваш любимый жанр номер - ${i}`);
//         personalMovieDB.genres[i - 1] = ganresQuestion;
//     }
// }
// writeYourGenres();
//
// function showMyBd (hidden) {
//     if(!hidden) {
//         console.log(personalMovieDB);
//     }
//     else {
//         console.log('It is Private Object!!!')
//     }
// }
// showMyBd(personalMovieDB.privat)

// function first (text, second) {
//     console.log(`${text} Hello`);
//     second()
//
// }
// function second () {
//     console.log('Yura')
// }
// first('O,',second);

// let options = {
//     name: 'Yura',
//     width: 1024,
//     height: 1024,
//     colors: {
//         bg: 'red',
//         border: 'black'
//     }
// }
//
// for (let key in options) {
//     if(options[key] === 'object') {
//         for (let i in options[key]) {
//             console.log(`${i} внутреннее свойство, внутреннее значение ${options[key][i]}`);
//         }
//     }else {
//         console.log(`${key} это свойство, а это значение ${options[key]} `)
//     }
//
// }
