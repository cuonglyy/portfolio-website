import React, {useEffect, useState} from "react";
import {
  Link,
  Box,
  useColorMode,
  Button,
  HStack,
  VStack,
  IconButton,
  Collapse,
  useColorModeValue,
} from "@chakra-ui/react"
import { WiDaySunny, WiMoonAltWaningGibbous2 } from 'react-icons/wi'
import { AiOutlineMenu } from 'react-icons/ai'


const Navbar = () => {
  /* Let's user change background color from light to dark and vice versa */
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('white', 'gray.800')

  /* For menu (mobile users) */
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  /* For Navbar (Desktop & Tablet users) */
  const [activeNav, setActiveNav] = useState('#');

  /* Adds box shadow to the navbar once user scrolls down */
  const [scrollY, setScrollY] = useState(0);
  useEffect( () => {
    const onScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  return (
    <Box
      as='nav'
      p={["32px 32px","32px 40px"]}
      w="100%"
      pos='fixed'
      zIndex={1}
      boxShadow={
        scrollY === 0 && isOpen ? 'lg' 
        : scrollY !== 0 ? 'lg'
        : 'none'
      }
      bg={bgColor}
    >
        <Button
          position='absolute'
          onClick={toggleColorMode}
          border='1px solid'
          fontSize={['1.5em', '1.5em', '1.5em']}
        >
          {colorMode === 'light' ? <WiDaySunny/> : <WiMoonAltWaningGibbous2/>}
        </Button>

        {/* Menu button that appears for collapse nav bar (small screen) */}
        <IconButton
          display={['block', 'none', 'none']}
          position='absolute'
          right={10}
          icon={<AiOutlineMenu />}
          onClick={toggle}
          border='1px solid'
          p={2.5}
          borderRadius={4}
        />

        {/* Navbar appears for desktop & tablet users */}
        <Box>
          <HStack
            display={{ base: 'none', sm: 'flex', md: 'flex'}}
            justifyContent='flex-end'
            gap={[0, 0, 9]}
            spacing={0}
          >
            <Link 
              href="#" 
              px={2} 
              py={2}
              onClick={ () => setActiveNav('#')}
              variant={ 
                activeNav === '#' && colorMode === 'dark' ? 'nav-link-active-dark'
                : activeNav === '#' ? 'nav-link-active-light'
                : 'nav-link'
              }
            >
              Home
            </Link>
            <Link 
              href="#about" 
              px={2} 
              py={2}
              onClick={ () => setActiveNav('#about')}
              variant={
                activeNav === '#about' && colorMode === 'dark' ? 'nav-link-active-dark'
                : activeNav === '#about' ? 'nav-link-active-light'
                : 'nav-link'}
            >
              About
            </Link>
            <Link
              href="#skills"
              px={2}
              py={2}
              onClick={ () => setActiveNav('#skills')}
              variant={
                activeNav === '#skills' && colorMode === 'dark' ? 'nav-link-active-dark'
                : activeNav === '#skills' ? 'nav-link-active-light'
                : 'nav-link'
              }
            >
              Skills
            </Link>
            <Link 
              href="#Projects" 
              px={2} 
              py={2}
              onClick={ () => setActiveNav('#projects')}
              variant={
                activeNav === '#projects' && colorMode === 'dark' ? 'nav-link-active-dark'
                : activeNav === '#projects' ? 'nav-link-active-light'
                : 'nav-link'
              }
            >
              Projects
            </Link>
            <Link 
              href="#contact" 
              px={2} 
              py={2}
              onClick={ () => setActiveNav('#contact')}
              variant={
                activeNav === '#contact' && colorMode === 'dark' ? 'nav-link-active-dark'
                : activeNav === '#contact' ? 'nav-link-active-light'
                : 'nav-link'
              }
            >
              Contact
            </Link>
          </HStack>
          
          {/* Menu displays for small screens (mobile devices) */}
        <Box
          mt={[10, 0, 0]}
        >
          <Collapse
            in={isOpen}
          >
            <VStack
              mt={5}
              textAlign='center'
            >
              <Link 
                href="#" 
                px={2} 
                py={2}
                onClick={ () => setActiveNav('#')}
                variant={ 
                  activeNav === '#' && colorMode === 'dark' ? 'nav-link-active-dark'
                  : activeNav === '#' ? 'nav-link-active-light'
                  : 'nav-link'
                }
                >
                  Home
                </Link>
                <Link 
                  href="#about" 
                  px={2} 
                  py={2}
                  onClick={ () => setActiveNav('#about')}
                  variant={
                    activeNav === '#about' && colorMode === 'dark' ? 'nav-link-active-dark'
                    : activeNav === '#about' ? 'nav-link-active-light'
                    : 'nav-link'}
                >
                  About
                </Link>
                <Link
                  href="#skills"
                  px={2}
                  py={2}
                  onClick={ () => setActiveNav('#skills')}
                  variant={
                    activeNav === '#skills' && colorMode === 'dark' ? 'nav-link-active-dark'
                    : activeNav === '#skills' ? 'nav-link-active-light'
                    : 'nav-link'
                  }
                >
                  Skills
                </Link>
                <Link 
                  href="#Projects" 
                  px={2} 
                  py={2}
                  onClick={ () => setActiveNav('#projects')}
                  variant={
                    activeNav === '#projects' && colorMode === 'dark' ? 'nav-link-active-dark'
                    : activeNav === '#projects' ? 'nav-link-active-light'
                    : 'nav-link'
                  }
                >
                  Projects
                </Link>
                <Link 
                  href="#contact" 
                  px={2} 
                  py={2}
                  onClick={ () => setActiveNav('#contact')}
                  variant={
                    activeNav === '#contact' && colorMode === 'dark' ? 'nav-link-active-dark'
                    : activeNav === '#contact' ? 'nav-link-active-light'
                    : 'nav-link'
                  }
                >
                  Contact
                </Link>
            </VStack>
          </Collapse>
        </Box>
        </Box>
    </Box>
  );
};

export default Navbar
