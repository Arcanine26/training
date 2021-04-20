"use strict";
// 1
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
// 2
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// 3, 5, 6
// Cycle For
// for (let i = 0; i < 2; i++ ) {
//     const lastWatch = prompt("Один из последних просмотренных фильмов?", "");
//     const raiting = prompt("На сколько оцените его?", "");
//     if (lastWatch != "" && lastWatch != null && raiting != "" && raiting != null && lastWatch.length <= 50){
//         personalMovieDB.movies[lastWatch] = raiting;
//         console.log('Done!');
//     } else {
//         alert('Error!');
//         i--;
//     }
// }

// Cycle While
let i = 0;
// while ( i < 2 ){
//     const lastWatch = prompt("Один из последних просмотренных фильмов?", "");
//     const raiting = prompt("На сколько вы его оцените?", "");
//     i++;
//     if (lastWatch != "" && lastWatch != null && raiting != "" && raiting != null && lastWatch.length <= 50){
//         personalMovieDB.movies[lastWatch] = raiting;
//         console.log("Done");
//     } else {
//         alert("Error!");
//         i--;
//     }
// }

// Cycle do...while
do {
    const lastWatch = prompt("Один из последних просмотренных фильмов?", "");
    const raiting = prompt("На сколько вы его оцените?", "");
    i++;
    if (lastWatch != "" && lastWatch != null && raiting != "" && raiting != null && lastWatch.length <= 50) {
        personalMovieDB.movies[lastWatch] = raiting;
        console.log("Doneeee");
    } else {
        alert("Error shit");
        i--;
    }
}
while (i<2);

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов!");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель!");
} else if (personalMovieDB.count > 30) {
    console.log("Вы - киноман!");
} else {
    console.log("Произошла ошибка!");
}

console.log(personalMovieDB);