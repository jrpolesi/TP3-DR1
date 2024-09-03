/*
Desenvolva uma tela de registro de usuário com um formulário utilizando React Hook Form. O formulário deve capturar os seguintes dados: nome, email e senha.

- Validação: Implemente validação para assegurar que todos os campos sejam preenchidos. O campo de email deve ser validado para garantir que tenha um formato válido (ex.: exemplo@dominio.com). A senha deve atender a requisitos básicos de segurança, como um comprimento mínimo de 6 caracteres.
- Simulação de Requisição: Após o preenchimento e validação do formulário, simule o envio dos dados para um servidor. Não é necessário realizar uma requisição real a uma API. Simule a resposta com uma mensagem de sucesso ou erro para informar o usuário sobre o status do registro.
- Redirecionamento: Após a simulação de sucesso no registro, redirecione o usuário para a tela de login.
*/

import { useState } from "react";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { MainPage } from "./components/MainPage";

const PAGES = {
  register: {
    Component: Register,
  },
  login: {
    Component: Login,
  },
};

export default function App() {
  const { isAuthenticated, login } = useAuth();
  const [page, setPage] = useState(isAuthenticated ? "main" : "register");

  const PageComponent = PAGES[page].Component;

  if (isAuthenticated) {
    return <MainPage />;
  }

  return PageComponent && <PageComponent setPage={setPage} login={login} />;
}

function useAuth() {
  const expectedUsername = "admin";
  const expectedPassword = "123456";

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function login(username, password) {
    if (username === expectedUsername && password === expectedPassword) {
      setIsAuthenticated(true);

      return;
    }

    setTimeout(() => {
      alert("Nome de usuário ou senha inválidos."), 0;
    });
  }

  return { isAuthenticated, login };
}
