// App Variables
const todos = ["My todo 1", "My todo 2", "My todo 3"];

// DOM Elements
const todoList = document.getElementById("todo-list");
const addTodo = document.getElementById("add-todo");
const form = document.getElementById("add-todo-form");
const input = document.getElementById("todo");
const cancelButton = document.getElementById("cancel");

// Functions
const setTodos = () => {
    todoList.innerHTML = "";

    todos.forEach(todo => {
        todoList.innerHTML += `
            <li>
                <span>${todo}</span>
                <i class="fas fa-trash"></i>
            </li>
        `
    });

    const deleteButtons = todoList.querySelectorAll("i");

    deleteButtons.forEach((deleteButton, index) => {
        deleteButton.addEventListener("click", () => {
            todos.splice(index, 1);

            if(todos.length > 0){
                setTodos();
            }else{
                todoList.style.display = "none"
            }
        })
    })
}

setTodos();

// Listeners
addTodo.addEventListener("click", () => {
    form.style.display = "block";
    addTodo.style.display = "none";
})

cancelButton.addEventListener("click", () => {
    form.style.display = "none";
    addTodo.style.display = "flex";
})

form.addEventListener("submit", e => {
    e.preventDefault();

    const todo = input.value;

    if(!todo){
        alert("Todo is required in order to submit!")
        return;
    }

    todos.push(todo);

    if(todos.length === 1){
        todoList.style.display = "block"
    }

    input.value = "";

    form.style.display = "none";
    addTodo.style.display = "flex";

    setTodos();
})