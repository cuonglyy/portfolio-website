import React, { useRef } from 'react'
import {
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Box,
  TextArea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input
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
      h='50vh'
      maxW={['container.sm', 'container.lg', 'container.lg']}
    >
      <Heading
        size={['xl', 'lg', 'lg']}
        textAlign='center'
        mb={10}
      >
        Contact
      </Heading>
      <Grid
        templateColumns={['1fr', '2fr 1fr', '2fr 1fr']}
        border='1px solid'
      >
        <form>
          <Grid
            templateRows='1fr 1fr 1fr 2fr 1fr'
            border='1px solid blue'
          >
            <GridItem>
              <FormControl>
                <FormLabel>Your Name</FormLabel>
                <Input
                  variant='outline'
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>Your Email</FormLabel>
                <Input
                  variant='outline'
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>Subject</FormLabel>
                <Input
                  variant='outline'
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>Message</FormLabel>
              </FormControl>
            </GridItem>
            <GridItem>
              <Button>
                Submit
              </Button>
            </GridItem>
          </Grid>
        </form>
        <GridItem>
          Contact Info
        </GridItem>
      </Grid>

    </Container>
  )
}

export default Contact