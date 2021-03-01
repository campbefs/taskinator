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

var taskFormHandler = function(event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  //console.dir(taskNameInput);

  if (!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the task form!");
    return false;
  }

  // package up data as an object
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };

  // send it as a argument to createTaskEl
  createTaskEl(taskDataObj);

  formEl.reset();
  //console.log(event);
};

var createTaskEl = function(taskDataObj) {
  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  // give it a class name
  taskInfoEl.className = "task-info";

  // add HTML content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>"+taskDataObj.name+"</h3><span class='task-type'>" + taskDataObj.type+"</span>";

  //listItemEl.textContent = taskNameInput;
  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
}

//buttonEl.addEventListener('click', taskFormHandler);
formEl.addEventListener("submit", taskFormHandler);

// handle form submission
