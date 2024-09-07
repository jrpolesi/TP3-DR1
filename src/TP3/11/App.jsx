/* 
No componente TodoItem, adicione a funcionalidade para alternar entre a exibição do texto da tarefa e um campo de entrada para editar a tarefa quando um botão "Editar" é clicado.

Instruções:

- Implemente a renderização condicional no componente TodoItem para alternar entre a exibição do texto da tarefa e um campo de entrada quando o botão "Editar" é clicado.
- Garanta que a tarefa seja atualizada conforme o usuário edita o campo de entrada.
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

  function updateTask(task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return {
            ...t,
            title: task.title,
          };
        }
        return t;
      })
    );
  }

  return (
    <TodoList
      tasks={tasks}
      onAddTask={addTask}
      onTaskDelete={deleteTask}
      onUpdateTask={updateTask}
    />
  );
}

function TodoList({ tasks, onAddTask, onTaskDelete, onUpdateTask }) {
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
          <TodoItem
            key={task.id}
            task={task}
            onTaskDelete={onTaskDelete}
            onUpdateTask={onUpdateTask}
          />
        ))}
      </ul>
    </div>
  );
}

function TodoItem({ task, onTaskDelete, onUpdateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [completed, setCompleted] = useState(false);

  const [newTaskValue, setNewTaskValue] = useState(task.title);

  const textDecoration = completed ? "line-through" : "none";

  return (
    <li>
      {isEditing ? (
        <input
          value={newTaskValue}
          onChange={(e) => setNewTaskValue(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration }}>{task.title}</span>
      )}
      <button disabled={isEditing} onClick={() => setCompleted(true)}>
        Concluir
      </button>
      {isEditing ? (
        <button
          onClick={() => {
            setIsEditing(false);
            onUpdateTask({ ...task, title: newTaskValue });
          }}
        >
          Salvar
        </button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Editar</button>
      )}
      <button disabled={isEditing} onClick={() => onTaskDelete(task)}>
        Excluir
      </button>
    </li>
  );
}
