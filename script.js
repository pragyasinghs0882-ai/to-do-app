const today = document.getElementById("Day");
const coming = document.getElementById("Coming");
const Completed = document.getElementById("goat");
const Goals = document.getElementById("Now");
const Todo = document.getElementById("Future");
const Done = document.getElementById("completed");
const icon = document.getElementById("plus");
const Panel = document.getElementById("left-panel");
const Plus = document.getElementById("addTasks");
const Text = document.getElementById("taskbar");
const Save = document.getElementById("Added");
const Container = document.getElementById("output");
const Input = document.getElementById("input");
const checkbox = document.querySelectorAll(".checkbox");

let tasks = [];

today.addEventListener("click", function () {
  if (
    Goals.style.display == "none" ||
    Done.style.display == "block" ||
    Todo.style.display == "block"
  ) {
    Goals.style.display = "block";
    Todo.style.display = "none";
    Done.style.display = "none";
  } else Goals.style.display = "none";
});
coming.addEventListener("click", function () {
  if (
    Todo.style.display == "none" ||
    Goals.style.display == "block" ||
    Done.style.display == "block"
  ) {
    Todo.style.display = "block";
    Done.style.display = "none";
    Goals.style.display = "none";
  } else Todo.style.display = "none";
});
Completed.addEventListener("click", function () {
  if (
    (Done.style.display =
      "none" || Todo.style.display == "block" || Goals.style.display == "block")
  ) {
    Done.style.display = "block";
    Goals.style.display = "none";
    Todo.style.display = "none";
  } else Done.style.display = "none";
});

Plus.addEventListener("click", function () {
  if ((Input.style.display = "none")) Input.style.display = "block";
});
Save.addEventListener("click", function () {
  let taskName = Text.value;

  let Taken = document.createElement("div");
  Taken.className = "context";
  Taken.innerText = taskName;

  let checked = document.createElement("input");
  checked.className = "checkbox";
  checked.type = "checkbox";
  checked.checked = false;

  Taken.appendChild(checked);
  Container.appendChild(Taken);

  let currentTask = {
    name: taskName,
    checked: false,
  };
  tasks = [...tasks, currentTask];

  saveToLocalStorage();

  Text.value = "";
});

function saveToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

window.onload = function () {
  let localTasks = JSON.parse(localStorage.getItem("tasks"));

  if (localTasks) {
    tasks = localTasks;
    for (let i = 0; i < tasks.length; i++) {
      let task = tasks[i];
      let taskName = document.createElement("div");
      taskName.innerText = task.name;
      taskName.className = "context";

      let checked = document.createElement("input");
      checked.className = "checkbox";
      checked.type = "checkbox";
      checked.checked = task.checked;
      taskName.appendChild(checked);

      Container.appendChild(taskName);
    }
  }
};

Container.addEventListener("change", function (event) {
  // Check if what was clicked is actually a checkbox
  if (event.target.classList.contains("checkbox")) {
    const checkbox = event.target;
    // Get the text from the parent <div> (the task name)
    const taskName = checkbox.parentElement.innerText.trim();
    const isChecked = checkbox.checked;

    // Update the 'tasks' array
    tasks.forEach((task) => {
      if (task.name === taskName) {
        task.checked = isChecked;
      }
    });

    // Save the updated array to LocalStorage
    saveToLocalStorage();
    // console.log("Updated task:", taskName, "to", isChecked);
  }
});
