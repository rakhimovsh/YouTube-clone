import "./App.scss";
import Authonticated from "./Authonticated";
import Unauthonticated from "./Unauthonticated";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Authonticated />
      <Unauthonticated />
    </>
  );
}

export default App;
