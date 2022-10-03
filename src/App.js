import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar } from "./common/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Products } from "./components/Products";
import { Login } from "./components/Login";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
