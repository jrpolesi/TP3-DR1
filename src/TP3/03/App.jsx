/* 
Modifique o componente Greeting criado na Questão 1 para aceitar uma prop adicional chamada age. O componente deve exibir a saudação e a idade da seguinte forma: "Olá, {name}! Você tem {age} anos.".

Instruções:

- Atualize o componente Greeting para receber a prop age.
- Exiba a saudação com o nome e a idade passados como props no formato "Olá, {name}! Você tem {age} anos.".
*/

const PEOPLE = [
  { name: "João", age: 25 },
  { name: "Maria", age: 30 },
  { name: "José", age: 35 },
  { name: "Ana", age: 40 },
  { name: "Carlos", age: 45 },
];

export default function App() {
  return (
    <div>
      {PEOPLE.map(({ name, age }) => (
        <Greeting key={name} name={name} age={age} />
      ))}
    </div>
  );
}

function Greeting({ name, age }) {
  return (
    <p>
      Olá, {name}! Você tem {age} anos.
    </p>
  );
}
