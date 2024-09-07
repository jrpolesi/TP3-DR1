/*
Crie um componente funcional chamado Greeting que receba uma prop chamada name e exiba uma saudação utilizando essa propriedade. Por exemplo, se name for "João", o componente deve exibir "Olá, João!".

Instruções:

- Implemente o componente Greeting para que ele utilize a prop name e exiba a saudação no formato "Olá, {name}!".
- Utilize o componente Greeting em uma aplicação passando diferentes valores para a prop name.
*/

const NAMES = ["João", "Maria", "José", "Ana", "Carlos"];

export default function App() {
  return (
    <div>
      {NAMES.map((name) => (
        <Greeting key={name} name={name} />
      ))}
    </div>
  );
}

function Greeting({ name }) {
  return <p>Olá, {name}!</p>;
}
