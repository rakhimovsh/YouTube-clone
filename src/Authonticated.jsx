import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";

function Authonticated() {
  return (
    <div className="container">
      <Header />
      <main>
        <Navbar />
      </main>
    </div>
  );
}

export default Authonticated;
