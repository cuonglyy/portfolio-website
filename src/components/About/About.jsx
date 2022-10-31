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
import Socials from './Socials.jsx'

const About = () => {
  return (
    <Container
      id='about'
      scrollMarginTop={105}
      pt='80px'
      maxW={['container.md', 'container.sm', 'container.md']}
      mb={[75, 85, 85]}
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
            p={['0', '40px 0', '40px 0']}
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
                "Front-End Developer.",
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
            <CTA pt={[4, 6, 8]}/>
          </Flex>
        </GridItem>
      </Grid>
      <Container
        display='flex'
        flexDir='column'
        textAlign='center'
        maxW={['container.sm', '2xl', '3xl']}
        px={10}
        mt={20}
      >
        <Text
          fontSize='lg'
          variant='montserrat-font'
        >
          I'm a dynamic software engineer with a passion in developing efficient user-friendly web applications with organized backend services.
          I'm currently residing in San Jose, CA.
        </Text>
        <Socials/>
      </Container>
    </Container>
    
  );
};

export default About;
