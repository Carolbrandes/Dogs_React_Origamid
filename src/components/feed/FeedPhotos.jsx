import React, { useEffect } from "react";
import { PHOTOS_GET } from "../../api";
import { useFetch } from "../../hooks/useFetch";
import { FeedPhotosItem } from "./FeedPhotosItem";
import { Error } from "../Error";
import { Loading } from "../Loading";

import styles from "./FeedPhotos.module.css";

export const FeedPhotos = ({ setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const fetchPhotos = async () => {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { json } = await request(url, options);
      console.log(json);
    };
    fetchPhotos();
  }, []);

  if (error) return <Error error={error} />;

  if (loading) return <Loading />;

  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};
