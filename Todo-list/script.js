let task = document.querySelector("#task-input");
let addTask = document.querySelector("#add-task");
let taskList = document.querySelector("#task-list");
let taskCount = document.querySelector(".count");

let count = 0;

taskList.addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("completed");
  } else if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    if (count > 0) {
      taskCount.innerText = --count;
    }
  }
});

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
    taskCount.innerText = ++count;
  }
  task.value = "";
}
