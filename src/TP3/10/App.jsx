/* 
Adicione um evento personalizado ao componente TodoItem chamado onTaskDelete, que é acionado quando um botão "Excluir" ao lado de cada tarefa é clicado.

Instruções:

- Implemente o evento personalizado onTaskDelete no componente TodoItem e acione-o quando o botão "Excluir" for clicado, passando a tarefa correspondente como argumento.
*/

import { useState } from "react";

const TASKS = [
  { id: "1", title: "Estudar para a prova" },
  { id: "2", title: "Ler um livro" },
  { id: "3", title: "Fazer compras" },
  { id: "4", title: "Assistir um filme" },
  { id: "5", title: "Fazer exercícios" },
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
        title: newTask,
      },
    ]);
  }

  function deleteTask(task) {
    setTasks(tasks.filter((t) => t.id !== task.id));
  }

  return (
    <TodoList tasks={tasks} onAddTask={addTask} onTaskDelete={deleteTask} />
  );
}

function TodoList({ tasks, onAddTask, onTaskDelete }) {
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
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} onTaskDelete={onTaskDelete} />
        ))}
      </ul>
    </div>
  );
}

function TodoItem({ task, onTaskDelete }) {
  const [completed, setCompleted] = useState(false);

  const textDecoration = completed ? "line-through" : "none";

  return (
    <li>
      <span style={{ textDecoration }}>{task.title}</span>
      <button onClick={() => setCompleted(true)}>Concluir</button>
      <button onClick={() => onTaskDelete(task)}>Excluir</button>
    </li>
  );
}
