import React from "react";
import { Image } from "../Image";
import styles from "./FeedPhotosItem.module.css";

export const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  console.log(photo);
  const handleClick = (photo) => setModalPhoto(photo);

  return (
    <li className={styles.photo} onClick={() => handleClick(photo)}>
      <Image src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </li>
  );
};
