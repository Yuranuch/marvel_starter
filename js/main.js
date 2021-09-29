

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

// function first (text, second) {
//     console.log(`${text} Hello`);
//     second()
//
// }
// function second () {
//     console.log('Yura')
// }
// first('O,',second);


let numberOfFilms;
let personalMovieDB = {
    count: numberOfFilms,
    status: null,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
        while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms) ){
            numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
        }
    },
    rememberMyFilms: function  () {
        for ( let i = 0; i < numberOfFilms; i++) {
            let firstQuestion = prompt('Какой фильм вы посмотрели?', '');
            let secondQuestion = prompt('На сколько вы его оцените?', '');
            if((firstQuestion === null || secondQuestion === null) || (firstQuestion === "" || secondQuestion === "") || firstQuestion.length > 20) {
                --i
            }else {
                personalMovieDB.movies[firstQuestion] = secondQuestion;
             }
        }
    },
    confirmLevel: function  () {
        if(numberOfFilms <= 3) {
            personalMovieDB.status = 'beginer'
        }
        else if (numberOfFilms >= 4 && numberOfFilms <= 7 ){
            personalMovieDB.status = 'middle'
        }
        else {
            personalMovieDB.status = 'veteran'
        }
    },
    writeYourGenres: function  () {
        for (let i = 1; i <= 3; i++){
            let ganresQuestion = prompt(`Ваш любимый жанр номер - ${i}`);
            if( ganresQuestion == "" || ganresQuestion == null ) {
            i--
            }else {
                personalMovieDB.genres[i - 1] = ganresQuestion;
            }
        }
    },
    showMyBd: function  (hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
        else {
            console.log('It is Private Object!!!')
        }
    },
    toggleVisibleMyDB: function (){
            if(personalMovieDB.privat  === false) {
                personalMovieDB.privat  = true
                console.log(personalMovieDB.privat)
                return personalMovieDB.privat
            }else {
                personalMovieDB.privat  = false
                console.log(personalMovieDB.privat)
            }
    },
};
personalMovieDB.start()
personalMovieDB.rememberMyFilms();
personalMovieDB.confirmLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyBd(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();
console.log(personalMovieDB.privat)


