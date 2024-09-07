/* 
Crie um componente funcional chamado StatusBadge que exiba um badge de status baseado em uma prop chamada status. O badge deve ter um estilo diferente dependendo do valor da prop status.

Instruções:

Defina a Prop status:
- O componente StatusBadge deve aceitar uma prop chamada status que pode ter os valores "ativo", "inativo" ou "pendente".
Estilos Condicionais:
- Utilize estilos inline ou classes CSS para definir a aparência do badge:
  - Se o status for "ativo", o badge deve ter um fundo verde e texto branco.
  - Se o status for "inativo", o badge deve ter um fundo cinza e texto branco.
  - Se o status for "pendente", o badge deve ter um fundo laranja e texto branco.
Exibição do Badge:
- O badge deve exibir o texto correspondente ao status. Por exemplo, se o status for "ativo", o texto do badge deve ser "Ativo".
*/

export default function App() {
  return (
    <div>
      <h2>Status Ativo</h2>
      <StatusBadge status="ativo" />

      <h2>Status Inativo</h2>
      <StatusBadge status="inativo" />

      <h2>Status Pendente</h2>
      <StatusBadge status="pendente" />
    </div>
  );
}

const BADGES = {
  ativo: {
    style: {
      backgroundColor: "green",
      color: "white",
    },
    label: "Ativo",
  },
  inativo: {
    style: {
      backgroundColor: "gray",
      color: "white",
    },
    label: "Inativo",
  },
  pendente: {
    style: {
      backgroundColor: "orange",
      color: "white",
    },
    label: "Pendente",
  },
};

function StatusBadge({ status }) {
  const defaultStatus = {
    style: {},
    label: status,
  };

  const { style, label } = BADGES[status] ?? defaultStatus;

  return <span style={style}>{label}</span>;
}
