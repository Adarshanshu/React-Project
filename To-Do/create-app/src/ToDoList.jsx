import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
  const [todos, setTodos] = useState([
    { task: "Plan your day", id: uuidv4(), isDone: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTask = (event) => {
    event.preventDefault();

    const task = newTodo.trim();
    if (!task) return;

    setTodos((prevTodos) => [
      ...prevTodos,
      { task, id: uuidv4(), isDone: false },
    ]);
    setNewTodo("");
  };

  const updateTodoValues = (event) => {
    setNewTodo(event.target.value);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const activeTasks = todos.filter((todo) => !todo.isDone).length;
  const completedTasks = todos.filter((todo) => todo.isDone).length;

  return (
    <div className="todo-app">
      <div className="todo-container">
        <div className="todo-header">
          <p className="eyebrow">Daily Focus</p>
          <h1>Task Planner</h1>
          <p className="subtext">Add your priorities and keep your day organized.</p>
        </div>

        <form className="todo-input-row" onSubmit={addNewTask}>
          <input
            type="text"
            placeholder="Add a new task"
            value={newTodo}
            onChange={updateTodoValues}
          />
          <button type="submit">Add Task</button>
        </form>

        <div className="todo-summary">
          <span>{activeTasks} active</span>
          <span>{completedTasks} done</span>
        </div>

        {todos.length === 0 ? (
          <p className="empty-state">No tasks yet. Add your first one above.</p>
        ) : (
          <ul className="todo-list">
            {todos.map((todo) => (
              <li key={todo.id}>
                <span className={todo.isDone ? "done" : ""}>{todo.task}</span>
                <div className="todo-actions">
                  <button onClick={() => toggleDone(todo.id)}>
                    {todo.isDone ? "Undo" : "Done"}
                  </button>
                  <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
