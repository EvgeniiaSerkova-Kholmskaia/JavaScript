'use strict';

// Задача 4 - в конце документа

let form = document.forms.lesson;
console.log(form);

let loginInput = form.elements.login;
console.log(loginInput);
console.log(loginInput.value);
loginInput.value = "qwe";

let passwordInput = form.elements.pwd;
console.log(passwordInput);
console.log(passwordInput.value);
passwordInput.value = "uytr765";

let colorRadios = form.elements.color;
console.log(colorRadios);

for (let radio of colorRadios) {
  radio.addEventListener("focus", changeColor);
}

function changeColor() {
  form.elements.checkbox_fieldset.style.background = this.value;
}

let langArr = form.elements["lang[]"];
for (let lang of langArr) {
  if (lang.checked) console.log(lang.value);
}

let countries = form.elements.countries;
console.log(countries);

for (let elem of countries) {
  if (elem.selected) console.log(elem.value);
}

form.addEventListener("submit", takeForm);
function takeForm(event) {
  event.preventDefault();
  console.log("takeForm");
  console.log("логин:" + this.elements.login.value);
  console.log("пароль:" + this.elements.login.value);
  let formData = new FormData(this);
  formData.append("newKey", "newValue");
  console.log(formData.get("login"));
  console.log(formData.get("newKey"));
  console.log(formData.getAll("lang[]"));
}

// -----------------------------------------------------------------------------
// Дан чекбокс и текстовый инпут (см. файл form-events.js). Если флажок на чекбоксе
//  установлен, то поле доступно для редактирования, если снят, то то поле нельзя редиктировать.

let textopen = form.elements.textopen;
textopen.addEventListener("change", openText);
function openText (){
  if (textopen.checked){
    document.getElementById("textBox").removeAttribute("disabled");
  } else {
    document.getElementById("textBox").setAttribute("disabled", "true");
  }
}
