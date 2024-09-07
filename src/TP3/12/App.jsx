/* 
Crie um componente chamado List que recebe uma lista de números como propriedade. Renderize uma lista contendo elementos para cada número. Se a lista estiver vazia, exiba uma mensagem informando que a lista está vazia.

Instruções:

- Implemente o componente List para renderizar uma lista contendo elementos para cada número da lista.
- Se a lista estiver vazia, exiba a mensagem "A lista está vazia".
*/

const NUMBERS = [1, 2, 3, 4, 5];

export default function App() {
  return (
    <div>
      <h2>Lista de números</h2>
      <List numbers={NUMBERS} />

      <h2>Lista vazia</h2>
      <List numbers={[]} />
    </div>
  );
}

function List({ numbers }) {
  if (numbers.length === 0) {
    return <p>A lista está vazia</p>;
  }

  return (
    <ul>
      {numbers.map((number) => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  );
}
