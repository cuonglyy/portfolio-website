import React from "react";
import Navbar from "../components/Navbar.jsx";
import About from "../components/About/About";
import Main from "../components/Main"
import { Box } from "@chakra-ui/react";

function Home() {
  return (
    <>
      <Navbar />
      <Main>
        <About />
      </Main>
    </>
  );
}

export default Home;
