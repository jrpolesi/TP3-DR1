/*
Modifique o componente Counter criado na Questão 2 para passar o valor do contador como uma prop chamada count para um novo componente funcional chamado DisplayCount. Este novo componente deve apenas exibir o valor recebido como prop.

Instruções:

- Crie o componente DisplayCount que aceita a prop count e exibe seu valor.
- Atualize o componente Counter para passar o valor do contador para o componente DisplayCount como uma prop count.
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

  render() {
    return (
      <div>
        <DisplayCount count={this.state.count} />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Incrementar +
        </button>
      </div>
    );
  }
}

function DisplayCount({ count }) {
  return <p>{count}</p>;
}
