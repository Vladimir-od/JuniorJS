"use strict";
let btn = document.querySelector("button");
let container = document.getElementById("container");
btn.addEventListener("click", fetchData);
function contactTemplate(user) {
    return `
    <div class="col mb-4">
    <div class="card h-100">
      <img src="${user.avatar}" class="card-img-top img-thumbnail" alt="...">
      <div class="card-body">
        <h5 class="card-title">Name</h5>
        <p class="card-text">${user.first_name}</p>
        <h5 class="card-title">Email</h5>
        <p class="card-text">${user.email}</p>
      </div>
    </div>
  </div>`
}
function fetchData() {
    fetch("http://localhost:3000/users/2")
        .then(data => {
            return data.json()
        })
        .then(body => {
            const html = body.data.map(contactTemplate).join("");
            container.insertAdjacentHTML("beforeend", html)
        });
    btn.className = "btn btn-primary disabled";
    btn.removeEventListener("click", fetchData);
}