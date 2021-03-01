//console.dir(window.document);

var buttonEl = document.querySelector("#save-task");
var formEl = document.querySelector("#task-form");


var tasksToDoEl = document.querySelector("#tasks-to-do");
console.log(buttonEl);

// buttonEl.addEventListener("click", function() {
//   var listItemEl = document.createElement("li");
//   listItemEl.className = "task-item";
//   listItemEl.textContent = "This is the new task.";
//   tasksToDoEl.appendChild(listItemEl);
// });

var createTaskHandler = function(event) {
  event.preventDefault();
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
  //console.log(event);
};

//buttonEl.addEventListener('click', createTaskHandler);
formEl.addEventListener("submit", createTaskHandler);

// handle form submission
