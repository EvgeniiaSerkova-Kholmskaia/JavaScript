"use strict";

let commentsForm = document.forms.commentsForm;

commentsForm.addEventListener("submit", addComment);
function addComment(event) {
  event.preventDefault();

    let date = new Date();
    let day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear(),
        hours = date.getHours(),
        minutes = date.getMinutes();

  let comment = document.getElementById("comments");
  let commentsDiv = document.createElement("div");
  commentsDiv.classList.add("sameComm");
  let autCom = document.createElement("div");
  autCom.classList.add("dateFlex")

  let authorName = document.createElement("span");
  authorName.innerText = this.elements.author.value;
  let comm = document.createElement("p")
  comm.innerText = this.elements.comment.value;

  commentsDiv.innerHTML = `
      <div class="date">
        <p>${day}.${month}.${year} ${hours}:${minutes}</p>
      </div>
      `;

  autCom.append(authorName, comm)
  commentsDiv.append(autCom);
  comment.append(commentsDiv);
}
