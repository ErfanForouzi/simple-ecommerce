import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { PageHero } from "../components";
import {CartContent} from "../components/cart";
import { Helmet } from "react-helmet-async";
const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <Helmet>
          <title>Cart Page</title>
        </Helmet>
        ;
        <div className="empty">
          <h2>Your Cart Is Empty</h2>
          <Link className="btn" to="/products">
            Fill it
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <PageHero title="cart" />
      <Helmet>
        <title>Cart Page</title>
      </Helmet>
      ;
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
