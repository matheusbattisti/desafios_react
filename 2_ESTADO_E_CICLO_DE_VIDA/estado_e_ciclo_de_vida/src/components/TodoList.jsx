import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const [filter, setFilter] = useState("");

  const addTodo = () => {
    setTodos([...todos, { id: todos.length, task: task }]);
    setTask("");
  };

  return (
    <div>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTodo}>Adicionar</button>
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul> */}
      <h2>5 - Filtro</h2>
      <input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filtrar tarefas..."
      />
      <ul>
        {todos
          .filter((todo) => todo.task.includes(filter))
          .map((todo) => (
            <li key={todo.id}>{todo.task}</li>
          ))}
      </ul>
    </div>
  );
}

export default TodoList;
