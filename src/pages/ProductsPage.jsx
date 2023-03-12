import React from "react";
import styled from "styled-components";
import { Filters, Sort, PageHero } from "../components";
import { Helmet } from "react-helmet-async";
import ProductList from "../components/products/ProductList";

const ProductsPage = () => {
  return (
    <main>
      <Helmet>
        <title>Products Page</title>
      </Helmet>
      ;
      <PageHero title="products" />
      <Wrapper className="page">
        <div className="products section section-center">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
