import React, { useRef } from 'react'
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
  FormErrorMessage,
  Button,
  Input,
  Stack,
} from '@chakra-ui/react'
import emailjs from '@emailjs/browser'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAIL_PUBLIC_KEY,
      process.env.REACT_APP_EMAIL_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAIL_PUBLIC_KEY
    )
  };

  return (
    <Container
      id='contact'
      maxW={['container.sm', 'container.lg', 'container.lg']}
      mb={[50, 52, 52]}
    >
      <Heading
        size={['xl', 'lg', 'lg']}
        textAlign='center'
        mb={10}
      >
        Contact
      </Heading>
      <Grid
        templateColumns={['1fr', '2.5fr 1fr', '2.5fr 1fr']}
      >
        <form>
          <Grid
            templateRows='1fr 1fr 1fr 1fr 4fr 1fr'
            w='95%'
            gap={4}
          >
            <GridItem>
              <Text variant='montserrat-font'>
                Please don't hesitate and feel free to contact me! I'm open to offers or any questions you have.
              </Text>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>Your Name</FormLabel>
                <Input
                  variant='outline'
                  w='55%'
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>Your Email</FormLabel>
                <Input
                  variant='outline'
                  w='55%'
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>Subject</FormLabel>
                <Input
                  variant='outline'
                  w='55%'
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea
                  resize='none'
                  w='80%'
                  h={300}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <Button>
                Submit
              </Button>
            </GridItem>
          </Grid>
        </form>
        <Stack spacing={12}>
          <Box>
            <Heading size='sm'>Email</Heading>
            <Text>cuonglyy@gmail.com</Text>
          </Box>
          <Box>
            <Heading size='sm'>Phone</Heading>
            <Text>+1 (408) 892-7750</Text>
          </Box>
        </Stack>
      </Grid>

    </Container>
  )
}

export default Contact