import React from 'react'
import {
  Container,
  Heading,
} from '@chakra-ui/react'



const About = () => {
  return (
    <Container
      mt={16}
      maxW='container.md'
    >
      <Heading size='md' textAlign='center'>Get to know</Heading>
      <Heading size='xl' textAlign='center'>About Me</Heading>
    </Container>
  )
}

export default About