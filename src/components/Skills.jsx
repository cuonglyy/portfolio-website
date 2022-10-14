import React from 'react'
import {
  Container,
  Grid,
  GridItem,
  Heading,
  Box,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { FaReact } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'

const Skills = () => {
  return (
    <Container
      id='skills'
      pt={30}
      maxW={['325px', 'container.md', 'container.lg']}
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
          <Box
            border='1px solid'
            borderRadius='6px'
            py={5}
          >
            <Box 
              mb={4}
              px={5}
              borderBottom='1px solid'
            >
              <Heading fontSize='24px'>
                Frontend
              </Heading>
            </Box>
            <List spacing={4}>
              <ListItem fontSize='lg'>
                <ListIcon as={FaReact} color='blue.300' />
                React
              </ListItem>
              <ListItem fontSize='lg'>
                <ListIcon fontSize='xl' as={SiJavascript} color='yellow.400' />
                JavaScript
              </ListItem>
            </List>
          </Box>
        </GridItem>
        <GridItem>
          <Box
            border='1px solid'
            borderRadius='6px'
            py={5}
          >
            <Box 
              mb={4}
              px={5}
              borderBottom='1px solid'
            >
              <Heading fontSize='24px'>
                Backend
              </Heading>
            </Box>
            <List spacing={4}>
              <ListItem fontSize='lg'>
                <ListIcon as={FaReact} color='blue.300' />
                React
              </ListItem>
              <ListItem fontSize='lg'>
                <ListIcon fontSize='xl' as={SiJavascript} color='yellow.400' />
                JavaScript
              </ListItem>
            </List>
          </Box>
        </GridItem>
        <GridItem
          gridColumn={['auto', 'span 2', 'auto']}
          w={['auto', '50%', 'auto']}
          m={[0, 'auto', 0]}
        >
          <Box
            border='1px solid'
            borderRadius='6px'
            py={5}
          >
            <Box 
              mb={4}
              px={5}
              borderBottom='1px solid'
            >
              <Heading fontSize='24px'>
                Others
              </Heading>
            </Box>
            <List spacing={4}>
              <ListItem fontSize='lg'>
                <ListIcon as={FaReact} color='blue.300' />
                React
              </ListItem>
              <ListItem fontSize='lg'>
                <ListIcon fontSize='xl' as={SiJavascript} color='yellow.400' />
                JavaScript
              </ListItem>
            </List>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Skills