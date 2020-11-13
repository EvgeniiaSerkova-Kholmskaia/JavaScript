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
let n = 67;
let number = n % 10;
let division = (n - number) / 10;
let sum = division + number;
let info = `Значение n равно ${n}, сумма его цифр равна ${sum}`
console.log(info);

//  задача 3.

let a = 31
let b = 9;

// a *= 2;
// a -= 8;
// b **= 2;
// b -= 1;
// b /= 5;
// console.log(a, b);

a = b + a;
b = a - b;
a = a - b;
console.log(a, b);
