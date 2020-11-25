"use strict";

// 1. Задача
// Найти количество вхождений одной строки в другую.
// Например, строка "дом" встречается в строке "дом домик домой одомашненный" 4 раза

let stringOne = "ток токарь стоковый исток слиток листок";
let str = "ток";
let count = 0;
let foundCount = stringOne.indexOf(str);
while (foundCount !== -1) {
  foundCount = stringOne.indexOf(str, (foundCount + 1));
  count++;
}
console.log(count);

// 2. Задача
// Проверить строку на палиндром. Палиндром — это число, буквосочетание, слово или текст,
// которые одинаково читаются по буквам или по словам как слева направо, так и справа налево.
// Например, 202 - палиндром / fafaf - палиндром / а роза упала на лапу Азора - палиндром

let palindrom = "на вид енот это не диван";
let arrFromPalindrom = palindrom.split(" ").join("");
let arrFromPalindrom2 = arrFromPalindrom.split("").reverse().join("");
if (arrFromPalindrom === arrFromPalindrom2) {
  console.log("Палиндром");
} else {
  console.log("Не палиндром");
}

// 3. Задача
// Заменить все буквы в слове на строчные, а первую букву на заглавную. Например,
// дано hello, получаем Hello / дано HeLLO, получаем Hello

let word = "bOnJoUr";
let word2 = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
console.log(word2);

// 4. Задача
// Найдите самое длинное слово в предложении, при условии, что в предложении
// все слова разной длины. Например, в "в предложении все слова разной длины"
//  самое длинное слово "предложении"

let sentence = "Its a very interesting sentence";
let arrFromSentence = sentence.split(" ");
let maxWord = "";

for (let i = 0; i < arrFromSentence.length; i++) {
  if (arrFromSentence[i].length > maxWord.length) {
    maxWord = arrFromSentence[i];
  }
}
console.log(maxWord);
