
let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {

    let taskText = input.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.style.marginLeft = "10px";

    completeBtn.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);


    taskList.appendChild(li);


    input.value = "";
});
