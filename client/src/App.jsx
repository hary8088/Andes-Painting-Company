import { BrowserRouter as Router } from "react-router-dom";
import Routers from "./router.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Routers />
      </Router>
    </>
  );
}

export default App;
