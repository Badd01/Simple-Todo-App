const createTaskBtn = document.querySelector(".create-task");
const input = document.querySelector("input");
const list = document.querySelector("ol");

createTaskBtn.addEventListener("click", () => {
  const task = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  listItem.classList = "card";
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList = "delete-task";

  if (task !== "") {
    list.appendChild(listItem);
    listItem.textContent = task;
    listItem.appendChild(deleteBtn);
  }

  deleteBtn.addEventListener("click", () => {
    list.removeChild(listItem);
  });

  listItem.addEventListener("click", () => {
    listItem.classList.toggle("done");
  });

  input.focus();
});
