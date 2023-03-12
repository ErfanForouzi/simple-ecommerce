import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {  HelmetProvider } from "react-helmet-async";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </BrowserRouter>
);
