import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar } from "./common/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Products } from "./components/Products";
import { Login } from "./components/Login";
import { createContext, useState } from "react";
import img4 from "../src/assets/images/img4.jpg";
import img2 from "../src/assets/images/img2.jpg";
import img3 from "../src/assets/images/img3.jpg";

export const ProductlistContext = createContext();

function App() {
  const [productlist, setproductList] = useState([
    {
      company: "laptop",
      name: "iphone-x",
      img: img2,
      price: "234",
    },
    {
      company: "apple",
      name: "samsung",
      img: img3,
      price: "234",
    },
    {
      company: "laptop",
      name: "redmi",
      img: img4,
      price: "234",
    },
    {
      company: "laptop",
      name: "iphone-x",

      img: img2,
      price: "234",
    },
    {
      company: "watch",
      name: "Macbook",
      img: img4,
      price: "234",
    },
    {
      company: "watch",
      name: "iphone-x",
      img: img3,
      price: "234",
    },
    {
      company: "mobile",
      name: "ipad",
      img: img2,
      price: "234",
    },
    {
      company: "mobile",
      name: "iphone-x",
      img: img4,
      price: "234",
    },
    {
      company: "computer",
      name: "nokia",
      img: img3,
      price: "234",
    },
    {
      company: "computer",
      name: "ipad",
      img: img2,
      price: "234",
    },
  ]);
  return (
    <ProductlistContext.Provider value={{ productlist, setproductList }}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </HashRouter>
    </ProductlistContext.Provider>
  );
}

export default App;
