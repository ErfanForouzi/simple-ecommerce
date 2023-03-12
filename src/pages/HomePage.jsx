import React from "react";
import { FeaturedProducts, Hero, Contact } from "../components";
import { Helmet } from "react-helmet-async";
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      ;
      <Hero />
      <FeaturedProducts />
      <Contact />
    </>
  );
};

export default HomePage;
