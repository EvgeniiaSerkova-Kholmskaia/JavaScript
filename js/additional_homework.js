"use strict";

// 1. Задача
// На методы массивов
// Дан массив:
//  let numsArr = [
//      [3, 5, -1, 6, 0],
//      [56, -9, 111, 6],
//      [11, 86, -12],
//  ];
//
//  1. Увеличить кажый элемент массива на 10
//  2. Создать массив, в который войдут положительные элементы numsArr

let numsArr = [
     [3, 5, -1, 6, 0],
     [56, -9, 111, 6],
     [11, 86, -12],
 ];

let plusTen = (elem, index, arr) => {
  let plus = (elem, index, arr) => arr[index] += 10;
  arr[index].forEach(plus);
};
numsArr.forEach(plusTen);
console.log(numsArr);

let positive = (elem, index, arr) => arr[index].filter(n => n > 0);
let positiveNums = numsArr.map(positive);
console.log(positiveNums);

// 2. Задача
// Написать функцию проверки на спам.
// Функция принимает на вход текст и ...спам - слова (переменное количество аргументов).
// Определить по 5ти бальной шкале, как часто в тексте встречается спам.
// Результат вернуть из функции.

// Пока что не очень сообразила, как ее решить


// 3. Задача
// Написать функцию, которая принимает на вход массив фукций и число, обрабатывает
// число каждой функцией и возвращает true, если число прошло проверку всеми функциями
// и false, если нет
// Функции для проверки:
//  let more18 = возвращает true, если переданный аргумент больше 18
//  let less30 = возвращает true, если переданный аргумент меньше 30
//  let arr = [more18, less30];
//
// Число для проверки:
//  let age = Math.floor(Math.random() * 100);

let more18 = n => n > 18;
let less30 = n => n < 30;
let arr = [more18, less30];
let age = Math.floor(Math.random() *100);

let functionNum = (array, n) => array.every(arrayFunc => arrayFunc(n));

console.log(`Число: ${age}, проверка: ${functionNum(arr, age)}`);
