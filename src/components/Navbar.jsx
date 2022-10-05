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
      p="2em" 
      w="100%" 
      pos="fixed" 
      boxShadow={colorMode === 'light' ? 'lg' : '2xl'}
    >
      <Flex
        gap='2em'
        align='center'
      >
        <Link href="#">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#Projects">Projects</Link>
        <Link href="#contact">Contact Me!</Link>
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
