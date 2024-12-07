export function createTaskItem(taskTitle, taskList) {
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
  taskFooter.appendChild(removeButton);

  taskItem.appendChild(taskHeader);
  taskItem.appendChild(taskContent);
  taskItem.appendChild(taskFooter);

  // Complete Button Functionality
  completeButton.addEventListener("click", function () {
    if (taskTitleElement.style.textDecoration === "line-through") {
      taskTitleElement.style.textDecoration = "none";
    } else {
      taskTitleElement.style.textDecoration = "line-through";
    }
  });

  // Remove Button Functionality
  removeButton.addEventListener("click", function () {
    taskList.removeChild(taskItem);
  });

  return taskItem;
}
