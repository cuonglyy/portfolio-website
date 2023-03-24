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
    <Box as="nav" py={["36px", "54px"]} mx={[8, 10, 41.25]} w="100%">
      {/* Add logo here*/}

      {/* Menu button that appears for collapse nav bar (small screen) */}
      <IconButton
        display={["block", "none", "none"]}
        position="absolute"
        right={10}
        icon={<AiOutlineMenu />}
        onClick={toggle}
        border="1px solid"
        p={2.5}
        borderRadius={4}
      />

      {/* Navbar appears for desktop & tablet users */}
      <Box>
        <HStack
          display={{ base: "none", sm: "flex", md: "flex" }}
          justifyContent="flex-end"
          gap={[0, 0, 9]}
          spacing={0}
        >
          <Link
            href="#about"
            px={2}
            py={2}
            onClick={() => setActiveNav("#home")}
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
            href="#projects"
            px={2}
            py={2}
            onClick={() => setActiveNav("#projects")}
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
            href="#contact"
            px={2}
            py={2}
            onClick={() => setActiveNav("#contact")}
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

        {/* Menu displays for small screens (mobile devices) */}
        <Box display={["block", "none", "none"]} mt={[10, 0, 0]}>
          <Collapse in={isOpen}>
            <VStack mt={5} textAlign="center">
              <Link
                href="#about"
                px={2}
                py={2}
                onClick={() => setActiveNav("#about")}
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
                href="#projects"
                px={2}
                py={2}
                onClick={() => setActiveNav("#projects")}
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
                href="#contact"
                px={2}
                py={2}
                onClick={() => setActiveNav("#contact")}
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
    </Box>
  );
};

export default Navbar;
