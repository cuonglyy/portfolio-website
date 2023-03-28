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
  Button,
} from "@chakra-ui/react";
import Typed from "react-typed";
import ME from "../../assets/pic.png";
import CTA from "./CTA.jsx";
import Socials from "./Socials.jsx";
import desktopHero from "../../assets/image-homepage-hero.jpg";
import arrowIcon from "../../assets/icons/down-arrows.svg";

const About = () => {
  return (
    {
      /* 
        Saving this for later
          
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
      <Container id="heading" px="0" maxW="111rem">
        <Box
          position="relative"
          bgImage={desktopHero}
          bgPosition="center"
          h="60rem"
        >
          <Box
            position="absolute"
            backgroundColor="white"
            display="inline-block"
            bottom={0}
            maxW="50rem"
          >
            <Heading
              fontWeight="700"
              fontSize="4rem"
              m="5.5rem 4.5rem 5.5rem 0"
            >
              Hello, I'm Cuong and I'm a
              <Typed
                strings={[
                  " Front-End Developer.",
                  " Software Engineer.",
                  " Badminton Player.",
                  " Cat and Dog Lover.",
                ]}
                typeSpeed={40}
                backSpeed={35}
                loop
              >
                <Text
                  as="span"
                  fontWeight="700"
                  fontSize={["2xl", "2xl", "4rem"]}
                />
              </Typed>
            </Heading>
            <Button variant="primary">About Me</Button>
          </Box>
        </Box>
      </Container>
    )
  );
};

export default About;
