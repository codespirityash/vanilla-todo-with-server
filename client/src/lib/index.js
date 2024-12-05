document.addEventListener("DOMContentLoaded", function () {
  const taskList = document.getElementById("task-list");
  const inputField = document.getElementById("input");
  const addButton = document.getElementById("button");

  //  Added a new task
  addButton.addEventListener("click", function () {
    const taskTitle = inputField.value.trim();

    if (taskTitle === "") {
      alert("Please enter a task title"); //This will Show an alert if input is empty
      return;
    }

    const taskItem = document.createElement("section");
    taskItem.className = "item";

    const taskHeader = document.createElement("div");
    taskHeader.className = "header";
    const taskTitleElement = document.createElement("h4");
    taskTitleElement.textContent = taskTitle;
    taskHeader.appendChild(taskTitleElement);

    const taskContent = document.createElement("div");
    taskContent.className = "content";

    const taskFooter = document.createElement("div");
    taskFooter.className = "footer";

    const completeButton = document.createElement("button");
    completeButton.id = "complete";
    completeButton.textContent = "Complete";

    const removeButton = document.createElement("button");
    removeButton.id = "remove";
    removeButton.textContent = "Remove";

    taskFooter.appendChild(completeButton);
    taskFooter.appendChild(removeButton); //Added Button

    taskItem.appendChild(taskHeader); // Append header, content, and footer to the task item
    taskItem.appendChild(taskContent);
    taskItem.appendChild(taskFooter);

    taskList.appendChild(taskItem);

    inputField.value = ""; // Clear the placehoolder

    completeButton.addEventListener("click", function () {
      if (taskTitleElement.style.textDecoration === "line-through") {
        taskTitleElement.style.textDecoration = "none";
      } else {
        taskTitleElement.style.textDecoration = "line-through";
      }
    }); //Complete Button Functionality

    removeButton.addEventListener("click", function () {
      taskList.removeChild(taskItem);
    });
  });
}); //Rmove Button Functionality
