const createTaskBtn = document.querySelector(".create-task");
const input = document.querySelector("input");
const list = document.querySelector("ol");

createTaskBtn.addEventListener("click", addTask);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const task = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  listItem.classList = "card";
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList = "delete-task";
  const addSubTask = document.createElement("button");
  addSubTask.textContent = "Add";
  const todo = document.createElement("div");
  todo.classList = "todo";
  const feature = document.createElement("div");
  feature.classList = "feature";

  const nameTask = document.createElement("h3");

  if (task !== "") {
    list.appendChild(listItem);
    listItem.appendChild(todo);
    todo.appendChild(nameTask);
    nameTask.textContent = task;
    todo.appendChild(feature);
    feature.appendChild(addSubTask);
    feature.appendChild(deleteBtn);
  }

  addSubTask.addEventListener("click", () => {
    const subTask = document.createElement("ul");
    const subItem = document.createElement("li");
    const inputSub = document.createElement("input");
    listItem.appendChild(subTask);
    subTask.appendChild(subItem);
    subItem.appendChild(inputSub);

    inputSub.addEventListener("keydown", (e) => {
      if (e.key === "Delete") {
        subTask.removeChild(subItem);
      }
    });
  });

  deleteBtn.addEventListener("click", () => {
    list.removeChild(listItem);
  });

  input.focus();
}
