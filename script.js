const input = document.querySelector("#taskInput");
const button = document.querySelector("#addBtn");
const list = document.querySelector("#taskList");

button.addEventListener("click", function () {
    
    const taskText = input.value;

    // Prevent empty task
    if (taskText === "") return;

    // Create list item
    const li = document.createElement("li");
    li.innerText = taskText;

    // Mark complete
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";

    // Delete task
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // Add delete button to li
    li.appendChild(deleteBtn);

    // Add li to list
    list.appendChild(li);

    // Clear input
    input.value = "";
});