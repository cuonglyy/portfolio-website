import { defineStyleConfig } from "@chakra-ui/react";

const MenuItem = defineStyleConfig( {
  variants: {
    'menu-item-active': {
      bg: {
        color: 'gray.200',
      },
    },
  },
});

export default MenuItem