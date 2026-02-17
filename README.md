# Minimal Counter + To-Do

A minimal, black-and-white web app that includes:

- **Counter**: starts at `0` with **Reset**, **+1**, and **−1** controls (plus optional keyboard shortcuts).
- **To-Do List**: add tasks, mark them **Complete** to automatically move them to the bottom (archive), and **Uncheck** to bring them back to the top.

No database, no build step, no storage — the app starts fresh every time you reload.

---

## Features

### Counter
- Starts at **0**
- Buttons:
  - **Reset** → sets count to 0
  - **+** → increments by 1
  - **−** → decrements by 1
- Keyboard shortcuts (optional but included):
  - `+` / `=` (with Shift) → increment
  - `-` → decrement
  - `r` → reset

### To-Do List
- Add an item using:
  - **Enter** key, or
  - **Add** button
- Each item has:
  - **Complete** checkbox:
    - checked → item moves to the bottom
    - unchecked → item returns to the top section
  - **Delete** button
- Ordering rules:
  - **Uncompleted items** always appear first
  - **Completed items** appear at the bottom
  - Within each group, items keep their original creation order

---

## Tech Stack

- **HTML + CSS + Vanilla JavaScript**
- JavaScript uses **ES modules** (`type="module"`) for a clean file structure

---

## Project Structure

counter-todo/
├─ index.html
├─ styles.css
└─ js/
    ├─ main.js
    └─ modules/
        ├─ counter.js
        └─ todos.js


## Run Locally

Because the JavaScript uses ES modules, you should run this with a local server (opening `index.html` directly with `file://` may block module imports in Chrome).

### Option 1: Python (recommended, simplest)
1. Open Terminal
2. `cd` into the project folder:
   ```bash
   cd path/to/your-project
    ```
3. Start a server
    ```bash
   python3 -m http.server 5173
    ```

4. Open in your browser
    ```bash
    http://localhost:5173
    ```
