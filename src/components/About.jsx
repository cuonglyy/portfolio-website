import React from 'react'
import {
  Container,
  Flex,
} from '@chakra-ui/react'
import AnimatedText from './AnimatedText'


const About = () => {
  return (
    <Container
      p='5em 0'
      maxW='container.md'
    >
      <Flex
        justifyContent='center'
      >
        Hello, this is an animated text
      </Flex>
    </Container>
  )
}

export default About