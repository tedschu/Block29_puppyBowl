import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/pages/AllPlayers";
import NavBar from "./components/navigation/NavBar";
import NewPlayerForm from "./components/pages/NewPlayerForm";
import SinglePlayer from "./components/pages/SinglePlayer";
import React from "react";
import "./index.css";
import { useGetPlayersQuery } from "./redux/api/api";

function App() {
  const { isLoading } = useGetPlayersQuery();

  return (
    <>
      <NavBar />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Routes>
          <Route index element={<AllPlayers />} />
          <Route path={"/players/:id"} element={<SinglePlayer />} />
          <Route path={"/newplayerform"} element={<NewPlayerForm />} />
        </Routes>
      )}
    </>
  );
}

export default App;
