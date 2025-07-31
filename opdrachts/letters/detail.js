"use strict";

const user = JSON.parse(sessionStorage.getItem("user"));
const completedList = document.getElementById("completed");
const uncompletedList = document.getElementById("uncompleted");

document.getElementById("name").textContent = user.name;
document.getElementById("city").textContent = user.address.city;

const response = await fetch(
  `https://jsonplaceholder.typicode.com/todos?userId=${user.id}`
);

const todos = await response.json();

for (const todo of todos) {
  if (todo.completed) {
    createTodo(todo, completedList);
  } else {
    createTodo(todo, uncompletedList);
  }
}

function createTodo(todo, list) {
  const li = document.createElement("li");
  li.textContent = todo.title;
  list.append(li);
}
