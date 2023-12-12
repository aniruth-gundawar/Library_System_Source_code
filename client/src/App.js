import logo from "./logo.svg";
import "./App.css";
import Home from "./Home.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Home />
      <ToastContainer />
    </>
  );
}

export default App;
