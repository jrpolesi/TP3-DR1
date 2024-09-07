/*
Modifique o componente TodoList para mover o estado das tarefas para o componente pai que utiliza TodoList. As tarefas devem ser passadas como props para o componente TodoList.

Instruções:

- Reorganize o código para que o estado das tarefas seja mantido no componente pai e passe as tarefas como props para o componente TodoList.
*/

import { useState } from "react";

const TASKS = [
  { id: "1", task: "Estudar para a prova" },
  { id: "2", task: "Ler um livro" },
  { id: "3", task: "Fazer compras" },
  { id: "4", task: "Assistir um filme" },
  { id: "5", task: "Fazer exercícios" },
];

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

export default function App() {
  const [tasks, setTasks] = useState(TASKS);

  function addTask(newTask) {
    setTasks([
      ...tasks,
      {
        id: generateId(),
        task: newTask,
      },
    ]);
  }

  return <TodoList tasks={tasks} onAddTask={addTask} />;
}

function TodoList({ tasks, onAddTask }) {
  const [newTaskValue, setNewTaskValue] = useState("");

  function addTask() {
    onAddTask(newTaskValue);

    setNewTaskValue("");
  }

  return (
    <div>
      <div className="add-task-container">
        <input
          type="text"
          value={newTaskValue}
          onChange={(e) => setNewTaskValue(e.target.value)}
        />
        <button onClick={addTask}>Adicionar</button>
      </div>

      <ul>
        {tasks.map(({ id, task }) => (
          <TodoItem key={id} task={task} />
        ))}
      </ul>
    </div>
  );
}

function TodoItem({ task }) {
  const [completed, setCompleted] = useState(false);

  const textDecoration = completed ? "line-through" : "none";

  return (
    <li>
      <span style={{ textDecoration }}>{task}</span>
      <button onClick={() => setCompleted(true)}>Concluir</button>
    </li>
  );
}
