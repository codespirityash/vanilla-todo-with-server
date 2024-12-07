import "./styles/index.scss";

import { createTaskItem } from "./lib/taskCreate.js";

document.addEventListener("DOMContentLoaded", function () {
  const taskList = document.getElementById("task-list");
  const inputField = document.getElementById("input");
  const addButton = document.getElementById("button");

  // Add a new task
  addButton.addEventListener("click", function () {
    const taskTitle = inputField.value.trim();

    if (taskTitle === "") {
      alert("Please enter a task title");
      return;
    }

    const taskItem = createTaskItem(taskTitle, taskList);

    // Add a  task item to the list
    taskList.appendChild(taskItem);

    // Clear the placeholder
    inputField.value = "";
  });
});
