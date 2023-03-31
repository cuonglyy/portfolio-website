import React from "react";
import { Stack, Heading, Container, Divider, Button } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="111rem" px={0}>
      <Stack flexDirection={['column', 'row', 'row']} mb="15rem" alignItems="center" justifyContent="space-between" gap={['4rem', '2rem', '3.2rem']}>
        <Heading fontSize="3.5rem" minW={['35rem', "20rem", "20rem"]}>
          Interested in hiring me, or doing a project together?
        </Heading>
        <Divider display={['none', 'block', 'block']}/>
        <Button variant='secondary' flexShrink='0'>Contact Me</Button>
      </Stack>
    </Container>
  );
};

export default Contact;
