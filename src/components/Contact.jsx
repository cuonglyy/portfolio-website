import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Box,
  Textarea,
  FormControl,
  FormLabel,
  Button,
  Input,
  Stack,
  HStack,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const sendEmail = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          emailjs.sendForm(
            process.env.REACT_APP_EMAIL_SERVICE_ID,
            process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAIL_PUBLIC_KEY
          )
        );
      }, 1000);
    });
  };

  return (
    <Container
      id="contact"
      scrollMarginTop={[185, 190, 190]}
      maxW={["container.sm", "container.lg", "container.lg"]}
      my={[75, 85, 85]}
      px={[25, 35, 35]}
    >
      <Heading size={["xl", "lg", "lg"]} textAlign="center" mb={10}>
        Contact
      </Heading>
      <Grid templateColumns={["1fr", "2.5fr 1fr", "2.5fr 1fr"]}>
        <form ref={form} onSubmit={handleSubmit(sendEmail)}>
          <Grid
            templateRows="1fr 1fr 1fr 1fr 4fr 1fr"
            gap={4}
            w="97%"
            pr={4}
            borderRight={["none", "1px solid", "1px solid"]}
            justifyContent="center"
          >
            <GridItem>
              <Text variant="montserrat-font">
                Please don't hesitate and feel free to contact me! I'm open to
                offers or any questions you have.
              </Text>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel htmlFor="name">Your Name</FormLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  variant="outline"
                  w="55%"
                  {...register("name", {
                    required: true,
                  })}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel htmlFor="email">Your Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  variant="outline"
                  w="55%"
                  {...register("email", {
                    required: true,
                  })}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  variant="outline"
                  w="55%"
                  {...register("subject", {
                    required: true,
                  })}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea
                  id="message"
                  resize="none"
                  w="80%"
                  h={300}
                  {...register("message", {
                    required: true,
                  })}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <HStack>
                <Button
                  isLoading={isSubmitting}
                  loadingText="Sending"
                  colorScheme="blue"
                  type="submit"
                >
                  Send
                </Button>
              </HStack>
            </GridItem>
          </Grid>
        </form>
        <Stack spacing={12}>
          <Box textAlign={["center", "left", "left"]}>
            <Heading size="sm">Email</Heading>
            <Text variant="montserrat-font">cuonglyy@gmail.com</Text>
          </Box>
          <Box textAlign={["center", "left", "left"]}>
            <Heading size="sm">Phone</Heading>
            <Text variant="montserrat-font">+1 (408) 892-7750</Text>
          </Box>
        </Stack>
      </Grid>
    </Container>
  );
};

export default Contact;
