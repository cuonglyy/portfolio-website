import React from 'react'
import NavBar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Home from './components/Home/Home.jsx'
import {
  Box,
  Divider 
} from '@chakra-ui/react'


function App() {
  return (
    <>
      <NavBar />
      <Box as='main' pt='6.5em'>
        <Home />
        <Divider 
          orientation='horizontal'
          m='140px auto 0 auto'
          w='85%'
          
        />
        <About />
      </Box>
    </>
  )
}

export default App
