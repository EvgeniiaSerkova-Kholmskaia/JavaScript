"use strict";

// 1. Задача
//  Напишите функцию, которая в зависимости от переданного в нее целочисленного
// аргумента count, будет возвращать слово "товар" в нужно форме
// ("12 товаров", но "22 товара", "1 товар", "97 товаров" и тд).

function products(count) {
  let productsNumber = `${count} товар`;
  if (count < 0 || !Number.isInteger(count)) return false;
  if (count %10 === 1) return productsNumber;
  if (1 < count %10 && count %10 < 5) return productsNumber + "a";
  if (count %10 === 0 || count %10 >= 5) return productsNumber + "ов";
}
console.log(products(67));

// 2. Задача
// Напишите функцию range, принимающую три аргумента:
// два обязательных: начало и конец диапазона,
// третий аргумент - необязательный (если он не передан, то равен единице) –
// шаг для построения массива.

// Функция возвращает массив, который содержит все числа из диапазона,
// включая начальное и конечное.
// Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9]

function range(primary, final, step=1) {
  let massive = [];
  for (let i = primary; i <= final; i += step) {
    massive.push(i);
  }
  return  massive;
}
console.log(range(2, 22, 4));

// 3. Задача
// Дано целое положительное число N. Вычислите сумму его цифр, используя рекурсию
// (строки, массивы и циклы использовать запрещено).

function sumOfDigits(num) {
  if (num <= 0) return 0;
  return num %10 + sumOfDigits((num - num %10) / 10);
}
console.log(sumOfDigits(713));
