import React from 'react'
import { Element } from 'react-scroll'
import './App.css'
import Navbar from './navbar'

function App() {

  return (
    <>
       <Navbar />
       
       <Element name="about" className="section">
        <h2>Welcome to my Website!</h2>
        <p>This is the content for the about page.</p>
      </Element>

      <Element name="about" className="section">
        <h2>About Section</h2>
        <p>This is the content for the about page.</p>
      </Element>

      <Element name="projects" className="section">
        <h2>Projects Section</h2>
        <p>Here you can see my work.</p>
      </Element>

      <Element name="contact" className="section">
        <h2>Contact Section</h2>
        <p>Feel free to reach out to me.</p>
      </Element>
    </>
  )
}

export default App
