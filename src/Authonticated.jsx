import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Channel from "./Pages/Channel/Channel";
import Player from "./Pages/Player/Player";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Context as ThemeContext } from "./Context/Theme";

function Authonticated() {
  const navigate = useNavigate();
  const { theme } = React.useContext(ThemeContext);
  // if (theme) {
  //   document.querySelector("#root").classList.add("dark");
  // } else {
  //   document.querySelector("#root").classList.remove("dark");
  // }
  return (
    <div className={`container ${theme ? "dark" : ""}`}>
      <Header />
      <main className={`main ${theme ? "dark" : ""}`}>
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
