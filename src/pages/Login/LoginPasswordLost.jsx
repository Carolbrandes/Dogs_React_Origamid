import React from "react";
import { Input } from "../../components/form/Input";
import { Button } from "../../components/form/Button";
import { Error } from "../../components/Error";
import { useForm } from "../../hooks/useForm";
import { useFetch } from "../../hooks/useFetch";
import { PASSWORD_LOST } from "../../api";
import { Head } from "../../components/Head";

export const LoginPasswordLost = () => {
  const email = useForm();
  const { data, loading, error, request } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: email.value,
        url: window.location.href.replace("recuperar", "resetar"),
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  };

  return (
    <section className="animeLeft">
      <Head title="Recupere sua senha" />
      <h1 className="title">Perdeu a senha?</h1>

      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...email} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
};
