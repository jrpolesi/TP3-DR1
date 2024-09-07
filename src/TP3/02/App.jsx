/*
Crie um componente de classe chamado Counter que exiba um contador iniciando em 0. Adicione um botão que, quando clicado, incrementa o contador em 1.

Instruções:

- Implemente o componente Counter utilizando o estado para controlar o valor do contador.
- Certifique-se de que o valor do contador seja exibido e atualizado conforme o botão é clicado.
*/

import { Component, useState } from "react";

export default function App() {
  return <Counter />;
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Incrementar +
        </button>
      </div>
    );
  }
}

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>Incrementar +</button>
//     </div>
//   );
// }
