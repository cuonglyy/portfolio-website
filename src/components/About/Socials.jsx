import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HStack, Link } from "@chakra-ui/react";

const Socials = ({fontSize, spacing}) => {
  return (
    <HStack spacing={spacing}>
      <Link
        href="https://www.linkedin.com/in/lyqcuong/"
        target="_blank"
        _hover={{ color: "blue.200" }}
        fontSize={fontSize}
      >
        <BsLinkedin />
      </Link>
      <Link
        href="https://github.com/cuonglyy"
        target="_blank"
        _hover={{ color: "blue.200" }}
        fontSize={fontSize}
      >
        <FaGithub />
      </Link>
    </HStack>
  );
};

export default Socials;
