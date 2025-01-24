const createTaskBtn = document.querySelector(".create-task");
const input = document.querySelector("input");
const list = document.querySelector("ol");

createTaskBtn.addEventListener("click", () => {
  const task = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  if (task !== "") {
    list.appendChild(listItem);
    listItem.textContent = task;
    listItem.appendChild(deleteBtn);
  }

  deleteBtn.addEventListener("click", () => {
    list.removeChild(listItem);
  });
});
