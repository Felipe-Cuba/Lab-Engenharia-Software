const form = document.querySelector("form");
const todoList = document.getElementById("todo-list");

let todos = [];

const addTodo = (todoText) => {
  const todo = {
    id: Date.now(),
    text: todoText,
  };

  todos.push(todo);
  renderTodos();
};

const removeTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
};

const reorderTodos = () => {
  todos.sort((a, b) => a.text.localeCompare(b.text));
  renderTodos();
};

const renderTodos = () => {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${todo.text}</span> <button type="button" data-id="${todo.id}">Excluir</button>`;
    const deleteButton = li.querySelector("button");
    deleteButton.addEventListener("click", (event) => {
      const id = Number(event.target.getAttribute("data-id"));
      removeTodo(id);
    });
    todoList.appendChild(li);
  });
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const todoText = form.elements["new-todo"].value.trim();
  if (todoText) {
    addTodo(todoText);
    form.elements["new-todo"].value = "";
  }
});

document.getElementById("reorder-btn").addEventListener("click", (event) => {
  reorderTodos();
});

renderTodos();
