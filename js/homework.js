"use strict";
 // задача 1.
let height = 10;
let length = 20;
let width = 30;

height = height * 20;
length = length * 30;
width = width * 10;

height = height + length + width;
height = height * 2;

console.log(height);

// задача 2.
let n = 37;
let sum = 0;
let number = n % 10;
let next = n - number;
let division = next / 10;
sum = division + number;

let info = `Значение n равно ${n}, сумма его цифр равна ${sum}`
console.log(info);

//  задача 3.
let a = 7;
let b = 6;

a *= 2;
a -= 8;
b **= 2;
b -= 1;
b /= 5;
console.log(a, b);
