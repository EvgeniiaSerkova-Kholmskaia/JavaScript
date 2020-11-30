"use strict";

//  1. Задача Написать функцию getGoodsByPrice.
// Функция принимает на вход: from, to и obj:
//     * from, to - числа, если переданы не числа, необходимо прервать работу функции;
//     * obj - объект.
//  Функция возвращает новый объект с товарами из obj,
// стоимость которых находится в диапазоне (from;  to]

let goods = {
        piano: {
            title: "Пианино",
            price: 3000,
            count: 25
        },
        guitar: {
            title: "Гитара",
            price: 1200,
            count: 40
        },
        drum: {
            title: "Барабаны",
            price: 2700,
            count: 12
        },
        flute: {
            title: "Флейта",
            price: 900,
            count: 50
        },
        harp: {
            title: "Арфа",
            price: 3400,
            count: 5
        }
    };

function getGoodsByPrice(from, to, obj) {
    if (!Number.isInteger(from) && !Number.isInteger(to)) return;
    let newObj = {};
    for (let elem in obj) {
        if (obj[elem].price > from && obj[elem].price <= to) {
          newObj[elem] = obj[elem];
        };
    }
    return newObj;
}
console.log(getGoodsByPrice(1200, 3000, goods));

// 2. Задача Написать функцию getByTitle.
// Функция принимает на вход: title, countToCart и obj:
//     * title - название товара, который хочет купить пользователь;
//     * countToCart - количество товара, который хочет приобрести пользователь;
//     * obj - объект.
//
// Необходимо найти товар с названием (title):
//     если количество позволяет, то уменьшить количество товара в объекте obj на countToCart,
//     вывести в консоль информацию, что данного товара достаточно на складе,
//     если не позволяет, то вывести информацию об этом в консоль.
// Если товар с названием (title) не был найден вывести сообщение об этом в консоль
//
// Функция ничего не возвращает.

goods = {
        piano: {
            title: "Пианино",
            price: 3000,
            count: 25
        },
        guitar: {
            title: "Гитара",
            price: 1200,
            count: 40
        },
        drum: {
            title: "Барабаны",
            price: 2700,
            count: 12
        },
        flute: {
            title: "Флейта",
            price: 900,
            count: 50
        },
        harp: {
            title: "Арфа",
            price: 3400,
            count: 5
        }
    };

function getByTitle(title, countToCart, obj) {
  for (let elem in obj) {
    if (title === obj[elem].title) {
      if (obj[elem].count > countToCart ) {
        console.log("На складе достаточно данного товара");
        obj[elem].count -= countToCart;
      } else {
        console.log("Товара на складе недостаточно");
      }
      return;
    }
  }
  console.log("Товар не был найден");
}

getByTitle("Барабаны", 30, goods);
getByTitle("Гитара", 1, goods);
getByTitle("Трамбон", 45, goods);


// 3. Написать функцию getBooks.
// Функция принимает на вход: автора и массив:
// Функция возвращает новый массив с книгами , в который войдут все книги указанного автора,
// если такого автора нет, вернуть пустой массив.

let books = [
     { author: 'Пушкин', title: 'Пир во время чумы', pageCount: 5},
     { author: 'Гоголь', title: 'Мертвые души', pageCount: 470},
     { author: 'Лермонтов', title: 'Тамань', pageCount: 190},
     { author: 'Гончаров', title: 'Обломов', pageCount: 610},
     { author: 'Лермонтов', title: 'Герой Нашего Времени', pageCount: 191},
     { author: 'Пушкин', title: 'Руслан и Людмила', pageCount: 50},
     { author: 'Лермонтов', title: 'Бородино', pageCount: 2},
 ];

function getBooks(name, arr) {
  return arr.filter(newBook => name === newBook.author);
}
console.log(getBooks("Лермонтов", books));

// 4. Написать функцию sortByParam. Задача на метод 'sort' массива.
// Функция принимает на вход имя свойства и массив объектов.
// Функция сортирует объекты в массиве в порядке возрастания по указанному свойству.

books = [
     { author: 'Пушкин', title: 'Пир во время чумы', pageCount: 5},
     { author: 'Гоголь', title: 'Мертвые души', pageCount: 470},
     { author: 'Лермонтов', title: 'Тамань', pageCount: 190},
     { author: 'Гончаров', title: 'Обломов', pageCount: 610},
     { author: 'Лермонтов', title: 'Герой Нашего Времени', pageCount: 191},
     { author: 'Пушкин', title: 'Руслан и Людмила', pageCount: 50},
     { author: 'Лермонтов', title: 'Бородино', pageCount: 2},
 ];

function sortByParam(prop, arr) {
  let sortNum = (first, second) => first[prop] - second[prop];
  if (prop === "pageCount") return arr.sort(sortNum);
  let sortArr = (first, second) => first[prop].localeCompare(second[prop]);
  return  arr.sort(sortArr);
}
console.log(sortByParam("title", books));
console.log(sortByParam("pageCount", books));
