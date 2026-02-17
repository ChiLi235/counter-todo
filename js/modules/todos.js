export function setupTodos() {
  const todoInput = document.getElementById("todoInput");
  const addTodoBtn = document.getElementById("addTodo");
  const todoListEl = document.getElementById("todoList");

  /** @type {{id:string, text:string, completed:boolean, createdAt:number}[]} */
  let todos = [];

  function uid() {
    return (crypto?.randomUUID?.() ?? String(Date.now() + Math.random()));
  }

  function addTodo(text) {
    const t = text.trim();
    if (!t) return;

    todos.push({ id: uid(), text: t, completed: false, createdAt: Date.now() });
    renderTodos();
  }

  function toggleTodo(id) {
    const item = todos.find(t => t.id === id);
    if (!item) return;
    item.completed = !item.completed;
    renderTodos(); // resort so completed goes bottom / uncompleted returns top
  }

  function removeTodo(id) {
    todos = todos.filter(t => t.id !== id);
    renderTodos();
  }

  function sortedTodos() {
    // Uncompleted first; stable within group by createdAt
    return [...todos].sort((a, b) => {
      if (a.completed !== b.completed) return a.completed ? 1 : -1;
      return a.createdAt - b.createdAt;
    });
  }

  function renderTodos() {
    todoListEl.innerHTML = "";

    for (const t of sortedTodos()) {
      const row = document.createElement("div");
      row.className = "item" + (t.completed ? " completed" : "");

      const left = document.createElement("div");
      left.className = "left";

      // checkbox wrapper
      const chkWrap = document.createElement("label");
      chkWrap.className = "chk";
      chkWrap.title = "Complete";

      const chk = document.createElement("input");
      chk.type = "checkbox";
      chk.checked = t.completed;
      chk.addEventListener("change", () => toggleTodo(t.id));

      const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      icon.setAttribute("viewBox", "0 0 24 24");
      icon.setAttribute("fill", "none");
      icon.setAttribute("stroke", "white");
      icon.setAttribute("stroke-width", "2.5");
      icon.setAttribute("stroke-linecap", "round");
      icon.setAttribute("stroke-linejoin", "round");

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "M20 6L9 17l-5-5");
      icon.appendChild(path);

      chkWrap.appendChild(chk);
      chkWrap.appendChild(icon);

      const text = document.createElement("div");
      text.className = "text";
      text.textContent = t.text;

      left.appendChild(chkWrap);
      left.appendChild(text);

      const del = document.createElement("button");
      del.className = "miniBtn";
      del.textContent = "Delete";
      del.addEventListener("click", () => removeTodo(t.id));

      row.appendChild(left);
      row.appendChild(del);
      todoListEl.appendChild(row);
    }
  }

  addTodoBtn.addEventListener("click", () => {
    addTodo(todoInput.value);
    todoInput.value = "";
    todoInput.focus();
  });

  todoInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addTodo(todoInput.value);
      todoInput.value = "";
    }
  });

  renderTodos();
}
