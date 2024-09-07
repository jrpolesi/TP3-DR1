/*
Expanda o componente TodoList para permitir adicionar novas tarefas através de um campo de entrada e um botão "Adicionar". Cada nova tarefa adicionada deve ser exibida na lista.

Instruções:

- Implemente a lógica para adicionar novas tarefas ao estado do componente TodoList quando o botão "Adicionar" for clicado, e exiba as novas tarefas na lista.
*/

import { useState } from "react";

export default function App() {
  return <TodoList />;
}

const TASKS = [
  { id: 1, task: "Estudar para a prova" },
  { id: 2, task: "Ler um livro" },
  { id: 3, task: "Fazer compras" },
  { id: 4, task: "Assistir um filme" },
  { id: 5, task: "Fazer exercícios" },
];

function TodoList() {
  const [tasks, setTasks] = useState(TASKS);
  const [newTaskValue, setNewTaskValue] = useState("");

  function addTask() {
    setTasks(() => {
      const newTask = { id: tasks.length + 1, task: newTaskValue };
      setNewTaskValue("");

      return [...tasks, newTask];
    });
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
