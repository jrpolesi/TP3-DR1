import { useState } from "react";
import "./style.css";
import { FormField } from "../FormField";
import { SubmitButton } from "../SubmitButton";

export function Login({ login }) {
  const { formValues, formErrors, handleInputChange, validateForm } =
    useLoginForm();

  function handleLogin(e) {
    e.preventDefault();

    const isValid = validateForm(formValues);

    if (isValid) {
      login(formValues.username, formValues.password);
    }
  }

  return (
    <div className="login-page">
      <h1>Login</h1>

      <div>
        <ul>
          <li>Nome de usuário: admin</li>
          <li>Senha: admin</li>
        </ul>
      </div>

      <form className="login-form" onSubmit={handleLogin}>
        <FormField
          name="username"
          field="Nome de usuário"
          error={formErrors.username}
        >
          <input
            type="text"
            id="username"
            name="username"
            value={formValues.username}
            onChange={handleInputChange}
          />
        </FormField>
        <FormField name="password" field="Senha" error={formErrors.password}>
          <input
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
          />
        </FormField>

        <SubmitButton>Login</SubmitButton>
      </form>
    </div>
  );
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

      errors[key] = { message: error };
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
