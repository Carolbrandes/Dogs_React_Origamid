import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { Input } from "../../components/form/Input";
import { Button } from "../../components/form/Button";
import { UserContext } from "../../userContext";
import { Error } from "../../components/Error";

import styles from "./LoginForm.module.css";
import stylesBtn from "../../components/form/Button.module.css";

export const LoginForm = () => {
  const { userLogin, error, loading } = useContext(UserContext);
  const username = useForm();
  const password = useForm();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        <Error error={error} />
      </form>

      <Link className={styles.esqueceuSenha} to="/login/recuperar-senha">
        Esqueceu a senha?
      </Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se.</p>
        <Link className={stylesBtn.button} to="/login/cadastrar">
          Cadastrar
        </Link>
      </div>
    </section>
  );
};
