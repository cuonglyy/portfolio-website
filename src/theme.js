import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: {
    body: {
      fontFamily: `'Open Sans', sans-serif`
    },
    Link: {
      textDecoration: 'none'
    }
  }
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const overrides = {
  styles,
  config
}

const theme = extendTheme(overrides);

export default theme