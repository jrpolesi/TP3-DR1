/*
Implemente uma tela de login usando React. O formulário deve conter campos para nome de usuário e senha, e a autenticação deve ser realizada localmente. Adicione validação para garantir que ambos os campos sejam preenchidos e que a senha tenha pelo menos 6 caracteres. Após a autenticação bem-sucedida, redirecione o usuário para a página inicial.
*/
import "./App.css";
import { useState } from "react";

export default function App() {
  const { isAuthenticated, login } = useAuth();

  return (
    <div className="container">
      {isAuthenticated ? <MainPage /> : <LoginPage login={login} />}
    </div>
  );
}

function LoginPage({ login }) {
  const { formValues, formErrors, handleInputChange, validateForm } =
    useLoginForm();

  function handleLogin(e) {
    e.preventDefault();

    const isValid = validateForm(formValues);

    if (isValid) {
      login(formValues.username, formValues.password);
    }
  }

  const errors = Object.entries(formErrors).filter(([_, error]) => error);
  const hasErrors = !!errors.length;

  return (
    <div className="login">
      <h1>Login</h1>

      <div>
        <ul>
          <li>Nome de usuário: admin</li>
          <li>Senha: admin</li>
        </ul>
      </div>

      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Nome de usuário</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formValues.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
          />
        </div>
        {hasErrors && (
          <ul className="form-errors">
            {errors.map(([key, error]) => error && <li key={key}>{error}</li>)}
          </ul>
        )}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function MainPage() {
  return (
    <div className="main-page">
      <h1>Pagina inicial</h1>
      <p>Bem vindo a página inicial</p>
    </div>
  );
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

const VALIDATION_FN = {
  username: (value) => {
    if (!value) {
      return "Nome de usuário é obrigatório.";
    }

    return undefined;
  },
  password: (value) => {
    if (!value) {
      return "Senha é obrigatória.";
    }

    if (value.length < 6) {
      return "A senha deve ter pelo menos 6 caracteres.";
    }

    return undefined;
  },
};

function useLoginForm() {
  const [formErrors, setFormErrors] = useState({
    username: undefined,
    password: undefined,
  });

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  function validateForm(values) {
    let isValid = true;
    const errors = {};

    for (const key in values) {
      const error = VALIDATION_FN[key](values[key]);
      if (error) {
        isValid = false;
      }

      errors[key] = error;
    }

    setFormErrors(errors);
    return isValid;
  }

  function handleInputChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    setFormValues({
      ...formValues,
      [key]: value,
    });
  }

  return { formValues, formErrors, handleInputChange, validateForm };
}
