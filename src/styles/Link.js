import { defineStyleConfig } from "@chakra-ui/react";

const Link = defineStyleConfig({
  /* =====  
  
      Not working ):<
  
  ====== */
  baseStyle: {
    textTransform: 'uppercase',
    fontSize: "1.2rem",
    letterSpacing: "0.2rem",
    position: "relative",
    color: "#00000",
    _hover: {
      color: "#00000",
      _before: {
        transform: "scaleX(1)",
      },
    },

    _before: {
      content: `""`,
      position: "absolute",
      width: "100%",
      h: "0.2rem",
      bottom: "0",
      left: "0",
      bgColor: "#00000",
      transform: "scaleX(0)",
      transition: "transform 0.3s ease",
    },
  },
});

export default Link;
