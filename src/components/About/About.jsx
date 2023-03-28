import React from "react";
import {
  Container,
  Flex,
  Grid,
  Image,
  Box,
  Heading,
  Text,
  GridItem,
} from "@chakra-ui/react";
import Typed from "react-typed";
import ME from "../../assets/pic.png";
import CTA from "./CTA.jsx";
import Socials from "./Socials.jsx";
import desktopHero from "../../assets/image-homepage-hero.jpg";

const About = () => {
  return (
    {
      /* 
        Saving this for later
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
            as="span"
            fontWeight="bold"
            fontSize={["2xl", "2xl", "3xl"]}
          />
      */
    },
    {
      /*
          <Text>
            I'm a dynamic software engineer with a passion in developing efficient
            user-friendly web applications. I'm currently residing in San Jose,
            CA.
          </Text>
      */
    },
    (
      <Container id="heading" px="0" maxW="auto">
        <Box>
          <Image
            src={desktopHero}
            alt="An example of one of my projects being displayed on a monitor"
            mx="auto"
          />
          <Heading backgroundColor="white" display="inline-block" position='relative' top="-5rem">Hello, I'm Cuong</Heading>
        </Box>
      </Container>
    )
  );
};

export default About;
