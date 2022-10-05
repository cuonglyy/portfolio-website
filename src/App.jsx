import React from 'react'
import NavBar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Home from './components/Home/Home.jsx'
import { Box } from '@chakra-ui/react'


function App() {
  return (
    <>
      <NavBar />
      <Box 
        as='main'
        pt='6.5em'
      >
        <Home />
        <About />
      </Box>
    </>
  )
}

export default App
