import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: {
    body: {
      fontFamily: `'Open Sans', sans-serif`,
    },
    html: {
      scrollBehavior: "smooth"
    }
  },
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const components = {
  Link: {
    baseStyle: {
      _hover: {
        textDecoration: "none",
      },
    }
  },
}

const overrides = {
  styles,
  config,
  components
}

const theme = extendTheme(overrides);

export default theme