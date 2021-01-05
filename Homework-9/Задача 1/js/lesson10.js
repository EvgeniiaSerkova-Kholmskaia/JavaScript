'use strict';

let titleElems = document.querySelectorAll(".article p:first-child");

for (let elem of titleElems) {

  elem.addEventListener("click", openDescription);

}

// Задача 1.
// Необходимо изменить функцию openDescription из lesson10.js так, чтобы при
// нажатии на 'p' связанная с ним информация открывалась, а информация, связанная
// с остальными 'p' скрывалась. Повторное нажатие на 'p' приводит к скрытию связанной
// с ним информации.

function openDescription() {
  this.nextElementSibling.classList.toggle("open");

  for (let element of this.parentElement.parentElement.children) {
    if (element.lastElementChild !== this.nextElementSibling) {
      element.lastElementChild.classList.remove("open");
    };
  };

}


let getPresent = () => {
  return {
    car: "Машина",
    dog: "Собака",
    book: "Книга"
  };
};

let presentContainer = document.getElementById("present_container");
presentContainer.addEventListener("click", showPresent);

function showPresent(event) {
  console.log("Информация о событии", event);
  let clickElem = event.target;
  let presentValue = clickElem.dataset.present;
  if (presentValue) {
    let presents = getPresent();
    clickElem.innerText = presents[presentValue];
    clickElem.classList.add("present");
    this.removeEventListener("click", showPresent);
  }
}


window.addEventListener("scroll", fixedMenu);
let fixedBlock = document.getElementById("fixed");
let fixedBlockOffsetTop = fixedBlock.getBoundingClientRect().top;
function fixedMenu() {
  if(window.pageYOffset > fixedBlockOffsetTop) {
    fixedBlock.classList.add("fixed");
  } else {
    fixedBlock.classList.remove("fixed");
  }
}
