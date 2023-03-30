import { defineStyleConfig } from "@chakra-ui/react";

const Link = defineStyleConfig({
  baseStyle: {
    textTransform: "uppercase",
    fontSize: "1.2rem",
    letterSpacing: "0.2rem",
    _hover: {
      textDecoration: 'none',
    },
  },
});

export default Link;
