import { defineStyleConfig } from '@chakra-ui/react'

const Link = defineStyleConfig({
  baseStyle: {
    _hover: {
      textDecoration: "none",
    },
    letterSpacing: '1px'
  },
  variants: {
    'nav-link': {
      _hover: {
        color: 'white',
        textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff'
      },
    },
    'nav-link-active-dark': {
      color: 'white',
      textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff',
    },
    'nav-link-active-light': {
      color: 'black',
      textShadow: '0 0 9px #000'
    },
    'menu-link-active': {

    }
  }
});

export default Link