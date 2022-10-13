import { extendTheme } from '@chakra-ui/react'
import Link from './Link.js'
import MenuItem from './MenuItem.js'
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
  MenuItem,
  Text
}

const overrides = {
  styles,
  config,
  components
}

const theme = extendTheme(overrides);

export default theme