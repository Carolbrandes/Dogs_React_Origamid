import React, { useEffect } from "react";
import { PHOTOS_GET } from "../../api";
import { useFetch } from "../../hooks/useFetch";
import { Error } from "../Error";
import { Loading } from "../Loading";
import { PhotoContent } from "../photo/PhotoContent";
import styles from "./FeedModal.module.css";

export const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const fetchPhoto = async () => {
      const { url, options } = PHOTOS_GET(photo.id);
      await request(url, options);
    };

    fetchPhoto();
  }, [photo]);

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) setModalPhoto(null);
  };

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};
