import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../userContext";
import { PhotoCommentsForm } from "./PhotoCommentsForm";
import styles from "./PhotoComments.module.css";

export const PhotoComments = ({ id, commentsList }) => {
  const { login } = useContext(UserContext);
  const [comments, setComments] = useState(() => commentsList);
  const commentSection = useRef(null);

  useEffect(() => {
    commentSection.current.scrollTop = commentSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentSection} className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>

      {login && <PhotoCommentsForm id={id} setComments={setComments} />}
    </>
  );
};
