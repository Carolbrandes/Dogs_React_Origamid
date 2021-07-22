import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PHOTO_MAIN_GET } from "../../api";
import { useFetch } from "../../hooks/useFetch";
import { Loading } from "../Loading";
import { PhotoContent } from "./PhotoContent";
import { Error } from "../Error";
import { Head } from "../Head";

export const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_MAIN_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <section className="mainContainer container">
        <Head title={data.photo.title} />
        <PhotoContent single data={data} />
      </section>
    );
  } else return null;
};
