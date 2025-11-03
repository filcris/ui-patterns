import React from "react";
import { useForm } from "react-hook-form";

import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

interface FormData {
  email: string;
  password: string;
}

export const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: "onChange" });

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-sm mx-auto p-6 border rounded bg-white dark:bg-gray-800 dark:text-gray-100"
    >
      <Input
        label="Email"
        type="email"
        placeholder="exemplo@dominio.pt"
        error={errors.email?.message}
        {...register("email", {
          required: "O email é obrigatório.",
          pattern: {
            value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
            message: "Introduz um email válido.",
          },
        })}
      />

      <Input
        label="Password"
        type="password"
        placeholder="********"
        error={errors.password?.message}
        {...register("password", {
          required: "A password é obrigatória.",
          minLength: { value: 6, message: "Mínimo de 6 caracteres." },
        })}
      />

      <Button type="submit" disabled={!isValid}>
        Submeter
      </Button>
    </form>
  );
};
