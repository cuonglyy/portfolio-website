import React from 'react'
import {
  Container,
  Grid,
  GridItem,
  Heading,
  Box,

} from '@chakra-ui/react'

const Skills = () => {
  return (
    <Container
      id='skills'
      pt={30}
      maxW={['container.sm', 'container.md', 'container.lg']}
    >
      <Heading
        size={['lg', 'lg', 'lg']}
        textAlign='center'
        mb={10}
      >
        Skills
      </Heading>
      <Grid
        gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr']}
        gap={[4, 8, 12]}
        textAlign='center'
      >
        <GridItem>
          <Box>
            <Heading size='md'>Frontend</Heading>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Heading size='md'>Backend</Heading>
          </Box>
        </GridItem>
        <GridItem
          gridColumn={['auto', 'span 2', 'auto']}
        >
          <Box>
            <Heading size='md'>Other</Heading>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Skills