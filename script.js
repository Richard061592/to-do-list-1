const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

addButton.addEventListener("click", function(){
    const todoValue = todoInput.value;
    if (todoValue) {
        todos.push(todoValue);
        todoInput.value = "";
        localStorage.setItem("todos", JSON.stringify(todos));
        updateTodoList();
    }
})

function updateTodoList() {
    let todoItems = "";
    for (let i = 0; i < todos.length; i++) {
        todoItems += `
        <li data-index="${i}">
            <span>${todos[i]}</span>
            <button class="deleteButton">
                <i class="fa-solid fa-xmark"></i> 
            </button>
        </li>`;
    }
    todoList.innerHTML = todoItems;
}

todoList.addEventListener("click", function(event){
    if (event.target.className === "deleteButton") {
        const todoIndex = event.target.parentElement.getAttribute("data-index");
        todos.splice(todoIndex, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
        updateTodoList();
    }
})

updateTodoList();