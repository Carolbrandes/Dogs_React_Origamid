import React, { useEffect } from "react";
import { STATS_GET } from "../../api";
import { Head } from "../../components/Head";
import { useFetch } from "../../hooks/useFetch";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";
const UserStatsGraphs = React.lazy(() => import("./UserStatsGraphs"));

export const UserStatistic = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const getData = async () => {
      const { url, options } = STATS_GET();
      await request(url, options);
    };

    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data) {
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  } else {
    return null;
  }
};
