/* 
Crie um componente chamado Product que exibe informações sobre um produto, incluindo o nome, preço e uma descrição opcional. Se a descrição não for fornecida, exiba "Descrição não disponível".

Instruções:

- Implemente o componente Product para exibir o nome e o preço do produto.
- Se uma descrição for fornecida, exiba-a; caso contrário, exiba "Descrição não disponível".
*/

export default function App() {
  return (
    <div>
      <h2>Produto com descrição</h2>
      <Product
        nome="Camiseta"
        preco={39.9}
        descricao="Uma camiseta confortável"
      />

      <h2>Produto sem descrição</h2>
      <Product nome="Calça" preco={99.9} />
    </div>
  );
}

function Product({ nome, preco, descricao = "Descrição não disponível" }) {
  return (
    <div>
      <p>Nome: {nome}</p>
      <p>Preço: R$ {preco}</p>
      <p>Descrição: {descricao}</p>
    </div>
  );
}
