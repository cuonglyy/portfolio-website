import { extendTheme } from '@chakra-ui/react'
import "@fontsource/open-sans"
import Link from './Link.js'
import Heading from './Heading.js'
import Divider from './Divider.js'
import Text from './Text.js'

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
  Link,
  Heading,
  Divider,
  Text,
}

const overrides = {
  styles,
  config,
  components
}

const theme = extendTheme(overrides);

export default theme