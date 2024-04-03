import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AddProduct from "./pages/AddProduct.jsx";
import Login from "./pages/Login.jsx";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductData } from "./features/productSlice.js";
import Cart from "./pages/Cart.jsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllProduct = async () => {
      const product = await fetch(
        `${import.meta.env.VITE_APP_SERVER_DOMAIN}/getAllProduct`
      );
      const data = await product.json();
      // console.log(data);
      dispatch(setProductData(data));
      // console.log(data.msg);
    };
    fetchAllProduct();
  }, []);

  const productData = useSelector((state) => state.product);
  // console.log(productData);

  return (
    <BrowserRouter>
      <Header />
      <Toaster />
      <div className="pt-16 min-h-[calc(100vh)] h-full">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
