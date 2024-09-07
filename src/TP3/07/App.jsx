/*
Modifique o componente TodoItem para adicionar um botão "Concluir" ao lado de cada tarefa. Quando este botão for clicado, a tarefa deve ser marcada como concluída, alterando visualmente sua aparência.

Instruções:

- Adicione a funcionalidade ao botão "Concluir" para atualizar o estado da tarefa no componente TodoItem, refletindo visualmente que a tarefa foi concluída.
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
  return (
    <ul>
      {TASKS.map(({ id, task }) => (
        <TodoItem key={id} task={task} />
      ))}
    </ul>
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
