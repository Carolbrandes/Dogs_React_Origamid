import React, { useState } from "react";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";
import { useFetch } from "../../hooks/useFetch";
import { COMMENTS_POST } from "../../api";
import { Error } from "../Error";
import styles from "./PhotoCommentsForm.module.css";

export const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = useState("");
  const { request, error } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { url, options } = COMMENTS_POST(id, { comment });
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComments((comments) => [...comments, json]);
      setComment("");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>

      <Error error={error} />
    </form>
  );
};
