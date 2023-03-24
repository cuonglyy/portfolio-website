import React from "react";
import Navbar from "../components/Navbar.jsx";
import About from "../components/About/About";
import { Box } from "@chakra-ui/react";

function Home() {
  return (
    <>
      <Navbar />
      <About />
    </>
  );
}

export default Home;
