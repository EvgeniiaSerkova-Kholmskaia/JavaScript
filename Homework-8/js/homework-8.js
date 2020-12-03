"use strict";
// Задача 1.
// Написать функцию генерации карточек с информацией о животных.
// Выглядеть должно, как на изображении в телеграмм

function getCats() {
    return [
        {
            "name": "Люся",
            "age": "1 год",
            "color": "трехцветная",
            "additional_info": {"vaccinations": true, "passport": true}
        },
        {
            "name": "Том",
            "age": "3 месяца",
            "color": "белый",
            "additional_info": {"vaccinations": false, "passport": false}
        },
        {
            "name": "Макс",
            "age": 2,
            "color": "серый",
            "additional_info": {"vaccinations": false, "passport": true}
        },
        {
            "name": "Василий",
            "age": 3,
            "color": "черный",
            "additional_info": {"vaccinations": true, "passport": true}
        }
    ];
}

function generateCatsCards(catsElem) {
  let cats = getCats();
  for (let i = 0; i < cats.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");

    let title = document.createElement("h2");
    title.classList.add("titleDiv");

    let catName = document.createElement("span");
    catName.innerText = cats[i].name.toUpperCase();

    let border = document.createElement("span");
    border.innerText = " | ";

    let catAge = document.createElement("span");
    catAge.innerText = `Возраст: ${cats[i].age}`;

    let catCharact = document.createElement("div");
    catCharact.classList.add("character");

    let imgDiv = document.createElement("div");
    imgDiv.classList.add("imageDiv");

    let img = document.createElement("img");
    img.setAttribute("src", "img/cat" + (i + 1) + ".jpg");

    let descr = document.createElement("div");
    descr.classList.add("information");

    let addInfo = document.createElement("h3");
    addInfo.innerText = "Дополнительная информация:";

    let catColor = document.createElement("p");
    catColor.innerText = `Цвет: ${cats[i].color}`;

    let catDocument = document.createElement("p");
    catDocument.innerText = `Документы: ${cats[i].additional_info.passport ? "Есть" : "Нет"}`;

    let catVacct = document.createElement("p");
    catVacct.innerText = `Прививки: ${cats[i].additional_info.vaccinations ? "Есть" : "Нет"}`;

    descr.append(addInfo, catColor, catDocument, catVacct);
    imgDiv.append(img);
    catCharact.append(imgDiv, descr);
    title.append(catName, border, catAge);
    card.append(title, catCharact);
    catsElem.append(card);
  }
}
generateCatsCards(document.querySelector(".cats"));


// Задача 2.
// Написать функцию generateTable, которая принимает на вход массив объектов и создает таблицу.
// Функция не должна быть привязаны к конкретным значениям.
// Заголовки ячеек - названия свойств.
// Например, для articles заголавками будут: id, title, text, author;
//  для goods заголавками будут: title, price, count.
 // Массивы для тестирования:
let articles = [
     {
         id: 1,
         title: "JS",
         text: "Статья про JS",
         author: "Александр"
     },
     {
         id: 2,
         title: "PHP",
         text: "Статья про PHP",
         author: "Виталий"
     },
     {
         id: 3,
         title: "Базы Данных",
         text: "Статья про Базы Данных",
         author: "Евгения"
     },
     {
         id: 4,
         title: "HTML",
         text: "Статья про HTML",
         author: "Виталий"
     }
 ];

 let goods = [
     {
         title: "Пианино",
         price: 3000,
         count: 25
     },
     {
         title: "Гитара",
         price: 1200,
         count: 40
     },
     {
         title: "Барабаны",
         price: 2700,
         count: 12
     },
     {
         title: "Флейта",
         price: 900,
         count: 50
     },
     {
         title: "Арфа",
         price: 3400,
         count: 5
     }
 ];

 // Примеры вызова функции:
 //  generateTable(articles); // генерация таблицы со статьями
 //  generateTable(goods); // генерация таблицы с товарами

function generateTable(array) {
  let table = document.createElement("table");
  let row = table.insertRow();
  for (let elem in array[0]){
    let th = document.createElement("th");
    th.innerText = elem;
    row.append(th);
  }

  for (let element of array) {
    row = table.insertRow();
    for (let value in element) {
      let cell = row.insertCell();
      cell.innerText = element[value];
    }
  }
  document.querySelector(".tableInJS").append(table);
}
generateTable(articles);
generateTable(goods);

// Задача 3. ДОПОЛНИТЕЛЬНАЯ ЗАДАЧА.
// Дан объект {
//         cat: "Кот",
//         book: "Книга",
//         car: "Машина"
//     }
//
//     Написать функцию generateField(n) по генерации игрового поля размером n x n.
//     Значение n не может быть меньше 3.
//     Для 3х ячеек поля (для выбора конкретной ячейки использовать random)
//     добавить атрибут prise. Значения атрибута prise устанавливаются из массива.
//     Для 1й ячейки значение атрибута prise="cat",
//     для 2й ячейки значение атрибута prise="book",
//     для 3й ячейки значение атрибута prise="car"

let bigPrise = {
     cat: "Кот",
     book: "Книга",
     car: "Машина"
   };

function generateField(n) {
  if (n < 3 || n > 30) return;

    let container = document.createElement("div");
    container.style.width = '40vw';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    let size = 40/n; //'vw'
    for (let i = 0; i < n * n; i++) {
        let innerDiv = document.createElement("div");
        innerDiv.style.border = '2px solid coral';
        innerDiv.style.width = innerDiv.style.height = size + 'vw';
        container.append(innerDiv);

    }

    document.getElementById("game-field").append(container);

    let priseArr = Object.keys(bigPrise);
    while (priseArr.length > 0) {
      document.getElementById(`${Math.floor(Math.random() * (n*n))}`).setAttribute("prise", prise);
  
    }

}
generateField(5);

// проблемы с setAttribute (Cannot read property setAttribute of null), пока не знаю, как их решить. Чужой код работает, у себя ошибку найти не могу
