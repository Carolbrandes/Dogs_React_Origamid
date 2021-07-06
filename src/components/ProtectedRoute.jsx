import React, { useContext } from "react";
import { UserContext } from "../userContext";
import { Route, Navigate } from "react-router-dom";

export const ProtectedRoute = (props) => {
  const { login } = useContext(UserContext);

  if (login === true) return <Route {...props} />;
  else if (login === false) return <Navigate to="/login" />;
  else return null;
};
