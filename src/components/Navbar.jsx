import React from "react";
import {
  Flex,
  Link,
  Box,
  useColorMode,
  Button
} from "@chakra-ui/react"
import { WiDaySunny, WiMoonWaxing6 } from 'react-icons/wi'


const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      as='nav'
      p="2em 3em" 
      w="100%"
      pos='fixed'
      zIndex={1} /* Not working??? */
      /* 
        Add shadow when user scrolls down
      */
    >
      <Flex
        gap='2em'
        align='center'
      >
        <Link href="#">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#Projects">Projects</Link>
        <Link href="#contact">Contact</Link>
        <Button
          leftIcon={colorMode === 'light' ? <WiDaySunny/> : <WiMoonWaxing6/>}
          marginLeft="auto"
          onClick={toggleColorMode}
        >
          Toggle
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
