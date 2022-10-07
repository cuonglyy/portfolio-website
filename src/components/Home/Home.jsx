import React from "react";
import {
  Container,
  Flex,
  Grid,
  Image,
  Box,
  Heading,
  Text,
  GridItem
} from '@chakra-ui/react'
import Typed from 'react-typed'
import ME from '../../assets/pic.png'
import CTA from './CTA.jsx'

const Home = () => {
  return (
    <Container
      p='5em 0'
      maxW={['container.md', 'container.sm', 'container.md']}
    >
      <Grid
        templateColumns={['1.1fr', '1fr 1.2fr', '1fr 1.1fr']}
        gap={[4, 6, 10]}
        alignItems={['center' ,'center', 'center']}
        justifyItems={['center', 'normal', 'normal']}
      >
        <GridItem
          ml={['none', 'auto', 'auto']}
        >
          <Box
            bg='blue.100'
            boxSize={['200px', '200px', '250px']}
            overflow='hidden'
            borderRadius='full'
          >
            <Image
              src={ME}
              alt='Cuong Ly'
              h={['500px', '500px' ,'550px']}
              objectFit='cover'
              objectPosition='40% 60%'
            />
          </Box>
        </GridItem>
        <GridItem
          width='100%'
        >
          <Flex
            flexDir='column'
            p={['0', '2.5em 0', '2.5em 0']}
            gap={[2, 1, 2]}
            alignItems={['center', 'flex-start', 'flex-start']}
          >
            <Heading 
              size={['xl' ,'xl', 'xl']}
            >
              Hello, I'm Cuong.
              </Heading>
            <Typed
              strings={[
                "Full-Stack Developer.",
                "Software Engineer.",
                "Badminton Player.",
                "Cat and Dog Lover.",
              ]}
              typeSpeed={35}
              backSpeed={25}
              loop
            >
              <Text 
                as='span'
                fontWeight='bold'
                fontSize={['2xl' ,'2xl', '3xl']}
              />
            </Typed>
            <CTA 
              pt={[4, 6, 8]}
            />
          </Flex>
        </GridItem>

      </Grid>
    </Container>
  );
};

export default Home;
