import React from "react";
import {
  Container,
  Image,
  Box,
  Heading,
  Text,
  Button,
  Stack,
  VStack,
} from "@chakra-ui/react";
import Typed from "react-typed";
import ME from "../../assets/pic.png";
import desktopHero from "../../assets/image-homepage-hero-desktop.jpg";
import tabletHero from "../../assets/image-homepage-hero-tablet.jpg";
import mobileHero from "../../assets/image-homepage-hero-mobile.jpg";
import Contact from "../Contact.jsx";

const About = () => {
  const scrollToAbout = (selector, offset) => {
    window.scrollTo({
      behavior: "smooth",
      top:
        document.querySelector(selector).getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        parseInt(offset),
    });
  };

  return (
    <>
      <Container id="intro" px="0" maxW="111rem" mb={["9.6rem", "9.6rem", "15rem"]}>
        <Box
          position={["relative", "relative", "relative"]}
          bgImage={[mobileHero, tabletHero, desktopHero]}
          bgPosition={["center top", "center", "center"]}
          bgRepeat="no-repeat"
          h="60rem"
        >
          <Box
            position={["absolute", "absolute", "absolute"]}
            bgColor="#FAFAFA"
            display={["block", "inline-block", "inline-block"]}
            bottom={0}
            maxW="40rem"
            h={["29rem", "25rem", "28rem"]}
          >
            <Heading
              fontWeight="700"
              fontSize="4rem"
              m={["0 0 0 0", "2rem 1rem 0 0", "4rem 1rem 0 0"]}
            >
              Hello, I'm Cuong and I'm a&nbsp;
              <Typed
                strings={[
                  "Front-End Developer.",
                  "Software Engineer.",
                  "Badminton Player.",
                  "Cat and Dog Lover.",
                ]}
                typeSpeed={40}
                backSpeed={35}
                loop
              >
                <Text
                  as="span"
                  fontWeight="700"
                  fontSize={["4rem", "4rem", "4rem"]}
                />
              </Typed>
            </Heading>
            <Button
              onClick={() => scrollToAbout("#about", "198")}
              position="absolute"
              bottom={0}
              variant="primary"
            >
              About Me
            </Button>
          </Box>
        </Box>
      </Container>
      <Container px={0} mb={["11.5rem", "9.6rem", "15rem"]} maxW="111rem" id="about">
        <Stack flexDirection={['column', 'row', 'row']} justifyContent="center" gap={["0", "4rem", "4rem", "15.5rem"]}>
          <Box bgGradient="linear(to-b, #E9F8FF, #C1E3FF)">
            <Image
              src={ME}
              h="60rem"
              objectFit="cover"
              w={["auto", "28.1rem", "39rem"]}
              align='center'
            />
          </Box>
          <VStack
            alignItems="flex-start"
            justifyContent="space-around"
            h={["62rem", "60rem", "60rem"]}
            borderTop="2px"
            borderBottom="2px"
            borderColor="#EAEAEB"
          >
            <Box>
              <Heading as="h1" fontSize="4rem" mb="2.8rem">
                About Me
              </Heading>
              <Text w={["31.1rem", "33.9rem", "33.9rem"]} lineHeight="3rem">
                I'm a dynamic software engineer with a passion in developing
                efficient user-friendly web applications, looking for a role in
                Front-End Development. I currently use React, ChakraUI,
                JavaScript, HTML5, and CSS3. I'm currently residing in San Jose,
                CA, but I'm also available for remote work. Since you're already
                here, I'd love for you to check out my work!
              </Text>
            </Box>
            <Button variant="secondary">Go to Portfolio</Button>
          </VStack>
        </Stack>
      </Container>
      <Contact />
    </>
  );
};

export default About;
