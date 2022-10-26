import React from 'react'
import NavBar from './components/Navbar.jsx'
import About from './components/About/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import {
  Box,
  Divider 
} from '@chakra-ui/react'


function App() {
  return (
    <>
      <NavBar />
      <Box as='main' pt='6.5em'>
        <About />
        <Divider/>
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Contact />
      </Box>
    </>
  )
}

export default App
