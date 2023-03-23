import React from "react";
import RESUME from "../../assets/Cuong Ly Resume.pdf";
import { Button, Flex, Link } from "@chakra-ui/react";

const CTA = (props) => {
  return (
    <Flex gap={4} {...props}>
      <Button colorScheme="blue" size={["sm", "md", "md"]}>
        <Link href="#contact">Let's talk!</Link>
      </Button>

      <Button colorScheme="blue" size={["sm", "md", "md"]}>
        <Link
          target="_blank"
          /* Make sure to upload resume on google drive and insert here */
          href={RESUME}
        >
          View CV
        </Link>
      </Button>
    </Flex>
  );
};

export default CTA;
