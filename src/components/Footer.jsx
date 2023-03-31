import React from "react";
import { Box, Link, Stack } from "@chakra-ui/react";
import Socials from './About/Socials'

function Footer() {
  return (
    <Box
      as="footer"
      display="flex"
      flexDirection={['column', 'row', 'row']}
      alignItems="center"
      justifyContent='space-between'
      p={["5.6rem 13.6rem", "2.8rem 4rem", "2.8rem 16.5rem"]}
      bgColor="#33323D"
      color="white"
    >
      <Stack flexDirection={['column', 'row', 'row']} gap={['3.2rem', '4rem' ,'4rem']} alignItems='center'>
        <Link
          id="logo"
          fontSize="3.2rem"
          fontFamily={`'Ibarra Real Nova', sans-serif`}
          _hover="none"
          textTransform="lowercase"
          mr={['0', '0' ,'2rem']}
        >
          lyqc.
        </Link>
        <Link>Home</Link>
        <Link>Portfolio</Link>
        <Link>Contact</Link>
      </Stack>
      <Socials fontSize='2.4rem' spacing='1.5rem' mt={['3.2rem', '0' ,'0']} />
    </Box>
  );
}

export default Footer;
