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
// 3
const lastWatch1 = prompt("Один из последних просмотренных фильмов?", ""),
    raiting1 = prompt("На сколько оцените его?", ""),
    lastWatch2 = prompt("Один из последних просмотренных фильмов?", ""),
    raiting2 = prompt("На сколько оцените его?", "");
// 4
personalMovieDB.movies[lastWatch1] = raiting1;
personalMovieDB.movies[lastWatch2] = raiting2;
console.log(personalMovieDB);