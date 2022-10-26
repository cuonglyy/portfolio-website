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
import {
  FaReact,
  FaNodeJs,
  FaGitAlt 
} from 'react-icons/fa'
import { SiJavascript, SiChakraui } from 'react-icons/si'
import { IoLogoHtml5, IoLogoCss3 } from 'react-icons/io'
import { AiOutlineGithub } from 'react-icons/ai'
import { ImNpm } from 'react-icons/im'

const Skills = () => {
  return (
    <Container
      id='skills'
      px={[25, 35, 35]}
      maxW={['325px', 'container.md', 'container.lg']}
    >
      <Heading
        size={['xl', 'lg', 'lg']}
        textAlign='center'
        mb={10}
      >
        Skills
      </Heading>
      <Grid
        templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr']}
        gap={[6, 10, 16]}
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
              <ListItem fontSize='lg'>
                <ListIcon fontSize='xl' as={IoLogoHtml5} color='orange.400' />
                HTML5
              </ListItem>
              <ListItem fontSize='lg'>
                <ListIcon fontSize='xl' as={IoLogoCss3} color='blue.400' />
                CSS3
              </ListItem>
              <ListItem fontSize='lg'>
                <ListIcon fontSize='xl' as={SiChakraui} color='teal.300' />
                Chakra-UI
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
                <ListIcon fontSize='xl' as={FaNodeJs} color='green.300' />
                Node.js
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
                Tools & Technologies
              </Heading>
            </Box>
            <List spacing={4}>
              <ListItem fontSize='lg'>
                <ListIcon fontSize='2xl' as={AiOutlineGithub} color='blue.200' />
                GitHub
              </ListItem>
              <ListItem fontSize='lg'>
                <ListIcon fontSize='2xl' as={FaGitAlt} color='orange.400' />
                Git
              </ListItem>
              <ListItem fontSize='lg'>
                <ListIcon fontSize='xl' as={ImNpm} color='yellow.400' />
                NPM
              </ListItem>
            </List>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default Skills