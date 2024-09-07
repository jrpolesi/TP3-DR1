/* 
Crie um componente chamado Temperature que exiba "Está quente!" se a temperatura for maior que 25 graus Celsius e "Está frio!" caso contrário.

Instruções:

- Implemente o componente Temperature para exibir "Está quente!" se a temperatura passada como prop for maior que 25 graus Celsius.
- Caso contrário, exiba "Está frio!".
*/

export default function App() {
  return (
    <div>
      <h2>26 graus Celsius</h2>
      <Temperature temperatura={26} />

      <h2>25 graus Celsius</h2>
      <Temperature temperatura={25} />
    </div>
  );
}

function Temperature({ temperatura }) {
  if (temperatura > 25) {
    return <p>Está quente!</p>;
  } else {
    return <p>Está frio!</p>;
  }
}
