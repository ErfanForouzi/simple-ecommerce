import React from "react";
import { Navbar, Sidebar, Footer } from "./components";
import { Routing } from "./routing";

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routing />
      <Footer />
    </>
  );
};

export default App;
