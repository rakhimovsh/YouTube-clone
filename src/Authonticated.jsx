import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Channel from "./Pages/Channel/Channel";
import Player from "./Pages/Player/Player";
import { Route, Routes } from "react-router-dom";

function Authonticated() {
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
              <h1 className="container mt-5">
                Ilhom aka bularni qilish vazifa emas ediku 😅
              </h1>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default Authonticated;
