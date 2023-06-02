import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks, deleteTask, toggleTask } = useContext(TaskContext);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <span>{task.name}</span>
          <button onClick={() => deleteTask(task.id)}>Deletar</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
