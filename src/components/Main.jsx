import React from "react";
import { Box } from "@chakra-ui/react";

/* 
    This component is meant to give semantic HTML for each page
*/
function Main(props) {
  return (
    <Box as="main" mx={["3.2rem", "4rem", "16.5rem"]}>
      {props.children}
    </Box>
  );
}

export default Main;
