import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Channel from "./Pages/Channel/Channel";
import Player from "./Pages/Player/Player";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function Authonticated() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/channel/:channelId" element={<Channel />} />
          <Route path="/video/:videoId" element={<Player />} />
          <Route
            path="*"
            element={
              <div className="container mt-5">
                <h1>Ilhom aka bularni qilish vazifa emas ediku 😅</h1>
                <Button onClick={() => navigate("/")} variant="contained">
                  Home pagega qaytish
                </Button>
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default Authonticated;
