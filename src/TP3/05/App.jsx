/*
No componente Counter (implementado na Questão 2), adicione um botão chamado "Reset" que, quando clicado, redefine o contador para 0.

Instruções:

- Adicione uma função ao componente Counter que redefine o estado do contador para 0.
- Implemente um botão "Reset" que, ao ser clicado, aciona a função para redefinir o contador para 0.
*/

import { Component } from "react";

export default function App() {
  return <Counter />;
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Incrementar +
        </button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
