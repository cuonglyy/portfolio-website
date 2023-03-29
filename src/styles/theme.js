import { extendTheme } from '@chakra-ui/react'
import Link from './Link.js'
import Heading from './Heading.js'
import Divider from './Divider.js'
import Text from './Text.js'
import Button from './Button.js'

const styles = {
  global: {
    body: {
      fontSize: "1.6rem",
      fontFamily: `'Public Sans', sans-serif`,
      minHeight: '100vh',
      bgColor: '#FAFAFA',
    },
    html: {
      scrollBehavior: "smooth",
      fontSize: "62.5%",
    },
  },
}

const components = {
  Link,
  Heading,
  Divider,
  Text,
  Button,
}

const overrides = {
  styles,
  components
}

const theme = extendTheme(overrides);

export default theme