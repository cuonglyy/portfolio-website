import React from "react";
import { HStack, Heading, Container, Divider, Button } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="111rem" px={0}>
      <HStack mb="15rem" alignItems="center" justifyContent="space-between" gap='3.2rem'>
        <Heading fontSize="3.5rem" minW="30rem" w='35rem'>
          Interested in hiring me, or doing a project together?
        </Heading>
        <Divider />
        <Button variant='secondary' flexShrink='0'>Contact Me</Button>
      </HStack>
    </Container>
  );
};

export default Contact;
