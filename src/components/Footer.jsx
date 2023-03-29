import React from "react";
import { Box, Link, HStack } from "@chakra-ui/react";
import Socials from './About/Socials'

function Footer() {
  return (
    <Box
      as="footer"
      display="flex"
      alignItems="center"
      justifyContent='space-between'
      p={["5.6rem 13.6rem", "2.8rem 4rem", "2.8rem 16.5rem"]}
      bgColor="#33323D"
      color="white"
    >
      <HStack spacing='4rem'>
        <Link
          id="logo"
          fontSize="3.2rem"
          fontFamily={`'Ibarra Real Nova', sans-serif`}
          _hover="none"
          textTransform="lowercase"
          mr='2rem'
        >
          lyqc.
        </Link>
        <Link>Home</Link>
        <Link>Portfolio</Link>
        <Link>Contact</Link>
      </HStack>
      <Socials fontSize='2.4rem' spacing='1.5rem'/>
    </Box>
  );
}

export default Footer;
