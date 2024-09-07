/* 
Crie um componente chamado TodoList que exibe uma lista de tarefas. Cada tarefa deve ser representada por um componente funcional chamado TodoItem, que recebe uma prop chamada task contendo o texto da tarefa.

Instruções:

- Implemente os componentes TodoList e TodoItem, onde TodoList renderiza múltiplos TodoItems com diferentes tarefas passadas como props.
*/

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
  return <li>{task}</li>;
}
