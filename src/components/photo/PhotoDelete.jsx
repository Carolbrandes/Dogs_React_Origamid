import React from "react";
import { PHOTO_DELETE } from "../../api";
import { useFetch } from "../../hooks/useFetch";
import styles from "./PhotoDelete.module.css";

export const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  const handleClick = async () => {
    const confirm = window.confirm("Deseja realmente deletar essa foto?");

    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  };
  return (
    <>
      {loading ? (
        <button disabled className={styles.delete}>
          Deletando...
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};
