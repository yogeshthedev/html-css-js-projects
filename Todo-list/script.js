let task = document.querySelector("#task-input");
let addTask = document.querySelector("#add-task");
let taskList = document.querySelector("#task-list");
let taskCount = document.querySelector("#task-count");

addTask.addEventListener("click", () => {
  listItem();
});

function listItem() {
  if (task.value.trim() == "") {
    alert("Enter a task");
  } else {
    let liItem = document.createElement("li");
    let remove = document.createElement("img");
    remove.src = "./remove.png";
    liItem.innerText = task.value;
    liItem.append(remove);
    taskList.append(liItem);
    remove.addEventListener("click", () => {
      remove.parentElement.remove("li");
    });
  }
  task.value = "";
}
