import React from 'react'
import {
  Container,
  Heading,

} from '@chakra-ui/react'


const Projects = () => {
  return (
    <Container
      id='projects'
      scrollMarginTop={[185, 190, 190]}
      h='50vh'
      my={[75, 85, 85]}
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