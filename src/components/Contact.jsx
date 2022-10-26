import React, { useRef, useState } from 'react'
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
  HStack,
} from '@chakra-ui/react'
import emailjs from '@emailjs/browser'



const Contact = () => {
  const form = useRef();
  const [formSent, setFormSent] = useState(false)
  
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      process.env.REACT_APP_EMAIL_SERVICE_ID,
      process.env.REACT_APP_EMAIL_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAIL_PUBLIC_KEY
    ).then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

    e.target.reset();
  };


  return (
    <Container
      id='contact'
      scrollMarginTop={[185, 190, 190]}
      maxW={['container.sm', 'container.lg', 'container.lg']}
      my={[75, 85, 85]}
      px={[25, 35, 35]}
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
        <form ref={form} onSubmit={sendEmail}>
          <Grid
            templateRows='1fr 1fr 1fr 1fr 4fr 1fr'
            w='98%'
            gap={4}
            borderRight={['none', '1px solid', '1px solid']}
            justifyContent='center'
          >
            <GridItem>
              <Text variant='montserrat-font'>
                Please don't hesitate and feel free to contact me!
                I'm open to offers or any questions you have.
              </Text>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel>Your Name</FormLabel>
                <Input
                  type='text'
                  name='name'
                  placeholder='Your Name'
                  variant='outline'
                  w='55%'
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel>Your Email</FormLabel>
                <Input
                  type='email'
                  name='email'
                  placeholder='Your Email'
                  variant='outline'
                  w='55%'
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl isRequired>
                <FormLabel>Subject</FormLabel>
                <Input
                  type='text'
                  name='subject'
                  placeholder='Subject'
                  variant='outline'
                  w='55%'
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea
                  name='message'
                  resize='none'
                  w='80%'
                  h={300}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <HStack>
                <Button
                  
                  loadingText='Sending'
                  colorScheme='blue'
                  type='submit'
                >
                  Send
                </Button>
                <Text>

                </Text>
              </HStack>
            </GridItem>
          </Grid>
        </form>
        <Stack spacing={12}>
          <Box>
            <Heading size='sm'>Email</Heading>
            <Text variant='montserrat-font'>cuonglyy@gmail.com</Text>
          </Box>
          <Box>
            <Heading size='sm'>Phone</Heading>
            <Text variant='montserrat-font'>+1 (408) 892-7750</Text>
          </Box>
        </Stack>
      </Grid>

    </Container>
  )
}

export default Contact