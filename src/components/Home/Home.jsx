import React from "react";
import {
  Container,
  Flex,
  Grid,
  Image,
  Box,
  Heading
} from '@chakra-ui/react'
import ME from '../../assets/pic.png'

const Home = () => {
  return (
    <Container
      p='5em 0'
      maxW='container.sm'
      h='auto'
    >
      <Grid
        templateColumns='1fr 2fr'
        gap={6}
      >
        <Box
          bg='blue.100'
          boxSize='250px'
          overflow='hidden'
          borderRadius='full'
        >
          <Image
            src={ME}
            alt='Cuong Ly'
            h='550px'
            objectFit='cover'
            objectPosition='40% 60%'
          />
        </Box>
        <Flex
          flexDir='column'
          gap={2}
        >
          <Heading size='xl'>
            Hello, I'm Cuong.
          </Heading>
          <Heading size='xl'>
            Full-Stack Developer
          </Heading>
        </Flex>
      </Grid>
    </Container>
  );
};

export default Home;
