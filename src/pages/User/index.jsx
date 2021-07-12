import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { UserHeader } from "./UserHeader";
import { Feed } from "../../components/feed/Feed";
import { UserPhotoPost } from "./UserPhotoPost";
import { UserStatistic } from "./UserStatistic";
import { UserContext } from "../../userContext";

export const User = () => {
  const { data } = useContext(UserContext);
  return (
    <section className="container">
      <UserHeader />

      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar-fotos" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStatistic />} />
      </Routes>
    </section>
  );
};
