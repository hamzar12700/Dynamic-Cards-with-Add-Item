import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AddProduct from "./Component/AddProduct";
import HeroSection from "./Component/HeroSection";
import "./App.css";

function App() {
  const [addProduct, setAddProduct] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<HeroSection addProduct={addProduct} />} />
      <Route path="/addProduct" element={<AddProduct addProduct={addProduct} setAddProduct={setAddProduct} />} />
    </Routes>
  );
}

export default App;
