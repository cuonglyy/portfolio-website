import React, { useState } from "react";
import {
  Link,
  Box,
  HStack,
  VStack,
  IconButton,
  Collapse,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  /* For menu (mobile users) */
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  /* For Navbar (Desktop & Tablet users) */
  const [activeNav, setActiveNav] = useState("#");

  return (
    <Box
      display="flex"
      flexDirection={["column", "row", "row"]}
      as="nav"
      py={["3.2rem", "6.4rem", "6.4rem"]}
      mx={["3.2rem", "4rem", "16.5rem"]}
      backgroundColor="white"
    >
      {/* 
        This section is wrapped in box tag for display flex
        This allows the collapsed menu to display below for mobile devices
      */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <Link id="logo" fontSize="3.2rem" fontFamily={`'Ibarra Real Nova', sans-serif`}>
          lyqc.
        </Link>
        {/* Menu button that appears for collapse nav bar (small screen) */}
        <IconButton
          display={["flex", "none", "none"]}
          icon={<AiOutlineMenu />}
          onClick={toggle}
          justifyContent="center"
          alignItems="center"
          ml="auto"
          backgroundColor="transparent"
          _hover="none"
          fontSize="1.3rem"
        />

        {/* Navbar appears for desktop & tablet users */}
        <HStack
          display={["none", "flex", "flex"]}
          spacing="3rem"
          fontSize="1.2rem"
        >
          <Link
            px={2}
            py={2}
            onClick={() => setActiveNav()}
            textTransform="uppercase"
            /*
            variant={
              activeNav === "#about" && colorMode === "dark"
                ? "nav-link-active-dark"
                : activeNav === "#about"
                ? "nav-link-active-light"
                : colorMode === "dark"
                ? "nav-link-dark"
                : "nav-link-light"
            }
            */
          >
            Home
          </Link>
          <Link
            px={2}
            py={2}
            onClick={() => setActiveNav()}
            textTransform="uppercase"
            /*
            variant={
              activeNav === "#projects" && colorMode === "dark"
                ? "nav-link-active-dark"
                : activeNav === "#projects"
                ? "nav-link-active-light"
                : colorMode === "dark"
                ? "nav-link-dark"
                : "nav-link-light"
            }
            */
          >
            Portfolio
          </Link>
          <Link
            px={2}
            py={2}
            onClick={() => setActiveNav()}
            textTransform="uppercase"
            /*
            variant={
              activeNav === "#contact" && colorMode === "dark"
                ? "nav-link-active-dark"
                : activeNav === "#contact"
                ? "nav-link-active-light"
                : colorMode === "dark"
                ? "nav-link-dark"
                : "nav-link-light"
            }
            */
          >
            Contact
          </Link>
        </HStack>
      </Box>

      {/* Menu displays for small screens (mobile devices) */}
      <Box display={["block", "none", "none"]}>
        <Collapse in={isOpen}>
          <VStack mt="2rem" textAlign="center">
            <Link
              py="1rem"
              onClick={() => setActiveNav("")}
              textTransform="uppercase"
              /*
                variant={
                  activeNav === "#about" && colorMode === "dark"
                    ? "nav-link-active-dark"
                    : activeNav === "#about"
                    ? "nav-link-active-light"
                    : colorMode === "dark"
                    ? "nav-link-dark"
                    : "nav-link-light"
                }
                */
            >
              Home
            </Link>
            <Link
              py="1rem"
              onClick={() => setActiveNav()}
              textTransform="uppercase"
              /*
                variant={
                  activeNav === "#projects" && colorMode === "dark"
                    ? "nav-link-active-dark"
                    : activeNav === "#projects"
                    ? "nav-link-active-light"
                    : colorMode === "dark"
                    ? "nav-link-dark"
                    : "nav-link-light"
                }
                */
            >
              Portfolio
            </Link>
            <Link
              py="1rem"
              onClick={() => setActiveNav()}
              textTransform="uppercase"
              /*
                variant={
                  activeNav === "#contact" && colorMode === "dark"
                    ? "nav-link-active-dark"
                    : activeNav === "#contact"
                    ? "nav-link-active-light"
                    : colorMode === "dark"
                    ? "nav-link-dark"
                    : "nav-link-light"
                }
                */
            >
              Contact Me
            </Link>
          </VStack>
        </Collapse>
      </Box>
    </Box>
  );
};

export default Navbar;
