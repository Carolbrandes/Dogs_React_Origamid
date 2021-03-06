import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { LoginCreate } from "./LoginCreate";
import { LoginPasswordLost } from "./LoginPasswordLost";
import { LoginPasswordReset } from "./LoginPasswordReset";
import { UserContext } from "../../userContext";
import { NotFound } from "../NotFound";

import styles from "./Login.module.css";

export const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="cadastrar" element={<LoginCreate />} />
          <Route path="recuperar-senha" element={<LoginPasswordLost />} />
          <Route path="resetar-senha" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};
