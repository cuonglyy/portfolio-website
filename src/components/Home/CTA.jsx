import React from 'react'
import RESUME from '../../assets/Cuong Ly Resume.pdf'
import {
  Button,
  Flex,
  Link
} from '@chakra-ui/react'


const CTA = (props) => {
  return (
    <Flex gap={4} {...props}>
      <Button colorScheme='blue' size='md'>
        <Link
          href='#contact'
          style={{'textDecoration':'none'}}
        >
          Let's talk!
        </Link>
      </Button>

      <Button colorScheme='blue' size='md'>
        <Link 
          target='_blank'
          style={{'textDecoration':'none'}}
          href={RESUME}
        >
          View CV
        </Link>
      </Button>
    </Flex>
  )
}

export default CTA