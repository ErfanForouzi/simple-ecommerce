import { Routes, Route } from "react-router-dom";
import { About, Cart, Home, Product, Products, Error } from "../pages";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<Product />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
