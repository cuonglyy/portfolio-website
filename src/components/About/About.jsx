import React from "react";
import {
  Container,
  Image,
  Box,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
} from "@chakra-ui/react";
import Typed from "react-typed";
import ME from "../../assets/pic.png";
import desktopHero from "../../assets/image-homepage-hero.jpg";
import Contact from "../Contact.jsx";
import Footer from "../Footer.jsx";

const About = () => {
  return (
    <>
      <Container id="intro" px="0" maxW="111rem" mb="15rem">
        <Box
          position="relative"
          bgImage={desktopHero}
          bgPosition="center"
          h="60rem"
        >
          <Box
            position="absolute"
            bgColor="#FAFAFA"
            display="inline-block"
            bottom={0}
            maxW="40rem"
            h="30rem"
          >
            <Heading fontWeight="700" fontSize="4rem" m="5.5rem 1rem 0 0">
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
                  fontSize={["2xl", "2xl", "4rem"]}
                />
              </Typed>
            </Heading>
            <Button position="absolute" bottom={0} variant="primary">
              About Me
            </Button>
          </Box>
        </Box>
      </Container>
      <Container id="about" px={0} mb="15rem" maxW="111rem">
        <HStack justifyContent="center" gap={["6.9rem", "6.9rem", "12.5rem"]}>
          <Box
            bgGradient="linear(to-b, #E9F8FF, #C1E3FF)"
            flexShrink="0"
            width={["28.1rem", "28.1rem", "39rem"]}
          >
            <Image src={ME} />
          </Box>
          <VStack
            alignItems="flex-start"
            justifyContent="space-around"
            h="60rem"
            borderTop="2px"
            borderBottom="2px"
            borderColor="#EAEAEB"
          >
            <Box>
              <Heading as="h1" fontSize="4rem" mb="2.8rem">
                About Me
              </Heading>
              <Text w="33.9rem" lineHeight="3rem">
                I'm a dynamic software engineer with a passion in developing
                efficient user-friendly web applications, looking for a role in
                Front-End Development. I currently use React, ChakraUI, JavaScript, HTML5,
                and CSS3. I'm currently residing in San Jose, CA, but I'm also
                available for remote work. Since you're already here, I'd love
                for you to check out my work!
              </Text>
            </Box>
            <Button variant="secondary">Go to Portfolio</Button>
          </VStack>
        </HStack>
      </Container>
      <Contact />
      <Footer />
    </>
  );
};

export default About;
