import "./App.scss";
import React from "react";
import Authonticated from "./Authonticated";
import Unauthonticated from "./Unauthonticated";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context as LoginContext } from "./Context/Login";

function App() {
  const { token } = React.useContext(LoginContext);
  const isLoggined = token;

  if (token) {
    return <Authonticated />;
  } else {
    return <Unauthonticated />;
  }
}

export default App;
