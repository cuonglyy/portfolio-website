import { defineStyleConfig } from "@chakra-ui/react";

const MenuItem = defineStyleConfig( {
  variants: {
    'menu-item-active': {
      bg: {
        color: 'gray.500',
      },
    },
  },
});

export default MenuItem