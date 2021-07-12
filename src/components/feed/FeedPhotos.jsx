import React, { useEffect } from "react";
import { PHOTOS_GET } from "../../api";
import { useFetch } from "../../hooks/useFetch";
import { FeedPhotosItem } from "./FeedPhotosItem";
import { Error } from "../Error";
import { Loading } from "../Loading";

import styles from "./FeedPhotos.module.css";

export const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch();
  console.log(user);

  useEffect(() => {
    const fetchPhotos = async () => {
      const total = 3;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);

      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }
    };
    fetchPhotos();
  }, [request, page, user, setInfinite]);

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
