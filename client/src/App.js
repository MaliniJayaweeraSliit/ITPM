import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Requestscreen from "./screens/Requestscreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
        <Route path="/home" exact Component={Homescreen}/>
        <Route path='/book/:requestid' exact Component={Requestscreen} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
