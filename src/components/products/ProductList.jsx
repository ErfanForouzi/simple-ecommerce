import React from "react";
import { useFilterContext } from "../../context/filter_context";
import GridView from "../GridView";
import ListView from "../ListView";
import Loading from "../Loading";

const ProductList = () => {
  const {
    filter_products: products,
    grid_view,
    loading,
  } = useFilterContext();
  if (loading) {
    return <Loading />;
  }

  if (grid_view === false) {
    return <ListView products={products} />;
  }
  return <GridView products={products}></GridView>;
};

export default ProductList;
