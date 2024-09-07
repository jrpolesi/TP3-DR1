/* 
Crie um componente chamado ProfileCard que exibe o nome e a idade de um usuário. A propriedade age é opcional e, caso não seja fornecida, deve ser exibida uma mensagem indicando que a idade não está disponível.

Instruções:

- Implemente o componente ProfileCard para exibir o nome do usuário e sua idade, se fornecida.
- Caso contrário, exiba a mensagem "Idade não disponível".
*/

export default function App() {
  return (
    <div>
      <h2>Com idade</h2>
      <ProfileCard name="João" age={25} />

      <h2>Sem idade</h2>
      <ProfileCard name="Maria" />
    </div>
  );
}

function ProfileCard({ name, age }) {
  return (
    <div>
      <p>Nome: {name}</p>
      {age ? <p>Idade: {age}</p> : <p>Idade não disponível</p>}
    </div>
  );
}
