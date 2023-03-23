import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Box, Link } from "@chakra-ui/react";

const Socials = () => {
  return (
    <Box
      mt={10}
      sx={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        fontSize: "4xl",
      }}
    >
      <Link
        href="https://www.linkedin.com/in/lyqcuong/"
        target="_blank"
        _hover={{ color: "blue.200" }}
      >
        <BsLinkedin />
      </Link>
      <Link
        href="https://github.com/cuonglyy"
        target="_blank"
        _hover={{ color: "blue.200" }}
      >
        <FaGithub />
      </Link>
    </Box>
  );
};

export default Socials;
