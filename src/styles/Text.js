import { defineStyleConfig } from "@chakra-ui/react";
import "@fontsource/montserrat"

const Text = defineStyleConfig( {
  baseStyle: {
    letterSpacing: '0.2px',
  },
  variants: {
    'montserrat-font': {
      fontFamily: 'Montserrat, sans-serif'
    }
  }
});

export default Text