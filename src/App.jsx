import { useState } from "react";

import "./App.css";

import { NavLink, Route, Routes } from "react-router-dom";
import AddProduct from "./Component/AddProduct";
import HeroSection from "./Component/HeroSection";

function App() {

    const [addProduct, setAddProduct] = useState([]);
  return (
    <>
      <Routes>
        <Route path="/" element={<HeroSection addProduct={addProduct} />} />
        <Route
          path="/addProduct"
          element={<AddProduct addProduct={addProduct} setAddProduct={setAddProduct} />}
        />
      </Routes>
    </>
  );
}

export default App;
