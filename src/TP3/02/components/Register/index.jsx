import { useForm } from "react-hook-form";
import "./style.css";
import { FormField } from "../FormField";
import { SubmitButton } from "../SubmitButton";
import { FormError } from "../FormError";
import { useEffect } from "react";

export function Register({ setPage }) {
  return (
    <div className="register-page">
      <h1>Criar conta</h1>

      <Form setPage={setPage} />
    </div>
  );
}

function Form({ setPage }) {
  const { register, handleSubmit, formState, setError, clearErrors, watch } =
    useForm({ mode: "onSubmit" });
  const { errors, isSubmitting } = formState;

  useEffect(() => {
    const subscription = watch(() => clearErrors("submit"));
    return () => subscription.unsubscribe();
  }, [clearErrors, watch]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await registerUser(data);

      setPage("login");
    } catch (error) {
      setError("submit", {
        message: error,
      });
    }
  });

  return (
    <form className="register-form" onSubmit={onSubmit} noValidate>
      <FormField name="name" field="Nome" error={errors.name}>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: {
              value: true,
              message: "Campo obrigatório",
            },
          })}
        />
      </FormField>
      <FormField name="email" field="Email" error={errors.email}>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: {
              value: true,
              message: "Campo obrigatório",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email inválido",
            },
          })}
        />
      </FormField>
      <FormField name="password" field="Senha" error={errors.password}>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: {
              value: true,
              message: "Campo obrigatório",
            },
            minLength: {
              value: 6,
              message: "Mínimo de 6 caracteres",
            },
          })}
        />
      </FormField>

      <FormError value={errors.submit?.message} />

      <SubmitButton isLoading={isSubmitting}>Registrar</SubmitButton>
    </form>
  );
}
function registerUser(_) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      success ? resolve(true) : reject("Erro ao registrar usuário.");
    }, 2000);
  });
}
