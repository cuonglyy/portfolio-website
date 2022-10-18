import React from 'react'
import {
  Container,
  Heading,

} from '@chakra-ui/react'


const Projects = () => {
  return (
    <Container
      id='projects'
      h='50vh'
    >
      <Heading
        size={['xl', 'lg', 'lg']}
        textAlign='center'
        mb={10}
      >
        Projects
      </Heading>
    </Container>
  )
}

export default Projects