import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserHeader } from "./UserHeader";
import { Feed } from "../../components/feed/Feed";
import { UserPhotoPost } from "./UserPhotoPost";
import { UserStatistic } from "./UserStatistic";

export const User = () => {
  return (
    <section className="container">
      <UserHeader />

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar-fotos" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStatistic />} />
      </Routes>
    </section>
  );
};
