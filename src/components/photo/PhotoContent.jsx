import React from "react";
import { Link } from "react-router-dom";
import { PhotoComments } from "./PhotoComments";
import styles from "./PhotoContent.module.css";

export const PhotoContent = ({ data }) => {
  console.log(data);

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={data[0].src} alt={data[0].title} />
      </div>

      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            <Link to={`/perfil/${data[0].author}`}>@{data[0].author}</Link>
            <span className={styles.visualizacoes}>{data[0].acessos}</span>
          </p>

          <h1 className="title">
            <Link to={`/foto/${data[0].id}`}>{data[0].title}</Link>
          </h1>

          <ul className={styles.attributes}>
            <li>{data[0].peso} kg</li>
            <li>{data[0].idade} anos</li>
          </ul>
        </div>
      </div>

      <PhotoComments id={data[0].id} />
    </div>
  );
};
